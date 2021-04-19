const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast= document.querySelector('#fast')

toggles.forEach(toggle =>toggle.addEventListener('change',(e)=>doTheTrick(e.target)))

function doTheTrick(theclickone){
    if(good.checked && cheap.checked && fast.checked){
        if(good === theclickone){
            fast.checked = false
        }
        if(cheap === theclickone){
            good.checked = false
        }
        if(fast === theclickone){
            cheap.checked = false
        }
    }
}