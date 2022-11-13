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

// --------------------------------------------------------
// Selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{     //Once window loaded
    filterItem.onclick = (selectedItem)=>{ // When user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){// if user click element has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the ective class which is in the first 
            selectedItem.target.classList.add("active"); // Add that active class on the user selected element or item
            let filterName = selectedItem.target.getAttribute("data-name");// Getting image data-name value of the user selected items
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name"); // getting image data-name value 
                //if user selected item data-name value is equal to image data-name value
                // or user selected item data-name value is equal to "all"
                if((filterImages == filterName) || filterName == "all"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }
                else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)");  //  adding onclick attribute in all avaibale images

    }
}

//Selecting all required elements
const previewBox = document.querySelector(".preview-box"), 
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");
//fullscreen preview image function
function preview(element){
    let selectedPrevImg = element.querySelector("img").src; // getting user clicked image source link and store in a variable
    let selectedImgCategory = element.getAttribute("data-name"); // getting user clicked data-name value
    categoryName.textContent = selectedImgCategory;
    previewImg.src = selectedPrevImg;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = ()=>{ // if user click on the close icon of the preview box
        previewBox.classList.remove("show");//Hide the preview box
        shadow.classList.remove("show");
    }
}