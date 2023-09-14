import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProcessedDatum from 'App/Models/ProcessedDatum'
import axios from 'axios';
import Env from '@ioc:Adonis/Core/Env'
import SentimentDatum from 'App/Models/SentimentDatum';
import Operation from 'App/Models/Operation';

export default class SentimentsController {
    public async sentimentAnalysis({request, response}: HttpContextContract) {
        let id = request.params().id
        let operation = await Operation.findOrFail(id)
        let processed_data = await ProcessedDatum.query().where('operation_id', id)
        for (let index = 0; index < processed_data.length; index++) {
            const element = processed_data[index];
            let result = await axios.post(Env.get('PYTHON_URL') + '/sentiment-analysis', {data: element.data})
            let sentiment = new SentimentDatum()
            sentiment.subjectivity = result.data['data']['subjectivity']
            sentiment.polarity = result.data['data']['polarity']
            sentiment.processed_data_id = element.id
            sentiment.operation_id = id
            await sentiment.save()
        }

        operation.is_sentiment_performed = true
        await operation.save()

        response.send({ message: 'Sentiment analysis done!' })
    }
}
