'use strict'

function MessageBoard() {
  this.messageList = [];
}

MessageBoard.prototype.messageList = () => {
  return this.messageList;
}

MessageBoard.prototype.save = function(message) {
  return this.messageList.push(message);
}
