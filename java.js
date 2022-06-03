//111
let mem = document.querySelector('.memory')
let  btns = document.querySelectorAll('.btn_sp')
let one = document.querySelector('.bt')
let two = document.querySelector('.bt_two')
let non = document.querySelector('.non')
let img = document.querySelector('.image')
//222


//333

let studio = document.querySelector('.studio')


btns.forEach(btn => {
    btn.onclick = () => {
        
        btns.forEach(item => item.classList.remove('active'))
        btn.classList.add('active')

    }
})  
one.onclick = () => {
    img.classList.add('image_two')
    non.innerHTML = 'White'
    two.classList.remove('absolut')
    one.classList.add('absolut')
}
two.onclick = () => {
    img.classList.remove('image_two')
    non.innerHTML = 'Space Grey'
    one.classList.remove('absolut')
    two.classList.add('absolut')
} 

