const container = document.querySelector('.container')

const unsplashUrl = 'https://source.unsplash.com/random/'

const row = 10

for(let i = 0; i < row * 3 ; i++){
   const img =  document.createElement('img')
   img.src = `${unsplashUrl}${getrandomSize()}`
   
   container.appendChild(img)
  
}
function getrandomSize(){

    return `${getRandomNmbr()}x${getRandomNmbr()}`
}

function getRandomNmbr(){
    return Math.floor(Math.random() * 10) + 300
    
}
