var React = require('react');
var ProductsView = require('ProductsView');

var Products = React.createClass({
    getInitialState: function() {
        return {
            products: []
        }
    },
    componentDidMount: function() {
        this.setState({
            product: 'Right Hand'
        });
    },
    render: function () {
        return (
            <div>
                <h2>Products component</h2>
                <ProductsView products={this.state.product}/>
            </div>
        )
    }
});

module.exports = Products;
