const desarrolloH= document.getElementById("desarrollo");
const desarrolloC= document.getElementById("desarrollo-c")

const sistememasH= document.getElementById("sistemas");
const sistemasC= document.getElementById("sistemas-c");

const burgerM =document.getElementById("menu_checkbox");
const menuM = document.getElementById("movile-menu")



desarrolloH.addEventListener("click", e=>{
    if(!desarrolloC.classList.contains("course-display")){
        if (sistememasH.classList.contains('animation-header')){
            sistemasC.classList.remove("course-display")
            sistememasH.classList.remove("animation-header")
        }
        desarrolloC.classList.toggle("course-display")
        desarrolloH.classList.add('animation-header')
    }else{
        desarrolloC.classList.remove("course-display")
        desarrolloH.classList.remove("animation-header")
    }
});


sistememasH.addEventListener("click", e=>{
    if(!sistemasC.classList.contains("course-display")){
        if (desarrolloH.classList.contains('animation-header')){
            desarrolloC.classList.remove("course-display")
            desarrolloH.classList.remove("animation-header")
        }
        minusS.classList.add("button-minus-hover-span")
        sistemasC.classList.toggle("course-display")
        sistememasH.classList.add('animation-header')
    }else{
        sistemasC.classList.remove("course-display")
        sistememasH.classList.remove("animation-header")
    }
});


const firstElement = document.getElementById("aboutme")
const secondElement = document.getElementById('imgs');

function updateHeight() {
  const firstElementHeight = firstElement.offsetHeight;
  secondElement.style.height = firstElementHeight + 'px';
}

window.addEventListener('resize', updateHeight);


function changeImageSrc() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth>=831 && screenWidth <= 1500) {
      document.getElementById('img-me1').src = './img/model-350.png';
      document.getElementById('img-me2').src = './img/model-3-350.png';
      document.getElementById('img-me3').src = './img/model-2-350.png';
    }else if(screenWidth>=600 && screenWidth <= 830){
        document.getElementById('img-me1').src = './img/model-300.png';
        document.getElementById('img-me2').src = './img/model-3-300.png';
        document.getElementById('img-me3').src = './img/model-2-300.png';
    }else if(screenWidth>=460 && screenWidth <= 600){
        document.getElementById('img-me1').src = './img/model-280.png';
        document.getElementById('img-me2').src = './img/model-3-280.png';
        document.getElementById('img-me3').src = './img/model-2-280.png';
    }else if(screenWidth>420 &&  screenWidth < 460){
        document.getElementById('img-me1').src = './img/model-250.png';
        document.getElementById('img-me2').src = './img/model-3-250.png';
        document.getElementById('img-me3').src = './img/model-2-250.png';
    }else if( screenWidth <= 420){
        document.getElementById('img-me1').src = './img/model-180.png';
        document.getElementById('img-me2').src = './img/model-3-180.png';
        document.getElementById('img-me3').src = './img/model-2-180.png';
    } else {
        document.getElementById('img-me1').src = './img/model.png';
        document.getElementById('img-me2').src = './img/model-3.png';
        document.getElementById('img-me3').src = './img/model-2.png';
    }
  }
  
  window.addEventListener('resize', changeImageSrc);
  window.addEventListener('DOMContentLoaded', changeImageSrc);
