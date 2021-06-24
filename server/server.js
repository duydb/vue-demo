var fs = require('fs')

const data = []

for (let row = 0; row < 2000000; row++) {
  let item = []
  let rowNum = (row + 1).toString(36)
  for (let col = 0; col < 12; col++) {
    if (col === 0) {
      item.push(row)
    } else if (col === 1) {
      item.push(`Tiếng Việt ${col + 1}`)
    } else if (col === 2) {
      item.push(new Date().toString())
    } else if (col === 3) {
      item.push(+new Date() + row * 100 + col)
    } else if (col === 4) {
      item.push((row + col) % 2 === 0)
    } else {
      item.push(`${rowNum}_${col + 1}`)
    }
  }
  data.push(item.join(','))
}

fs.writeFile('example.log', data.join('\n'), 'UTF8', e => {
  console.log(e)
})
