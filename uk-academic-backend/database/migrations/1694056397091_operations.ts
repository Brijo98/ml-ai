import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'operations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      table.string('type').notNullable()
      table.boolean('is_processing_done').notNullable().defaultTo(false)
      table.boolean('is_extraction_done').notNullable().defaultTo(false)
      table.boolean('is_sentiment_performed').notNullable().defaultTo(false)
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
