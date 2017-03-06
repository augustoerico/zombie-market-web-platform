var React = require('react');

var ProductItem = require('ProductItem');
var productsApi = require('productsApi');

var ProductList = React.createClass({
    renderList: function() {
        var {products} = this.props;
        return products.map((p) => {
            return <ProductItem key={p._id} {...p} />
        });
    },
    render: function () {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
});

module.exports = ProductList;
