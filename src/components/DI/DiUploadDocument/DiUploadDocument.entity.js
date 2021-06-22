export const DI_UPLOAD_DOC_STAGE = {
  browse_file: 'browse_file',
  preview_file: 'preview_file',
  describe_db: 'describe_db',
  uploading: 'uploading'
}

const DI_UPLOAD_DOC_TITLE = {
  [DI_UPLOAD_DOC_STAGE.browse_file]: 'Add New Data',
  [DI_UPLOAD_DOC_STAGE.preview_file]: 'Create new file upload dataset',
  [DI_UPLOAD_DOC_STAGE.describe_db]: 'Create new file upload dataset',
  [DI_UPLOAD_DOC_STAGE.uploading]: 'Upload data'
}

const DI_UPLOAD_DOC_DESC = {
  [DI_UPLOAD_DOC_STAGE.browse_file]: 'Upload spreadsheet',
  [DI_UPLOAD_DOC_STAGE.preview_file]: 'Select tables',
  [DI_UPLOAD_DOC_STAGE.describe_db]: 'Name & Describe Your DataSet',
  [DI_UPLOAD_DOC_STAGE.uploading]: 'Inporting data to server'
}

export class DIUploadDocumentInfo {
  constructor(stage) {
    this.stage = stage || DI_UPLOAD_DOC_STAGE.browse_file
    this.files = []
  }

  title() {
    return DI_UPLOAD_DOC_TITLE[this.stage]
  }

  desc() {
    return DI_UPLOAD_DOC_DESC[this.stage]
  }

  next() {
    switch (this.stage) {
      case DI_UPLOAD_DOC_STAGE.browse_file:
        this.stage = DI_UPLOAD_DOC_STAGE.preview_file
        break
      case DI_UPLOAD_DOC_STAGE.preview_file:
        this.stage = DI_UPLOAD_DOC_STAGE.describe_db
        break
      case DI_UPLOAD_DOC_STAGE.describe_db:
        this.stage = DI_UPLOAD_DOC_STAGE.uploading
        break
      // case DI_UPLOAD_DOC_STAGE.uploading:
      //   this.stage = DI_UPLOAD_DOC_STAGE.preview_file
      //   break
    }
  }

  back() {
    switch (this.stage) {
      // case DI_UPLOAD_DOC_STAGE.browse_file:
      //   this.stage = DI_UPLOAD_DOC_STAGE.preview_file
      //   break
      case DI_UPLOAD_DOC_STAGE.preview_file:
        this.stage = DI_UPLOAD_DOC_STAGE.browse_file
        break
      case DI_UPLOAD_DOC_STAGE.describe_db:
        this.stage = DI_UPLOAD_DOC_STAGE.preview_file
        break
      case DI_UPLOAD_DOC_STAGE.uploading:
        this.stage = DI_UPLOAD_DOC_STAGE.uploading
        break
    }
  }
}
