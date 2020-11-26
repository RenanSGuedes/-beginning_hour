const Entity = require('../models/Entity')

module.exports = {
  
  async index(req, res) {
    const entities = await Entity.find()

    return res.status(200).json(entities) // 200 - OK (Default)
  },

  async create(req, res) {
    const { firstName, lastName } = req.body
    
    const entity = await Entity.create({
      firstName,
      lastName
    })

    console.log(entity) // 202 - Created
  }

}