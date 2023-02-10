export function initHandPiedra(){
    class handPiedra extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"})
            const imageSrc = require("/src/images/piedra.svg")
            const img = document.createElement("img")
            img.src = imageSrc
            shadow.appendChild(img)
        }
    }
    customElements.define("hand-piedra", handPiedra)
}