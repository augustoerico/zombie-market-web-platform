var React = require('react');
var ProductList = require('ProductList');

var productsApi = require('productsApi');

var ProductListState = React.createClass({
    getInitialState: function () {
        return {
            products: [],
            isLoading: true
        }
    },
    componentDidMount: function () {
        var that = this;
        this.setState({isLoading: true});
        productsApi.listProducts().then(
            function (response) {
                that.setState({
                    products: response.data,
                    isLoading: false
                });
            },
            function (error) {
                alert('Sorry, something went wrong...');
                that.setState({
                    isLoading: false
                });
            });
    },
    renderList: function () {
        if (this.state.isLoading) {
            return <span>Loading...</span>
        } else {
            return <ProductList products={this.state.products} />
        }
    },
    render: function () {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
});

module.exports = ProductListState;
