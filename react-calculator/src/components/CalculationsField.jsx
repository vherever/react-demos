var React = require('react');

var CalculationsField = React.createClass({
    render: function() {
        return (
            <div className="panel-heading">
                <p>{this.props.message}</p>
            </div>
        );
    }
});

module.exports = CalculationsField;