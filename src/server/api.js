let BASE_URL = ''
switch (process.env.NODE_ENV) {
case 'production':
  BASE_URL = 'product_url'
  break
default:
  BASE_URL = 'default_url'
}
export default {
  BASE_URL,
  TEST_URL: '/api/test_url',
}
