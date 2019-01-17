'use strict'

function MessageBoard() {
  this.messageList = [];
}

MessageBoard.prototype.messageList = function() {
  return this.messageList;
}

MessageBoard.prototype.save = function(message) {
  return message
}
