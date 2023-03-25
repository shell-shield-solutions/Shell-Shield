const navOpen = document.querySelector('#nav-open')
const navClose = document.querySelector('#nav-close')
const mobileNav = document.querySelector('#mobile-nav')
const mobileNavPanel = mobileNav.querySelector('.panel')

document.addEventListener('click', (event) => {
    if (event.target == navOpen) {
        mobileNav.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }

    if (event.target == navClose) {
        mobileNav.style.display = 'none'
        document.body.style.overflow = 'scroll'
    }

    if (event.target == mobileNav && event.target != mobileNavPanel) {
        mobileNav.style.display = 'none'
        document.body.style.overflow = 'scroll'
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 829 && mobileNav.style.display == 'block') {
        mobileNav.style.display = 'none'
        document.body.style.overflow = 'scroll'
    }
})