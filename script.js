function displayInput() {
  event.preventDefault(); // Prevent form submission

  var input = document.getElementById('userinput').value;
  const outputElement = document.getElementById('name');
  outputElement.textContent = input;
}




const yesButton = document.getElementById('yesbutton');
const noButton = document.getElementById('nobutton');
const mane_input = document.getElementById('name-input');
const hello = document.getElementById('hello');
wink_emoji = document.getElementById('wink-emoji');
const kobiety = document.getElementById('kobiety-container');
const video = document.getElementById('video');
const start_button = document.getElementById('start-button');
const proposal = document.getElementById('proposal-container');

// make a function thats going to slide in the hello wait 4s and then slide out

function slideInHello() {
  video.pause()
  hello.style.display = 'flex';
  hello.style.animation = 'slide-in 2s';
  setTimeout(() => {
    hello.style.animation = 'slide-out 1.8s';

  }, 2500);

  setTimeout(() => {
    hello.style.display = 'none';
    
  }, 3500);

  setTimeout(() => {
    kobiety.style.display = 'flex';
    kobiety.style.animation = 'slide-in 2s';
    
  }, 4000);

  setTimeout(() => {
    kobiety.style.animation = 'slide-out 2.4s';
  }, 7000);

  setTimeout(() => {
    kobiety.style.display = 'none';
    
  }, 7800);

  setTimeout(() => {
    video.style.display = 'flex';
    video.style.animation = 'slide-in 2s';
  }, 7700);

  setTimeout(() => {
    video.play();
  }, 9500);

  video.addEventListener("ended", function() {
    console.log("The video has just ended!");
    // Let's redirect now
    setTimeout(() => {
      video.style.animation = 'slide-out 2.4s';

      
    }, 500);
  
    setTimeout(() => {
      video.style.display = 'none';
    }, 2000);
  
    setTimeout(() => {
      wink_emoji.style.display = 'flex';
      wink_emoji.style.animation = 'slide-in 3s';
    }, 2000);
  
    setTimeout(() => {
      wink_emoji.style.animation = 'jump 2.4s infinite';
    }, 6000);
  
    
  
  
  
}, true);

  
}

start_button.addEventListener('click', function () {
  

  start_button.style.animation = 'dissapear 2s';
  setTimeout(() => {
    start_button.style.display = 'none';
  }, 1900);
  setTimeout(() => {
    slideInHello()
  }, 2100);
});

