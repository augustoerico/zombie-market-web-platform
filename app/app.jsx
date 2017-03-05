var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var ProductListState = require('ProductListState');
var ProductFormState = require('ProductFormState');

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
// app css
require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="products" component={ProductFormState} />
            <IndexRoute component={ProductListState} />
        </Route>
    </Router>,
    document.getElementById('app')
);
