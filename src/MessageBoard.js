'use strict'

function MessageBoard() {
  this.messageList = [];
}

MessageBoard.prototype.messageList = () => {
  return this.messageList;
}

MessageBoard.prototype.save = (message) => {
  return message
}
