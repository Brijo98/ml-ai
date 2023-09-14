import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import KeywordDatum from 'App/Models/KeywordDatum'
import Operation from 'App/Models/Operation'
import ProcessedDatum from 'App/Models/ProcessedDatum'
import RawDatum from 'App/Models/RawDatum'
import SentimentDatum from 'App/Models/SentimentDatum'
import OperationValidator from 'App/Validators/OperationValidator'

export default class OperationsController {

    public async stats({response}: HttpContextContract) {
        let count = await Operation.query().count('id as count').first()
        let rawCount = await RawDatum.query().count('id as count').first()
        let processCount = await ProcessedDatum.query().count('id as count').first()
        let keywordCount = await KeywordDatum.query().count('id as count').first()
        let sentimentCount = await SentimentDatum.query().count('id as count').first()    
        
        response.send({data: {
            count: count?.$extras.count,
            rawCount: rawCount?.$extras.count,
            processCount: processCount?.$extras.count,
            keywordCount: keywordCount?.$extras.count,
            sentimentCount: sentimentCount?.$extras.count
        }})
    }

    public async index({ response}: HttpContextContract) {
       try {
        // let { page = 1 } = request.qs()
        // let limit = 10
        let data = await Operation.query()
        // .paginate(page, limit)

        return response.send({ message: 'data fetched', data: data })
       } catch (exception) {
        return response.internalServerError({ error: exception.message })
       }
    }

    public async store({request, auth, response}: HttpContextContract) {
        try {
            let obj = await request.validate(OperationValidator)
            let operation = await Operation.create({
                type: obj.type,
                user_id: auth.user!.id,
            })
            for (let index = 0; index < obj.data.length; index++) {
                const element = obj.data[index];
                await RawDatum.create({
                    operation_id: operation.id,
                    data: element
                })
            }
            response.send({ message: 'Data uploaded!' })
        } catch (exception) {
            return response.internalServerError({ error: exception.message })
        }
    }

    public async show({request, response}: HttpContextContract) {
        try {
            let id = request.params().id
            
            let data = await Operation.findOrFail(id)
            await data.load('keyword_data')
            await data.load('processed_data')
            await data.load('raw_data')
            await data.load('sentiment_data')
    
            return response.send({
                message: 'data fetched',
                data: data
            })
        } catch (exception) {
            return response.internalServerError({ error: {message: exception.message }})
        }
    }
    
}