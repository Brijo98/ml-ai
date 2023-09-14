import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.create({
      email: 'brijojohnson@gmail.com',
      password: 'BrijoJ@2210',
      name: 'Brijo J',
      is_active: true,
    })
  }
}
