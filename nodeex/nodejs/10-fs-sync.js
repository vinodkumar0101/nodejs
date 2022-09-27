const {readFileSync,writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const sec = readFileSync('./content/sec.txt','utf-8')

console.log(first,sec)

writeFileSync(
'./content/result-sync.txt',
`here is the result: ${first} ${sec}`
)