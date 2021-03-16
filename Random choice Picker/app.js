const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
//auto focus textarea
textarea.focus();

//add textarea event
textarea.addEventListener('keyup',(e)=>{
CreateTag(e.target.value)
//when press enter it's calling random function
if(e.key ==='Enter'){
    setTimeout(() => {
        e.target.value=''
    }, 10)
    randomSelect()

}
})
/// span tag create function
function CreateTag(value){
    const tags = value.split(',').filter(tag => tag.trim()!=='').map(tag=>tag.trim())
    tagsEl.innerHTML=''
    tags.forEach(tag => {
        const tagEL = document.createElement('span')
        tagEL.classList.add('tag')
        tagEL.innerText=tag
        tagsEl.appendChild(tagEL)
    })
}
//random tag select function and highlight tag
function randomSelect(){
    const times = 30;
    const interval = setInterval(() => {
        const randomtag = pickRandomTag()
        highlight(randomtag)
        setTimeout(() => {
            unhighlight(randomtag)
        }, 100)
    
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
           const randomtag = pickRandomTag()
           highlight(randomtag) 
        }, 100);
    }, times*100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag){
    tag.classList.add('highlight')
}
function unhighlight(tag){
    tag.classList.remove('highlight')
}
