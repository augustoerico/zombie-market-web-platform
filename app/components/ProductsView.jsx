var React = require('react');

var ProductsView = React.createClass({
    getDefaultProps: function () {
        return {
            products: []
        }
    },
    render: function () {
        return (
            <div>
                <h2>ProductsView component</h2>
                <div>{this.props.products}</div>
            </div>
        )
    }
});

module.exports = ProductsView;
