var React = require('react');
var ContactView = require('./ContactView.jsx');

var contacts = [
    {key: 1, name: "John Doe", email: "johndoe@yahoo.com", description: "Front-end Developer"},
    {key: 2, name: "Vladimir", email: "vladimir@test.com"},
    {key: 3, name: "Jessy"}
];

var newContact = {name: "", email: "", description: ""};

var App = React.createClass({
    render: function () {
        return (
            React.createElement(ContactView, {contacts: contacts, newContact: newContact})
        );
    }
});

module.exports = App;
