// change images on click
let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox.jfif') {
    myImage.setAttribute('src', 'images/irlFirefox.jpg');
  } else {
    myImage.setAttribute('src', 'images/firefox.jfif');
  }
}


// create button on webpage
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// create user "log in" button
function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}
