var fs = require('fs')

const data = []

for (let row = 0; row < 2000000; row++) {
  let item = []
  let rowNum = (row + 1).toString(36)
  for (let col = 0; col < 12; col++) {
    item.push(`${rowNum}_${col + 1}`)
  }
  data.push(item.join(','))
}

fs.writeFile('example.log', data.join('\n'), 'UTF8', e => {
  console.log(e)
})
