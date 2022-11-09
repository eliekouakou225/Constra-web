// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });

// -------------Skill Section--------------

let valueDisplays = document.querySelectorAll(".skill__num");
let interval = 2000;


valueDisplays.forEach((valueDisplay) =>{
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue += 1;

    valueDisplay.textContent = startValue;
    if(startValue == endValue ){
      clearInterval(counter);
    }
  }, duration);
});