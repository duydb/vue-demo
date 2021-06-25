import { ChunkContainerInfo } from '../../plugins/DiUploadDocument/entities/ChunkContainerInfo'
import { fileSize, numberFixed } from '@/misc/Utils'
import DocumentService from '../../plugins/DiUploadDocument/services/DocumentService'

export default {
  name: 'UploadLargeFile',
  props: {
    maxLines: {
      type: Number,
      default: 1000
    },
    separator: {
      type: String,
      default: ','
    },
    encoding: {
      type: String,
      default: undefined
    },
    chunkSize: {
      type: Number,
      default: 10000
    }
  },
  data() {
    return {
      file: null,
      uploading: false,
      chunk: new ChunkContainerInfo()
    }
  },
  filters: {
    fileSize,
    numberFixed
  },
  methods: {
    reset() {
      this.file = null
      this.$refs.file.value = null
      this.uploading = false
      this.chunk = new ChunkContainerInfo()
    },
    async calculateFile() {
      if (!this.file) {
        alert('Please choose file to upload')
        return
      }
      if (this.file.size <= 0) {
        alert('Please choose other file. The size of this file is zero!')
        return
      }
      // this.uploading = true
      this.chunk = new ChunkContainerInfo(Math.ceil(this.file.size / this.chunkSize))
      for (const item of this.chunk.items) {
        console.log(item, item === this.chunk.processItem)
        console.log(this.chunk._processIndex)
        await DocumentService.readChunk(this.file, this.chunk, this.chunkSize, this.encoding)
      }
      console.log(this.chunk)
    },
    // readChunk() {
    //   if (this.chunk.total <= 0) {
    //     alert('Please choose file to upload')
    //     return
    //   }
    //   if (!this.chunk.processItem) {
    //     alert('All done')
    //     return
    //   }
    //   const chunkIndex = this.chunk.processItem.index
    //
    //   var reader = new FileReader()
    //   reader.onload = (e) => {
    //     console.log('end read file', e)
    //     const content = e.target.result
    //     const lines = content.split(/\r?\n|\r/)
    //     const totalLines = lines.length
    //     const totalCharacter = content.length
    //     const lastLine = lines[totalLines - 1]
    //     console.log([lastLine])
    //     this.chunk.processItem.totalLines = totalLines
    //     this.chunk.processItem.totalCharacter = totalCharacter
    //     this.chunk.processItem.firstLine = lines[0]
    //     this.chunk.processItem.lastLine = lines[totalLines - 1]
    //
    //     if (this.chunk.prevProcessItem) {
    //       this.chunk.processItem.fixedFirstLine = [(this.chunk.prevProcessItem.lastLine || ''), this.chunk.processItem.firstLine].join('')
    //       this.chunk.processItem.fixedLastLine = ''
    //     } else {
    //       this.chunk.processItem.fixedFirstLine = this.chunk.processItem.firstLine
    //       this.chunk.processItem.fixedLastLine = ''
    //     }
    //
    //     this.chunk.next()
    //     console.log()
    //     // this.$refs.body.innerHTML = `<h1>totalLines= ${totalLines} | totalCharacter = ${totalCharacter}</h1><h2>First Line: </h2><div>${lines[0]}</div><h2>Last Line: </h2><div>${lastLine}</div>`
    //   }
    // // .slice(0, 10 * 1024 * 1024)
    //   const startFrom = chunkIndex * this.chunkSize
    //   reader.readAsText(this.file.slice(startFrom, startFrom + this.chunkSize), this.encoding)
    //   console.log('start read file')
    // },
    // validateContent(content) {
    //   const lines = content.split(/\r?\n|\r/)
    //   const totalLines = lines.length
    //   const totalCharacter = content.length
    //
    // },
    onChangeFile(e) {
      this.file = e.target.files[0]
      console.log(e.target.files[0])
      // console.log(e.target)
      // this.$refs.file.click()
    }
  }
}
