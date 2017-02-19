var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Products = require('Products');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="products" component={Products} />
            <IndexRoute component={Products} />
        </Route>
    </Router>,
    document.getElementById('app')
);
