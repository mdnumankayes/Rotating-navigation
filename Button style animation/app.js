const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click',function(e){
        //=====to select click positon in veiwpoint=====
        const x = e.clientX;
        const y = e.clientY;
       //=====to select button positon top nd left====== 
       const buttontop = e.target.offsetTop;
       const buttonleft = e.target.offsetLeft;

       const x_inside = x - buttonleft
       const y_inside = y - buttontop

       const circle = document.createElement('span')
       circle.classList.add('circle')
       circle.style.left = x_inside +'px'
       circle.style.top = y_inside +'px'
        
       this.appendChild(circle)


       setTimeout(()=>circle.remove(),500)
    })
})