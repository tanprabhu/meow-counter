
//DOM (document object model)- entire HTML document
//'DOMContentLoaded' event- specific event in the lifecycle of a web page;useful for running scripts as soon as the document is ready, without waiting for all the external resources to load.

document.addEventListener('DOMContentLoaded', function() {
  const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const audio = document.getElementById('meow-inc');
  const popOutGif = document.getElementById('meowing-cat');
  const body=document.body;
  
  let counter = 0; //counter variable stores the values
  
  incrementButton.addEventListener('click', function() {
      counter++;
      counterElement.textContent = counter;
      //play audio when increment button is clicked
      
        audio.play();
        body.backgroundColor="lightblue";
      
      // Show the pop-out GIF
      popOutGif.classList.add('show');

      //change bg color
      body.classList.add('change-background');

      // Hide the GIF & changes bg colour after a delay of 2.5 seconds
      //show and change background are classes
      setTimeout(() => {
          popOutGif.classList.remove('show');
          body.classList.remove('change-background');
          
      }, 2500);
  });
  
  decrementButton.addEventListener('click', function() {
      counter--;
      counterElement.textContent = counter;
  });
});
