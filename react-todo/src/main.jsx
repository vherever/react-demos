var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title = "Ingredients" headingColor = "#2980b9" />, document.getElementById('content'));
ReactDOM.render(<ListManager title = "ToDo" headingColor = "#27ae60" />, document.getElementById('toDo'));
ReactDOM.render(<ListManager title = "some List" headingColor = "#b31217" />, document.getElementById('someList'));
