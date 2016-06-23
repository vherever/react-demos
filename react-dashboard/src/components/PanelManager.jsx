var React = require('react');

var SimplePanel = require('./SimplePanel.jsx');
var HeaderPanel = require('./HeaderPanel.jsx');
var WidePanel = require('./WidePanel.jsx');

var PanelManager = React.createClass({
    render: function() {
        var containerStyle = {background: '#f5f7fa', marginTop: 25, paddingTop: 25};
        var simplePanelForecastStyle = {background: '#ff8a00', color: '#ffffff', textAlign: 'center', paddingBottom: 25};
        var simplePanelDescriptionForecastStyle = {color: '#ffffff'};
        return (
            <div className="panelManager container" style={containerStyle}>
                <div className="row">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-4">
                                <SimplePanel header="20" description="New followers added this month" />
                            </div>
                            <div className="col-sm-4">
                                <SimplePanel header="$ 1250" description="Average Monthly Income" />
                            </div>
                            <div className="col-sm-4">
                                <SimplePanel header="$ 13865" description="Yearly Income Goal" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <WidePanel views="15080" likes="12500" comments="2100" background="#3498db" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <WidePanel views="12870" likes="12300" comments="800" background="#f1c40f" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            <div className="col-sm-12">
                                <SimplePanel pStyle={simplePanelForecastStyle} dStyle={simplePanelDescriptionForecastStyle} header="18&ordm;" description="Paris" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <HeaderPanel header="1.5K" description="New visitors" background="#3498db" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <HeaderPanel header="50%" description="Bounce rate" background="#27ae60" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <HeaderPanel header="46%" description="Online" background="#9b59b6" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <HeaderPanel header="188.3Kb" description="Traffic" background="#e74c3c" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PanelManager;