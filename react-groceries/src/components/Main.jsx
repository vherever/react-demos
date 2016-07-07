var React = require('react');
var FilteredList = require('./FilteredList.jsx');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <FilteredList />
            </div>
        );
    }
});

module.exports = Main;