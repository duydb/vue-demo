import { ChunkContainerInfo } from '../entities/ChunkContainerInfo'

const DocumentService = Object.freeze({
  initChunkContainer(file, chunkSize = 10000) {
    if (!file) {
      alert('Please choose file to upload')
      return
    }
    if (file <= 0) {
      alert('Please choose other file. The size of this file is zero!')
      return
    }
    return new ChunkContainerInfo(Math.ceil(file.size / chunkSize))
  },
  async readChunk(file, chunkContainer, chunkSize = 10000, encoding) {
    if (chunkContainer.total <= 0) {
      console.log('Empty chunks')
      // alert('Please choose file to upload')
      return Promise.resolve(false)
    }
    if (!chunkContainer.processItem) {
      console.log('All done')
      return Promise.resolve(false)
    }
    return new Promise(resolve => {
      const chunkIndex = chunkContainer.processItem.index
      console.log('Chunk Index = ', chunkContainer.processItem.index)

      var reader = new FileReader()
      reader.onload = (e) => {
        console.log('end read file')
        const content = e.target.result
        const lines = content.split(/\r?\n|\r/)
        const totalLines = lines.length
        const totalCharacter = content.length
        // const lastLine = lines[totalLines - 1]
        // console.log([lastLine])
        chunkContainer.processItem.totalLines = totalLines
        chunkContainer.processItem.totalCharacter = totalCharacter
        chunkContainer.processItem.firstLine = lines[0]
        chunkContainer.processItem.lastLine = lines[totalLines - 1]

        if (chunkContainer.prevProcessItem) {
          chunkContainer.processItem.fixedFirstLine = [(chunkContainer.prevProcessItem.lastLine || ''), chunkContainer.processItem.firstLine].join('')
          chunkContainer.processItem.fixedLastLine = ''
        } else {
          chunkContainer.processItem.fixedFirstLine = chunkContainer.processItem.firstLine
          chunkContainer.processItem.fixedLastLine = ''
        }

        chunkContainer.processItem.lines = [chunkContainer.processItem.fixedFirstLine].concat(lines.slice(1, lines.length - 2))
        chunkContainer.processItem.totalLines = lines.length
        if (chunkContainer.processItem.lines.length > 1) {
          chunkContainer.processItem.fixedLastLine = chunkContainer.processItem.lines[chunkContainer.processItem.lines.length - 1]
        }
        chunkContainer.next()
        resolve(true)

        // this.$refs.body.innerHTML = `<h1>totalLines= ${totalLines} | totalCharacter = ${totalCharacter}</h1><h2>First Line: </h2><div>${lines[0]}</div><h2>Last Line: </h2><div>${lastLine}</div>`
      }
      reader.onerror = e => {
        console.error(e)
        resolve(false)
      }
      // .slice(0, 10 * 1024 * 1024)
      const startFrom = chunkIndex * chunkSize
      console.log(`Read From = ${startFrom} -> ${startFrom + chunkSize}`)
      reader.readAsText(file.slice(startFrom, startFrom + chunkSize), encoding)
      console.log('start read file')
    })
  }
})

export default DocumentService
