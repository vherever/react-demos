var React = require('react');

var SimplePanel = React.createClass({
    render: function() {
        var pStyle = this.props.pStyle ? this.props.pStyle : {color: '#656565', paddingBottom: 25};
        var hStyle = this.props.hStyle ? this.props.hStyle : {}; //header style
        var dStyle = this.props.dStyle ? this.props.dStyle: {color: '#c1c2c2'}; //span style

        return (
            <div className="panel panel-default simplePanel">
                <div style={pStyle} className="panel-body">
                    <h2 style={hStyle}><b>{this.props.header}</b></h2>
                    <h5 style={dStyle}>{this.props.description}</h5>
                </div>
            </div>
        );
    }
});

module.exports = SimplePanel;