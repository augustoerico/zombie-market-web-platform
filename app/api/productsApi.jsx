var axios = require('axios');

const PRODUCTS_API_URL = process.env.PRODUCTS_API_URL || 'http://localhost:3000';

module.exports = {
        listProducts: function () {
            var url = `${PRODUCTS_API_URL}/products`;
            return axios.get(url);
        },
        getProduct: function (id) {
            var url = `${PRODUCTS_API_URL}/products/${id}`;
            return axios.get(url);
        },
        createProduct: function (product) {
            var url = `${PRODUCTS_API_URL}/products`;
            return axios.post(url, product);
        }
};
