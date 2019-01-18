'use strict'

function Message(userInput) {
  this.userInput = userInput || null;
}

Message.prototype.userInput = () => {
  return this.userInput;
}

Message.prototype.timeStamp = () => {
}
