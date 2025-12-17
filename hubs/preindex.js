import fs from "fs"

const topics = [
  "physics",
  "chemistry",
  "biology",
  "computer science",
  "class 10 science",
  "neet",
  "jee physics"
]

const results = []

for (const q of topics) {
  const r = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&format=json&origin=*`
  )
  const j = await r.json()

  results.push({
    query: q,
    wikipedia: j.query.searchinfo.totalhits,
    privacy: "safe"
  })
}

fs.writeFileSync(
  "data/preindex.json",
  JSON.stringify({ generated: new Date(), results }, null, 2)
)
