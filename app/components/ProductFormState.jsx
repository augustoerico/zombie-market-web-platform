var React = require('react');
var ProductForm = require('ProductForm');

var productsApi = require('productsApi');

var ProductFormState = React.createClass({
    onSubmitHandler: function (name, price) {
        var product = {name: name, price: price};
        productsApi.createProduct(product).then(
            function (response) {
                if (response.status === 201) {
                    alert('Created');
                } else {
                    alert('An error ocurred');
                }
            },
            function (e) {
                alert('An error ocurred');
            }
        );
    },
    render: function () {
        return (
            <div>
                <ProductForm onSubmitHandler={this.onSubmitHandler} />
            </div>
        );
    }
});

module.exports = ProductFormState;
