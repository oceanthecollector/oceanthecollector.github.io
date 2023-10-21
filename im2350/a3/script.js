//  // Get references to the elements
//  const hoverElement = document.getElementById('moon-lover');
//  const hiddenDiv = document.getElementById('hide-moon');

//  // Add a mouseover event listener to the hoverElement
//  hoverElement.addEventListener('mouseover', () => {
//      // Show the hiddenDiv
//      hiddenDiv.style.display = 'block';
//      hiddenDiv.style.position = 'relative';
//  });

 // Add a mouseout event listener to the hoverElement
//  hoverElement.addEventListener('mouseout', () => {
//      // Hide the hiddenDiv
//      hiddenDiv.style.display = 'none';
//      hiddenDiv.style.position = 'relative';
//  });

// const moonLover = document.querySelector(".moon-lover");
// moonLover.addEventListener("mouseover", function () {
//   this.classList.add("paused");
// });

// moonLover.addEventListener("mouseout", function () {
//   this.classList.remove("paused");
// });

// helper functions
window.addEventListener("mousemove", e => {
    //console.log(e);
    //console.log(remapRange(e.clientX, 0, window.innerWidth, 0, 1));
    randEOne.style.opacity = remapRange(e.clientX, 0, window.innerWidth, 0.5, 1);
    document.body.style.backgroundColor= "hsl(" + remapRange(e.clientX, 0, window.innerWidth, 100, 1)+", 50%, 80%)";
  })
  // generic range remap
  function remapRange(input, low1, high1, low2, high2){
    return low2 + (high2 - low2) * (input - low1) / (high1 - low1);
  }
  
  // random int
  function getRandomIntRange(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // random float
  function getRandomFloatRange(min, max){
    return Math.random() * (max - min) + min;
  }
  
  // shuffle array order
  function shuffleArray(array){
    array.sort(() => Math.random() - 0.5);
  }
  
  // move given element to random position
  function randomPosition(el){
    el.style.position = 'absolute';
    el.style.left = getRandomFloatRange(0, window.innerWidth - el.offsetWidth) + "px";
    el.style.top = getRandomFloatRange(0, window.innerHeight - el.offsetHeight) + "px";
  }