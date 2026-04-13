export function getBreadcrumbSchema({
  canonicalUrl,
  pageTitle,
  routePath,
  locale = 'en-us'
}) {
  const baseUrl = 'https://www.dripcapital.com'
  let segments = routePath.split('/').filter(Boolean)

  if (segments[0] && segments[0].toLowerCase() === locale.toLowerCase()) {
    segments = segments.slice(1)
  }

  const labelMap = {
    resources: 'Resources',
    blog: 'Blog',
    'finance-guides': 'Finance Guides',
    'press-releases': 'Press Releases',
    products: 'Products'
  }

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${baseUrl}/${locale}`
    }
  ]

  let path = `/${locale}`
  segments.forEach((segment, idx) => {
    path += `/${segment}`
    const isLast = idx === segments.length - 1

    items.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: isLast
        ? pageTitle
        : labelMap[segment] || segment.replace(/-/g, ' '),
      item: isLast ? canonicalUrl : `${baseUrl}${path}`
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}
