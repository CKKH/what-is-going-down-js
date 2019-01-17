'use strict'

function Message(userInput) {
  this.userInput = userInput || null;
}

Message.prototype.userInput = function() {
  return this.userInput;
}
