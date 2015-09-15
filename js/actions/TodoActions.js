var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
    create: function(text) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },
    destroy: function(id) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_DESTORY,
            id: id
        });
    }
}

module.exports = TodoActions;