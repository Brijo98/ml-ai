import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProcessedDatum extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public raw_data_id: number
  
  @column()
  public operation_id: number

  @column()
  public data: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
