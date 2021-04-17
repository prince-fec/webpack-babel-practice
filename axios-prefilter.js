const axios = require('axios');
const TOKEN = require('./config');

axios.defaults.headers.common['Authorization'] = TOKEN.TOKEN;

const CAMPUS_CODE = 'hr-rfe';

const requests = {
  products: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/products`,
  reviews: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/reviews`,
  cart: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/cart`
}

module.exports = requests;