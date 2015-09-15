var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var TodoItem = React.createClass({

    propTypes: {
        todo: React.propTypes.object.isRequired
    },

    render: function () {

        var todo = this.props.todo;

        return (
            <li key={todo.id}>
                <label>
                    {todo.text}
                </label>
                <button classname="destory" onclick=(this._onDestroyClick) />
            </li>
        );
    },

    _onDestroyClick: function () {
        TodoActions.destroy(this.props.todo.id);
    }
});

module.exports = TodoItem;
