const proxy = "https://YOUR-WORKER.workers.dev/?url="

export async function searchArxiv(q) {
  const url = proxy + encodeURIComponent(
    `https://export.arxiv.org/api/query?search_query=all:${q}&max_results=1`
  )

  const r = await fetch(url)
  const t = await r.text()
  const m = t.match(/<opensearch:totalResults>(\d+)</)

  return [{
    title: "arXiv Research",
    source: "arXiv",
    count: m ? Number(m[1]) : 0,
    url: "https://arxiv.org"
  }]
}
