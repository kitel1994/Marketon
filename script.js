const hamb = document.getElementById('hamb')
const lista = document.getElementById('lista')
const dots = document.getElementById('dots')
const topek = document.getElementById('topek')


hamb.addEventListener('click', () => {
    lista.classList.toggle('active')
})

dots.addEventListener('click', () => {
    topek.classList.toggle('active')
})

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    })
})