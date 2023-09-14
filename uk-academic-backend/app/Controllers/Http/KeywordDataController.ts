import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Operation from 'App/Models/Operation';
import ProcessedDatum from 'App/Models/ProcessedDatum';
import axios from 'axios';
import Env from "@ioc:Adonis/Core/Env";
import KeywordDatum from 'App/Models/KeywordDatum';

export default class KeywordDataController {
     public async extractingKeyword({request, response}: HttpContextContract) {
        let id = request.params().id
        let operation = await Operation.findOrFail(id)
        let processed_data = await ProcessedDatum.query().where('operation_id', id)
        for (let index = 0; index < processed_data.length; index++) {
            const element = processed_data[index];
            let result = await axios.post(Env.get('PYTHON_URL') + '/keyword-extract', {data: element.data})
            for (let index = 0; index < result.data.data.length; index++) {
                const el = result.data.data[index];
                let keyword = new KeywordDatum()
                keyword.keyword = el.key
                keyword.value = el.value
                keyword.processed_data_id = element.id
                keyword.operation_id = id
                await keyword.save()
            }
        }
        operation.is_extraction_done = true
        await operation.save()

        response.send({ message: 'Keyword extraction done!' })
     }
}
