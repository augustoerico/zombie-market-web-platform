var React = require('react');
var ProductList = require('ProductList');

var ProductListState = React.createClass({
    render: function () {
        return (
            <div>
                <ProductList />
            </div>
        );
    }
});

module.exports = ProductListState;
