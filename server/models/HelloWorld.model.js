const mongoose = require('mongoose')

const HelloWorldSchema = mongoose.Schema(
  { 
    _id: mongoose.Schema.Types.ObjectId,
    hello_world: {type: String, default: 'sit-craft-camp'}
  },
  {
    collection: 'hello_world'
  }
)

const HelloWorldModel = mongoose.model('HelloWorldsModel', HelloWorldSchema)

module.exports = {
  model: HelloWorldModel,
  getHelloWorld: args => {
    return new Promise(async (resolve, reject) => {
      try {
        let helloWorld = await HelloWorldModel.find({})
        resolve(helloWorld)
      } catch (error) {
        reject(error)
      }
    })
  }
}
