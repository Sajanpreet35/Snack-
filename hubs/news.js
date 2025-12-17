export async function getCountryNews(country) {
  const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(
    country
  )}&mode=ArtList&format=json&maxrecords=15&sort=HybridRel`

  const res = await fetch(url)
  const data = await res.json()

  if (!data.articles) return []

  return data.articles.map(a => ({
    title: a.title,
    url: a.url,
    source: a.sourceCountry,
    date: a.seendate
  }))
}
