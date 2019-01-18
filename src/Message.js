'use strict'

function Message(userInput, timeStamp = new Date()) {
  this.userInput = userInput || null;
  this.timeStamp = timeStamp;
}

Message.prototype.userInput = () => {
  return this.userInput;
}

Message.prototype.timeStamp = () => {
  return this.timeStamp;
}
