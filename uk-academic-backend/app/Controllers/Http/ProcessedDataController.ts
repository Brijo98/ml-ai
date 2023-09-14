import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from "axios";
import Env from '@ioc:Adonis/Core/Env'
import RawDatum from 'App/Models/RawDatum';
import ProcessedDatum from 'App/Models/ProcessedDatum';
import Operation from 'App/Models/Operation';

export default class ProcessedDataController {
    public async startCleaning({request, response}: HttpContextContract) {
        let id = request.params().id
        let raw_data = await RawDatum.query().where('operation_id', id)
        console.log(Env.get('PYTHON_URL'));
        for (let index = 0; index < raw_data.length; index++) {
            const element = raw_data[index];
            let result = await axios.post(Env.get('PYTHON_URL') + '/process-data', {data: [element.data]})
            
            let processed_data = new ProcessedDatum()
            processed_data.operation_id = id
            processed_data.raw_data_id = element.id
            processed_data.data = result.data.data[0]
            await processed_data.save()
        }
        let operation = await Operation.findOrFail(id)
        operation.is_processing_done = true
        await operation.save()
        return response.send({ data: "Data processed!" })
    }
}
