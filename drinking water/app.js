const smallcup = document.querySelectorAll('.cup-small')
const litters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained  = document.getElementById('remained')

updateBigglass()

smallcup.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>highlightglass(idx))
})

function highlightglass(idx){

    if(smallcup[idx].classList.contains('fill') && !smallcup[idx].nextElementSibling.classList.contains('fill')){
        idx--

    }
    
    smallcup.forEach((cup,idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('fill')
        }else{
            cup.classList.remove('fill')
        }
    })
    updateBigglass()
}

function updateBigglass(){
    const fullglass = document.querySelectorAll('.cup-small.fill').length
    const totalglass = smallcup.length

    if(fullglass === 0){
       percentage.style.visibility='hidden'
       percentage.style.height =0 
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullglass / totalglass * 280}px`
        percentage.innerText = `${fullglass / totalglass * 100}%`

    }

    if(fullglass === totalglass){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        litters.innerText =`${2-(250 * fullglass / 1000)}L`
    }




}