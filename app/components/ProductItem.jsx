var React = require('react');

var ProductItem = React.createClass({
    render: function () {
        var {name, price} = this.props;
        return (
            <li>
                <div className="row">
                    <div className="column small-2 medium-6">
                        <span>{name}</span>
                    </div>
                    <div className="column small-2 medium-6">
                        <span>Buy now for: ${price}</span>
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = ProductItem;
