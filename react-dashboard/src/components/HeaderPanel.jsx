var React = require('react');

var HeaderPanel = React.createClass({
    render: function() {
        var hStyle = {color: "#ffffff"};
        var bStyle = {color: "#656565"};
        if(this.props.background) {
            hStyle.background = this.props.background;
        }
        return (
            <div className="panel panel-default headerPanel">
                <div style={hStyle} className="panel-heading">
                    <h4>{this.props.description}</h4>
                </div>
                <div style={bStyle} className="panel-body">
                    <h2><b>{this.props.header}</b></h2>
                </div>
            </div>
        );
    }
});

module.exports = HeaderPanel;