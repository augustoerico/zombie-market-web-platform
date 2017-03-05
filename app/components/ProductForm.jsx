var React = require('react');

// Requires a function as prop to handle (update state) submition
var ProductForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var priceStr = this.refs.price.value;

        if (name && priceStr.match(/^\d+\.\d{2}/)) {
            this.refs.name.value = '';
            this.refs.price.value = '';
            this.props.onSubmitHandler(name, parseFloat(priceStr, 10));
        }
    },
    render: function () {
        return (
            <div>
                <h1>Create a product</h1>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="name" placeholder="Product name"/>
                    <input type="number" ref="price" step="0.01" min="0" placeholder="Product price" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
});

module.exports = ProductForm;
