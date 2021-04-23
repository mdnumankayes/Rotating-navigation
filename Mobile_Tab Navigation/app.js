const contents = document.querySelectorAll('.content')
const ListItem = document.querySelectorAll('nav ul li')

ListItem.forEach((item, idx)=>{
    item.addEventListener('click',()=>{
        hideAllContent()
        hideAllItem()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContent(){
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItem(){
    ListItem.forEach(item =>item.classList.remove('active'))
}