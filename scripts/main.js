var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World";

var catImage = document.querySelector('img');
catImage.onclick = function () {
    var mySrc = catImage.getAttribute('src');
    if (mySrc == 'images/gata.jpg') {
        catImage.setAttribute('src', 'images/gata2.jpg');
    } else {
        catImage.setAttribute('src', 'images/gata.jpg');
    }
}

var btn = document.querySelector('button');

btn.onclick = function() {
    var myName = prompt('Your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Name: ' + myName;
}