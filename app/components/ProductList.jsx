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
                <h4 className="page-title">Buy from us!</h4>
                <ul className="menu vertical">
                    {this.renderList()}
                </ul>
                <div className="controls">
                    <Link to="/products" className="button expand primary">Add a product</Link>
                </div>
            </div>
        );
    }
});

module.exports = ProductList;
