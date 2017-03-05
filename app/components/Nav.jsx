var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <div className="menu">
                        <div className="menu-text">
                            <IndexLink to="/">Zombi-E-Market</IndexLink>
                        </div>
                    </div>
                </div>
                <div className="top-bar-center">
                    <div className="menu">
                        <div className="menu-text">
                            <input type="text" placeholder="Search for products"/>
                        </div>
                    </div>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="https://github.com/augustoerico" target="_blank">augustoerico</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
