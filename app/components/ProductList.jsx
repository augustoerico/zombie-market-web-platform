var React = require('react');

var productsApi = require('productsApi');

var ProductList = React.createClass({
    componentDidMount: function () {
        console.log('componentDidMount');
        productsApi.listProducts().then(
            function (response) {
                console.log('response qwer');
                console.log(response);
            },
            function (error) {
                console.log('deu ruim!!');
                console.log(error);
            });
    },
    render: function () {
        return (
            <div>
                <h1>ProductList</h1>
            </div>
        );
    }
});

module.exports = ProductList;
