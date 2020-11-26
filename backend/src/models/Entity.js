const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omnistack_database:canto4789@cluster0.efbho.mongodb.net/beginning?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const EntitySchema = new mongoose.Schema({
  firstName: String, 
  lastName: String
})

module.exports = mongoose.model('Entity', EntitySchema)