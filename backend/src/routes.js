const express = require('express')
const routes = express.Router()

const EntityController = require('./Controllers/EntityController')

routes.
  get('/users', EntityController.index).
  post('/users', EntityController.create)

module.exports = routes