import service from './service.js'

const request = (url, params, method) => {
  return service({
    url: url,
    method: method,
    data: params
  })
}

export default request
