var React = require('react');
var Button = require('./Button.jsx');
var CalculationsField = require('./CalculationsField.jsx');

var Main = React.createClass({
    getInitialState: function () {
        return {message: '0'}
    },
    onClickButton1: function(){
        console.log('1');
        var message = '1';
        this.setState({message: message});
    },
    onClickButton2: function(){
        console.log('2');
        var message = '2';
        this.setState({message: message});
    },
    onClickButton3: function(){
        console.log('3');
    },
    onClickButton4: function(){
        console.log('4');
    },
    onClickButton5: function(){
        console.log('5');
    },
    onClickButton6: function(){
        console.log('6');
    },
    onClickButton7: function(){
        console.log('7');
    },
    onClickButton8: function(){
        console.log('8');
    },
    onClickButton9: function(){
        console.log('9');
    },
    onClickButton0: function(){
        console.log('0');
    },

    onClickButtonSum: function(){
        console.log('+');
    },
    onClickButtonSubtract: function(){
        console.log('-');
    },
    onClickButtonMultiple: function(){
        console.log('X');
    },
    onClickButtonDivide: function(){
        console.log('/');
    },
    onClickButtonEqual: function(){
        console.log('=');
    },
    onClickButtonClear: function(){
        console.log('C');
    },
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
                <div className="col-sm-4">
                <div className="panel panel-default">
                    <CalculationsField message={this.state.message} />
                    <div className="panel-body">
                        <div className="row">
                            <Button label="1" onButtonClicked={this.onClickButton1} />
                            <Button label="2" onButtonClicked={this.onClickButton2} />
                            <Button label="3" onButtonClicked={this.onClickButton3} />
                            <Button label="+" onButtonClicked={this.onClickButtonSum} bStyle={operationStyle} />
                        </div>

                        <div className="row">
                            <Button label="4" onButtonClicked={this.onClickButton4} />
                            <Button label="5" onButtonClicked={this.onClickButton5} />
                            <Button label="6" onButtonClicked={this.onClickButton6} />
                            <Button label="-" onButtonClicked={this.onClickButtonSubtract} bStyle={operationStyle} />
                        </div>

                        <div className="row">
                            <Button label="7" onButtonClicked={this.onClickButton7} />
                            <Button label="8" onButtonClicked={this.onClickButton8} />
                            <Button label="9" onButtonClicked={this.onClickButton9} />
                            <Button label="X" onButtonClicked={this.onClickButtonMultiple} bStyle={operationStyle} />
                        </div>

                        <div className="row">
                            <Button label="C" onButtonClicked={this.onClickButtonClear} bStyle={clearStyle} />
                            <Button label="0" onButtonClicked={this.onClickButton0} />
                            <Button label="=" onButtonClicked={this.onClickButtonEqual} bStyle={equalStyle} />
                            <Button label="/" onButtonClicked={this.onClickButtonDivide} bStyle={operationStyle} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;