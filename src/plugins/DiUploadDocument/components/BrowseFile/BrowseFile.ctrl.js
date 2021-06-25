import UploadDocumentStageMixin from '../../mixins/UploadDocumentStage.mixin'
// import { UploadDocumentInfo } from '../../entities/UploadDocumentInfo'

export default {
  name: 'BrowseFile',
  mixins: [UploadDocumentStageMixin],
  // props: {
  //   value: UploadDocumentInfo
  // },
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
    },
    onChangeFile(e) {
      const files = []
      for (let i = 0; i < e.target.files.length; i++) {
        files.push(e.target.files[0])
      }
      this.files = files
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
  },
  watch: {
    files() {
      if (this.files.length > 1) {
        alert('Please drag only one file. Let\'s try again!')
        this.files = []
      } else if (this.files[0].size <= 0) {
        alert('This File is empty. Please choose another file!')
        this.files = []
      } else if (this.value) {
        this.value.files = this.files
        this.value.next()
      }
      this.files.forEach((file, i) => console.log('... file[' + i + '].name = ' + file.name))
    }
  }
}
