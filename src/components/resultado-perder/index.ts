export function initResultadoPerder(){
    class resutladoPerder extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"})
            const imageSrc = require("/src/images/estrella-perdiste.svg")
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="image">                 
                </div>
            `
            const contenedor = div.querySelector(".image")
            contenedor!.innerHTML=`
                <img src=${imageSrc}>
            `
            shadow.appendChild(div)
        }
    }
    customElements.define("resultado-perder", resutladoPerder)
}