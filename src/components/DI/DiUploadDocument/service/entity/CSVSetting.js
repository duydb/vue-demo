import deneric from 'deneric'

export class CSVSetting extends deneric.Entity {
  constructor(data) {
    super(data, {
      'include_header': ['include_header', deneric.Boolean],
      'delimiter': ['delimiter', deneric.String],
      'quote': ['quote', deneric.String],
      'add_batch_info': ['add_batch_info', deneric.Boolean]
    })
  }
}
