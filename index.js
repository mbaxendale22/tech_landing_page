const hamburger = document.querySelector('.btn-hamburger')
const mobileMenu = document.querySelector('.mobile-nav')
const fsOverlay = document.querySelector('.full-screen-overlay')

hamburger.addEventListener('click', () => {
    const currentState = hamburger.getAttribute('data-state')

    if (!currentState || currentState === 'closed') {
        hamburger.setAttribute('data-state', 'opened')
        hamburger.setAttribute('aria-expanded', 'true')
        mobileMenu.style.translate = '0'
    } else {
        hamburger.setAttribute('data-state', 'closed')
        hamburger.setAttribute('aria-expanded', 'false')
        mobileMenu.style.translate = '100vw'
    }
})
