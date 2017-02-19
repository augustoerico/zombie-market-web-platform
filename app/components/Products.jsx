var React = require('react');
var ProductsView = require('ProductsView');

var Products = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Products component</h2>
                <ProductsView />
            </div>
        )
    }
});

module.exports = Products;
