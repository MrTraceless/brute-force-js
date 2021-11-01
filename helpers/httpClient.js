const request = require('superagent')
const config = require('../config')

module.exports = class {
  get(endpoint, headers) {
    return request.get(config.baseUrl+endpoint).set(headers).ok(res => res.status < 505)
  }
  post(endpoint, body, headers) {
    return  request.post(config.baseUrl+endpoint).send(body).set(headers).ok(res => res.status < 505)
  }
  put(endpoint, body, headers) {
    return request.put(config.baseUrl+endpoint).send(body).set(headers).ok(res => res.status < 505)
  }
  patch(endpoint, body, headers) {
    return request.patch(config.baseUrl+endpoint).send(body).set(headers).ok(res => res.status < 505)
  }
  delete(endpoint, headers) {
    return request.delete(config.baseUrl+endpoint).set(headers).ok(res => res.status < 505)
  }
}
