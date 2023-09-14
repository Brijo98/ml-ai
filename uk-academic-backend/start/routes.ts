/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Backend API'
})

Route.post('/login', 'AuthController.login')
Route.get('/logout', 'AuthController.logout')

Route.group(() => {
  Route.resource('users', 'UsersController').only(['index', 'show', 'store', 'update'])
  Route.get('users/status-update/:id', 'UsersController.updateStatus')
  Route.get('dashboard', 'OperationsController.stats')
  Route.resource('operations', 'OperationsController').only(['index', 'show', 'store'])
  Route.get('processed-data/:id', 'ProcessedDataController.startCleaning')
  Route.get('keyword-extraction/:id', 'KeywordDataController.extractingKeyword')
  Route.get('sentiment-analysis/:id', 'SentimentsController.sentimentAnalysis')
}).middleware(['auth'])
