import loadComponents from './loader.js'

window.onload = () => {
    loadComponents('#header', '/components/header.html')
    loadComponents('#footer', '/components/footer.html')
}