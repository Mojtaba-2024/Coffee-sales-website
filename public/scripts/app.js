const $ = document

const toggleThemeBtn = $.querySelectorAll('.toggle-theme')
const submenuOpenBtn = $.querySelector('.submenu-open-btn')
const submenu = $.querySelector('.submenu')
const navOpenBtn = $.querySelector('.nav-icon')
const nav = $.querySelector('.nav')
const cart = $.querySelector('.cart')
const cartOpenBtn = $.querySelector('.cart-icon')
const cartCloseBtn = $.querySelector('.cart-close-btn')
const overlay = $.querySelector('.overlay')
const navCloseBtn = $.querySelector('.nav-close-btn')

toggleThemeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    })
})

submenuOpenBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenu.classList.toggle('submenu--open')
})

navOpenBtn.addEventListener('click', () => {
    nav.classList.remove('-right-64')
    nav.classList.add('right-0')
    overlay.classList.add('overlay--visible')
    overlay.addEventListener('click' , closeNav)
})
cartOpenBtn.addEventListener('click', () => {
    cart.classList.remove('-left-64')
    cart.classList.add('left-0')
    overlay.classList.add('overlay--visible')
    overlay.addEventListener('click' , closeCart)
})

function closeNav() {
    nav.classList.remove('right-0')
    nav.classList.add('-right-64')
    overlay.classList.remove('overlay--visible')
}

function closeCart () {
    cart.classList.remove('left-0')
    cart.classList.add('-left-64')
    overlay.classList.remove('overlay--visible')
}

navCloseBtn.addEventListener('click', closeNav)
cartCloseBtn.addEventListener('click', closeCart)