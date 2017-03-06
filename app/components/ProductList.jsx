var React = require('react');
var {Link} = require('react-router');

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
                <Link to="/products">Add a product</Link>
            </div>
        );
    }
});

module.exports = ProductList;
