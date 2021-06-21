export default function ({ $axios }, inject) {
  const api = $axios.create({
    baseUrl: process.env.AUTH_API_URL,
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  })

  const lendersApi = $axios.create({
    baseUrl: process.env.LENDERS_API_URL,
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  })

  inject('api', api)
  inject('lendersApi', lendersApi)
}
