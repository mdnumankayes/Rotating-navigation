const password = document.getElementById('password')
const background = document.getElementById('background')
const submitBtn = document.getElementById('submit')
 let passlength = 0


password.addEventListener('input', (e)=>{
    const input = e.target.value
    const length =  input.length
     passlength = length
    const blurValue = (20 - length * 2)
    background.style.filter = `blur(${blurValue}px)`
    

})

submitBtn.addEventListener('click',()=>{
   alert('Successfully Submitted' +passlength) 
})
// function submitLoginForm(e){
//     e.preventDefault();
//   console.log(e)
// }