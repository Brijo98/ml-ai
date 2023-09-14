import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SentimentDatum extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public processed_data_id: number
  @column()
  public operation_id: number
  @column()
  public polarity: number
  @column()
  public subjectivity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
