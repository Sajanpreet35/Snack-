const proxy = "https://YOUR-WORKER.workers.dev/?url="

export async function searchOpenAlex(q) {
  const url = proxy + encodeURIComponent(
    `https://api.openalex.org/works?search=${q}`
  )

  const r = await fetch(url)
  const j = await r.json()

  return [{
    title: "OpenAlex Papers",
    source: "OpenAlex",
    count: j.meta.count || 0,
    url: "https://openalex.org"
  }]
}
