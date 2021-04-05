const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let  activeSlide = 0

//=======add right button eventlistener=====
rightBtn.addEventListener('click',()=>{
    activeSlide++

    if(activeSlide > slides.length-1){
        activeSlide = 0
    }
    setbackgroundImag()
    setActiveSlide()

})

//=======add left button eventlistener=====
leftBtn.addEventListener('click',()=>{
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length-1
    }
    setbackgroundImag()
    setActiveSlide()

})

setbackgroundImag()
//=======background image change function============
function setbackgroundImag (){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
} 

//=========select active slide function=========

function setActiveSlide(){
    slides.forEach(slide =>slide.classList.remove('active'))
    
    slides[activeSlide].classList.add('active')

}