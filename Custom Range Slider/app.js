const range = document.getElementById('range')

range.addEventListener('input',(e) =>{
    const value = +e.target.value
    
   //to select sibling element of label

    const label = e.target.nextElementSibling
   // to get style property 

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    // to take number  without px syntax.........

    const num_width = +range_width.substring(0,range_width.length-2)

    const num_label_width = +label_width.substring(0, label_width.length-2)

    const max = +e.target.max    
    const min = +e.target.min   

    // generate a value for the label position left which is reletively moved with thumb
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
    
   
    label.style.left = `${left}px`

    label.innerHTML = value
})
//use stackoverflow for convert a range of number to another range of number
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

