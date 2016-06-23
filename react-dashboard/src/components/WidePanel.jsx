var React = require('react');

var WidePanel = React.createClass({
    render: function() {
        var hStyle = {height: 200};
        var bStyle = {background: '#484d4d', color: '#ffffff', textAlign: 'center'};
        if(this.props.background) {
            hStyle.background = this.props.background;
        }
        return (
            <div className="panel panel-default widePanel">
                <div style={hStyle} className="panel-heading"></div>
                <div style={bStyle} className="panel-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <h2>{this.props.views}</h2>
                            <h5>Shot Views</h5>
                        </div>
                        <div className="col-sm-4">
                            <h2>{this.props.likes}</h2>
                            <h5>Likes</h5>
                        </div>
                        <div className="col-sm-4">
                            <h2>{this.props.comments}</h2>
                            <h5>Comments</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = WidePanel;