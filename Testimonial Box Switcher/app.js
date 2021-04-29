//const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name:'Mayah Haque',
        position:'Marketing',
        photo : "https://randomuser.me/api/portraits/women/46.jpg",
        Text: " I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy.This guy is an amazing developer.He details .I love developers who respact each and every aspect of a throughly thought out design and do their best to put it in code."
    },
    {
        name:'Miyah Mayles',
        position:'Sales',
        photo : "https://randomuser.me/api/portraits/women/47.jpg",
        Text: " I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy.This guy is an amazing developer.He details .I love developers who respact each and every aspect of a throughly thought out design and do their best to put it in code."
    },
    {
        name:'Jeweel Ponda',
        position:'Delivery Boy',
        photo : "https://randomuser.me/api/portraits/women/40.jpg",
        Text: " I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy.This guy is an amazing developer.He details .I love developers who respact each and every aspect of a throughly thought out design and do their best to put it in code."
    },
    {
        name:'Nitambori',
        position:'Jewels_Gf',
        photo : "https://randomuser.me/api/portraits/women/48.jpg",
        Text: " I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy.This guy is an amazing developer.He details .I love developers who respact each and every aspect of a throughly thought out design and do their best to put it in code."
    },
]

let idx = 1

function updateTestimonial(){
    const {name, position, photo, Text} = testimonials[idx]

    testimonial.innerHTML = Text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    }
}
setInterval(updateTestimonial, 10000)