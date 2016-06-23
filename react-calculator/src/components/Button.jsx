var React = require('react');

var Button = React.createClass({
    render: function () {
        var bStyle = this.props.bStyle ? this.props.bStyle : {
            color: '#ffffff',
            background: '#27ae60',
            width: 70,
            height: 70
        };
        return (
            <button style={bStyle} type="button" className="btn btn-default btn-lg">{this.props.label}</button>
        );
    }
});

module.exports = Button;