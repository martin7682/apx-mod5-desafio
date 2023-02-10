export function initPtesentationTitle(){
    class presentationComponent extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"})
            const imageSrc = require("/src/images/piedra-papel-tijera.svg")
            const div = document.createElement("div")
            div.innerHTML=`
            <div class="image"></div>
            `
            const contenedor = div.querySelector(".image") as any
            contenedor.innerHTML= `
            <img src=${imageSrc}>
            `
            shadow.appendChild(div)
        }
    }
    customElements.define("custom-presentation", presentationComponent)
}