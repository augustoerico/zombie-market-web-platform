var React = require('react');

var ProductItem = React.createClass({
    render: function () {
        var {name, price} = this.props;
        return (
            <li>
                <p>{name}</p>
                <p>Buy now for: ${price}</p>
            </li>
        );
    }
});

module.exports = ProductItem;
