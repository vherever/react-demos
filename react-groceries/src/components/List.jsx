var React = require('react');

var List = React.createClass({
    render: function () {
        return (
            <ul>
                {
                    this.props.items.map(function (item) {
                        return (
                            <li key={item}><img src={"../public/images/" + item + ".png"}/><div>{item}</div></li>
                        )
                    })
                }
            </ul>
        );
    }
});

module.exports = List;