export function initHandTijera(){
    class handTijera extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"})
            const imageSrc = require("/src/images/tijera.svg")
            const img = document.createElement("img")
            img.src = imageSrc
            shadow.appendChild(img)
        }
    }
    customElements.define("hand-tijera", handTijera)
}