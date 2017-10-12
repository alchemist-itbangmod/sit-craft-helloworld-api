const HelloWorld = require('../HelloWorld.model')

describe('HelloWorldQuery', ()=> {
  it(`Query 'hello-world' Correctly!`, async () => {
    try {
      const helloworld = new HelloWorld()
      await helloworld.getHelloWorld()

      expect(prepareMongooseObject(helloworld.query.hello_world)).toMatchSnapshot()
    } catch (error) {
      expect(error).toMatchSnapshot()
    }
  })
})