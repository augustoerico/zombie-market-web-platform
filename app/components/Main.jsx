var React = require('react');
var Products = require('Products');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Main component</h1>
                <Products />
            </div>
        )
    }
});

module.exports = Main;
