import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      let data = await request.validate(AuthValidator)
      let val = await auth.attempt(data.email, data.password)
      
      return response.send({ message: 'Logged In', data: val })
    } catch(exception) {
      if(exception.code === 'E_VALIDATION_FAILURE') {
        return response.badRequest({ error: exception.messages.errors[0]})

      }
      return response.internalServerError({ error: { message: exception}})
    }
  }

  public async logout({ auth, response}: HttpContextContract) {
    try {
      await auth.use('api').logout()
      if(auth.isLoggedOut) {
        return response.send({ message: 'Logged out!'})
      } else {
        return response.internalServerError({ error: 'Something went wrong while logging out!'})
      }
    } catch (exception) {
      return response.internalServerError({ error: exception.message })
    }
  }
}
