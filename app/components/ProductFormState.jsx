var React = require('react');
var ProductForm = require('ProductForm');

var productsApi = require('productsApi');

var ProductFormState = React.createClass({
    onSubmitHandler: function (name, price) {
        console.log('aehoo');
        console.log(name, price);
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
