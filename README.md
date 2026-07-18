# The Gym — Nicosia

A four-page restaurant website built with React 19, Vite, TypeScript, Tailwind CSS and React Router. Content is seeded in `src/content.json` and can be replaced at build time from a Google Sheet. No Google credentials or content API requests are shipped to the browser.

## Local development

```bash
npm install --legacy-peer-deps
npm run dev
```

Production check:

```bash
npm run prebuild && npm run build
npm run preview
```

When `VITE_CONTENT_ENDPOINT` is not set, `prebuild` keeps the realistic seeded content already committed in `src/content.json`.

## Google Sheet setup in Lovable

1. In the Lovable builder, open **Connectors**, add **Google Sheets**, and authorize the workspace account that will own the content sheet.
2. Create a spreadsheet named **The Gym — Website Content**.
3. Create exactly four tabs: `home`, `menu`, `about`, `reservations`.
4. Seed each tab from the matching array in `src/content.json`. Row 1 contains field keys; every following row contains one record. Keep a `type` column on every tab. Repeating menu entries use one row per item.
5. Share the finished sheet with the Apps Script service account/workspace identity as required by your Lovable setup, then record the sheet URL.

Suggested headers:

- `home`: `type, eyebrow, title, body, primaryCta, secondaryCta`
- `menu`: `type, eyebrow, title, body, category, name, description, price`
- `about`: `type, eyebrow, title, body`
- `reservations`: `type, eyebrow, title, body`

Any future sheet write from the site must go through a Lovable server function that calls the connector. Never expose connector credentials or call the Google Sheets API from browser code.

## Apps Script JSON endpoint

1. In Google Cloud Console, create or select a project and enable the **Google Sheets API** and **Apps Script API**.
2. Open the content sheet, then choose **Extensions → Apps Script**.
3. Paste this into `Code.gs`, replacing `PASTE_SHEET_ID_HERE` with the ID between `/d/` and `/edit` in the sheet URL:

```js
const SHEET_ID = 'PASTE_SHEET_ID_HERE';
function doGet(e) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const out = {};
  ss.getSheets().forEach(sh => {
    const rows = sh.getDataRange().getValues();
    if (!rows.length) return;
    const [header, ...body] = rows;
    out[sh.getName()] = body.map(r =>
      Object.fromEntries(header.map((h, i) => [h, r[i]]))
    );
  });
  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Choose **Deploy → New deployment → Web app**. Execute as **Me** and set access to **Anyone with the link**.
5. Copy the `/exec` deployment URL. A browser visit should return JSON with all four tab names.

The `scripts/fetch-content.mjs` prebuild script downloads that JSON, validates the four tabs, and writes it to `src/content.json`. All pages import that local file, so the built site performs zero runtime content requests.

## GitHub and Vercel deployment

1. Create a new GitHub repository and push this folder.
2. Import the repository into Vercel and choose the **Vite** framework preset.
3. Add `VITE_CONTENT_ENDPOINT` with the Apps Script `/exec` URL to Production, Preview and Development environments.
4. Use build command `npm run prebuild && npm run build` and output directory `dist`.
5. Deploy, or run `vercel --prod` from this folder after linking the project.

`vercel.json` includes the SPA rewrite required for direct visits to `/home`, `/menu`, `/about`, and `/reservations`.

## Auto-publish from the sheet

In Vercel open **Project Settings → Git → Deploy Hooks**, create a hook named `Google Sheet Publish`, and copy its URL. Add a sheet tab or cell labelled `Publish` and store the hook URL in Script Properties (recommended) under `VERCEL_DEPLOY_HOOK`. Do not expose the hook in this repository.

Add this to `Code.gs`:

```js
function onContentEdit(e) {
  const watchedTabs = ['home', 'menu', 'about', 'reservations'];
  if (!watchedTabs.includes(e.range.getSheet().getName())) return;
  const hook = PropertiesService.getScriptProperties()
    .getProperty('VERCEL_DEPLOY_HOOK');
  if (!hook) return;
  UrlFetchApp.fetch(hook, { method: 'post', muteHttpExceptions: true });
}
```

In Apps Script, open **Triggers → Add Trigger**, select `onContentEdit`, event source **From spreadsheet**, event type **On edit**, then authorize it. Use an installable trigger because simple triggers cannot call services that require authorization.

## Content and SEO

Each route owns its page component and unique title, description, Open Graph image, Twitter card and JSON-LD `BarOrPub`/`Restaurant` data. Update the production hostname in `src/components/Seo.tsx` after assigning the final Vercel/custom domain.

The reservation form is a polished front-end flow and intentionally does not claim a confirmed booking. Connect its submit handler to the venue's booking provider or a server function before accepting live reservations.
