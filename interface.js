'use strict'

function postMessage() {
  let content = new Message(document.getElementById('content').value);

  let message = content.userInput + " || " + content.timeStamp

  let messageToPrint = document.createTextNode(message);

  let newItem = document.createElement('li')
    newItem.appendChild(messageToPrint)
    document.getElementById('messageList').appendChild(newItem)
    console.log(newItem)
}
