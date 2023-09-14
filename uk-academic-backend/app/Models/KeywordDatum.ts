import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class KeywordDatum extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public processed_data_id: number
  @column()
  public operation_id: number
  @column()
  public keyword: string
  @column()
  public value: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
