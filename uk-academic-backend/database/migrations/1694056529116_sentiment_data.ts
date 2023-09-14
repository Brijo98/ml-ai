import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sentiment_data'

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
      table.double('polarity')
      table.double('subjectivity')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
