var React = require('react');
var Button = require('./Button.jsx');

var Main = React.createClass({
    render: function () {
        var operationStyle = {
            background: '#3498db',
            color: '#ffffff',
            width: 70,
            height: 70
        };

        var clearStyle = {
            background: '#e74c3c',
            color: '#ffffff',
            width: 70,
            height: 70
        };

        var equalStyle = {
            background: '#9b59b6',
            color: '#ffffff',
            width: 70,
            height: 70
        };

        return (
            <div className="container">
                <div className="row">
                    <Button label="1" />
                    <Button label="2" />
                    <Button label="3" />
                    <Button label="+" bStyle={operationStyle} />
                </div>

                <div className="row">
                    <Button label="4" />
                    <Button label="5" />
                    <Button label="6" />
                    <Button label="-" bStyle={operationStyle} />
                </div>

                <div className="row">
                    <Button label="7" />
                    <Button label="8" />
                    <Button label="9" />
                    <Button label="X" bStyle={operationStyle} />
                </div>

                <div className="row">
                    <Button label="C" bStyle={clearStyle} />
                    <Button label="0" />
                    <Button label="=" bStyle={equalStyle} />
                    <Button label="/" bStyle={operationStyle} />
                </div>
            </div>
        );
    }
});

module.exports = Main;