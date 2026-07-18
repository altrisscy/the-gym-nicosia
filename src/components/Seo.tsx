import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://the-gym-nicosia.vercel.app'

type SeoProps = {
  title: string
  description: string
  path: string
  image: string
}

export function Seo({ title, description, path, image }: SeoProps) {
  const url = `${siteUrl}${path}`
  const imageUrl = `${siteUrl}${image}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['BarOrPub', 'Restaurant'],
    name: 'The Gym',
    url,
    image: imageUrl,
    telephone: '+35722002001',
    priceRange: '€15–35',
    servesCuisine: ['Mediterranean', 'Brunch', 'Cocktails'],
    acceptsReservations: true,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.7', reviewCount: '1197' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '89 Onasagorou',
      addressLocality: 'Nicosia',
      postalCode: '1011',
      addressCountry: 'CY',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Sunday'], opens: '10:30', closes: '01:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday', 'Saturday'], opens: '10:30', closes: '01:30' },
    ],
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
