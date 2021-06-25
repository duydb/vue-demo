import deneric from 'deneric'

export class DocumentSchema extends deneric.Entity {
  constructor(data) {
    super(data, {
      name: ['name', deneric.String],
      db_name: ['db_name', deneric.String],
      organization_id: ['organization_id', deneric.Number, 1],
      display_name: ['display_name', deneric.String],
      columns: ['columns', [DocumentColumn]]
    })
  }
}

export class DocumentColumn extends deneric.Entity {
  constructor(data) {
    super(data, {
      class_name: ['class_name', deneric.String],
      name: ['name', deneric.String],
      display_name: ['display_name', deneric.String],
      is_nullable: ['is_nullable', deneric.Boolean]
    })
  }
}

// Todo:
//  Enum for column class_name (int32, string)
//  API CRUD database, tables
//  organization_id ??
