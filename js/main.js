// create an event listener on the button
// 1. select the button element
var button = document.querySelector('.nav-btn');

// 2. add the click event to the button
button.addEventListener('click', function(){
  // what happens when the button is clicked goes in here
  // for this example, when the button is clicked, we want to show the navigation
  // I'll need to select the nav I want to show
  document.querySelector('nav ul').classList.toggle('show-nav');
});