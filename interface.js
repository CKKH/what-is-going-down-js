'use strict' 

function init() {
  let messageBoard = new MessageBoard();

  button.onlick = () => {
    let userInput = new Message(content.value);
    messageBoard.save(userInput)

    let message = document.createElement('p');
    message.innerText = `${message.userInput} || ${message.timeStamp}`
    
    let div = document.getElementById('one');
    div.appendChild(message);
  })
}

document.addEventListener('load', init);
