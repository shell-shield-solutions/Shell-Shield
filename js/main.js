const navOpen = document.querySelector('#nav-open')
const navClose = document.querySelector('#nav-close')
const mobileNav = document.querySelector('#mobile-nav')

navOpen.addEventListener('click', () => {
    mobileNav.style.display = 'block'
    document.body.style.overflow = 'hidden'
})

navClose.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    document.body.style.overflow = 'scroll'
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 829 && mobileNav.style.display == 'block') {
        mobileNav.style.display = 'none'
        document.body.style.overflow = 'scroll'
    }
})