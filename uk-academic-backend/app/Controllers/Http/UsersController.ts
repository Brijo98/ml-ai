import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    let data = await User.all()
    return response.send({ data: data })
  }

  public async show({ request, response }: HttpContextContract) {
    let id = Number(request.params().id)
    let user = await User.findOrFail(id)
    return response.send({ data: user })
  }

  public async store(ctx: HttpContextContract) {
    return await this.save(ctx)
  }

  public async update(ctx: HttpContextContract) {
    try {
      let id = Number(ctx.request.params().id)
      let user = await User.findOrFail(id)
      return await this.save(ctx, user)
    } catch (exception) {
      return ctx.response.internalServerError({
        error: { rule: 'INTERNAL_SERVER_ERROR', field: 'N/A', message: exception.message },
      })
    }
  }

  public async updateStatus({ request, response }: HttpContextContract) {
    try {
      let id = Number(request.params().id)
      let user = await User.findOrFail(id)
      user.is_active = user.is_active ? false : true
      user = await user.save()
      return response.send({ message: `User ${user.is_active ? 'Disabled' : 'Enabled'}!` })
    } catch (exception) {
      return response.internalServerError({
        error: { rule: 'INTERNAL_SERVER_ERROR', field: 'N/A', message: exception.message },
      })
    }
  }

  private async save({ request, response }: HttpContextContract, record: User | null = null) {
    try {
      let user: User
      let body = await request.validate(UserValidator)
      user = record === null ? new User() : record

      user.name = body.name
      user.email = body.email
      user.password = body.password

      await user.save()

      return response.send({ message: `User Record ${record ? 'Updated!' : 'Created'}` })
    } catch (exception) {
      if (exception.code === 'E_VALIDATION_FAILURE') {
        return response.badRequest({ error: exception.messages.errors[0] })
      } else {
        return response.internalServerError({
          error: { rule: 'INTERNAL_SERVER_ERROR', field: 'N/A', message: exception.message },
        })
      }
    }
  }
}
