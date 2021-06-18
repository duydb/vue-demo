export default {
  name: 'BrowseFile',
  data() {
    return {
      isDragOver: false,
      files: []
    }
  },
  methods: {
    reset() {
      this.isDragOver = false
      this.files = []
    },
    show() {
      this.reset()
      this.$refs.modal.show()
    },
    onDrop(e) {
      e.preventDefault()
      this.isDragOver = false
      let files = []
      if (e.dataTransfer.items) {
        console.log('e.dataTransfer.items')
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (e.dataTransfer.items[i].kind === 'file') {
            files.push(e.dataTransfer.items[i].getAsFile())
          }
        }
      } else {
        console.log('e.dataTransfer.files')
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          files.push(e.dataTransfer.files[i])
        }
      }
      this.files = files
      this.files.forEach((file, i) => console.log('... file[' + i + '].name = ' + file.name))
      // console.log('onDrop', e)
    },
    onChangeFile(e) {
      this.file = e.target.files[0]
      for (let i = 0; i < e.target.files.length; i++) {
        this.files.push(e.target.files[0])
      }
      console.log(e.target.files[0])
      this.files.forEach((file, i) => console.log('... file[' + i + '].name = ' + file.name))
    },
    onDragOver(e) {
      this.isDragOver = true
      e.preventDefault()
    },
    onDragLeave(e) {
      console.log('onDragOver', e)
      this.isDragOver = false
    },
    browserLocalFiles() {
      this.$refs.file.value = null
      this.$refs.file.click()
    }
  }
}
