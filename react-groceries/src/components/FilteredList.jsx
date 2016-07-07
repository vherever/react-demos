var React = require('react');
var List = require('./List.jsx');

var FilteredList = React.createClass({
    getInitialState: function () {
        return {
            initialItems: [
                "Apple",
                "Banana",
                "Bilberry",
                "Cherry",
                "Lemon",
                "Orange",
                "Pear",
                "Raspberry",
                "Pineapple",
                "Strawberry",
                "WaterMelon"
            ],
            items: []
        }
    },
    componentWillMount: function () {
        this.setState({items: this.state.initialItems});
    },
    filteredList: function (e) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },
    render: function () {
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filteredList}/>
                <List items={this.state.items} />
            </div>
        );
    }
});

module.exports = FilteredList;