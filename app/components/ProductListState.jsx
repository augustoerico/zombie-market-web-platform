var React = require('react');
var ProductList = require('ProductList');

var productsApi = require('productsApi');

var ProductListState = React.createClass({
    getInitialState: function () {
        return {
            products: []
        }
    },
    componentDidMount: function () {
        var that = this;
        productsApi.listProducts().then(
            function (response) {
                that.setState({
                    products: response.data
                });
            },
            function (error) {
                alert('Sorry, something went wrong...');
            });
    },
    render: function () {
        return (
            <div>
                <ProductList products={this.state.products} />
            </div>
        );
    }
});

module.exports = ProductListState;
