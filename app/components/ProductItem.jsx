var React = require('react');

var ProductItem = React.createClass({
    render: function () {
        var {name, price} = this.props;
        return (
            <li>
                <div className="row product-item">
                    <div className="column small-2 medium-6">
                        <span><h2>{name}</h2></span>
                    </div>
                    <div className="column small-2 medium-6">
                        <span>Buy now for: <h2>${price}</h2></span>
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = ProductItem;
