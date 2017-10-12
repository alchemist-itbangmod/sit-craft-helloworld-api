const HelloWorld = require('../models/HelloWorld.model')

module.exports = {
  getHelloWorld: async (req, res) =>{
    let query = 'hello-world'

    query = await HelloWorld.getHelloWorld(query)
      .then(data => data)
      .catch(err => err)

    if (query === 'hello-world') {
      res.json({
        status: false,
        error: 'Error , Something went wrong.'
      })
    } else {
      res.json({
        status: true,
        query
      })
    } 
  }
}