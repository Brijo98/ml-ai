import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ProcessedDatum from './ProcessedDatum'
import RawDatum from './RawDatum'
import SentimentDatum from './SentimentDatum'
import KeywordDatum from './KeywordDatum'

export default class Operation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public type: string

  @column({
    serialize: (val: number) => Boolean(val),
    prepare: (val: Boolean) => Number(val)
  })
  public is_processing_done: boolean
  @column({
    serialize: (val: number) => Boolean(val),
    prepare: (val: Boolean) => Number(val)
  })
  public is_extraction_done: boolean
  @column({
    serialize: (val: number) => Boolean(val),
    prepare: (val: Boolean) => Number(val)
  })
  public is_sentiment_performed: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @hasMany(() => RawDatum, {
    foreignKey: 'operation_id'
  })
  public raw_data: HasMany<typeof RawDatum>

  @hasMany(() => ProcessedDatum, {
    foreignKey: 'operation_id',
  })
  public processed_data: HasMany<typeof ProcessedDatum>

  @hasMany(() => KeywordDatum, {
    foreignKey: 'operation_id'
  })
  public keyword_data: HasMany<typeof KeywordDatum>

  @hasMany(() => SentimentDatum, {
    foreignKey: 'operation_id',
  })
  public sentiment_data: HasMany<typeof SentimentDatum>

}
