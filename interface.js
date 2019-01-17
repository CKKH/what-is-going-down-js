function init() {
    var button = document.getElementById('button')
    button.addEventListener('click', function() {
        console.log("the button has been clicked");

        // create a node called text
        var text = document.createElement('p');
        text.innerText = "this is my text"

        // grab the first div from the document
        var div = document.getElementById('one');

        // add text to that div
        div.appendChild(text);
    })
}

document.addEventListener('load', init);