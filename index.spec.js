const request = require('supertest') // calling it "request" is a common practice
const server = require('./index.js') // this is our first red, file doesn't exist yet
describe('server.js', () => {
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200
      const response = await request(server).get('/')
      expect(response.status).toEqual(expectedStatusCode)
    })
    it('should return a JSON object from the index route', async () => {
      const expectedBody = { api: 'running' }
      const response = await request(server).get('/')
      expect(response.body).toEqual(expectedBody)
    })
    it('should return a JSON object from the index route', async () => {
      const response = await request(server).get('/')
      expect(response.type).toEqual('application/json')
    })
  })
})
