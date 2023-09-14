import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'keyword_data'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('processed_data_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('processed_data')
      table.integer('operation_id').notNullable().unsigned().references('id').inTable('operations')
      table.string('keyword').notNullable()
      table.double('value').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
