var React = require('react');
var {Link} = require('react-router');

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
                <h4 className="page-title">Create a product</h4>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="name" placeholder="Product name"/>
                    <input type="number" ref="price" step="0.01" min="0" placeholder="Product price" />
                    <div className="controls">
                        <input className="button primary" type="submit" value="Submit" />
                        <Link to="/" className="button alert hollow">Back</Link>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = ProductForm;
