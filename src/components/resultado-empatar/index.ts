export function initResultadoEmpatar(){
    class resutladoEmpatar extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"})
            const imageSrc = require("/src/images/estrella-empate.svg")
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
    customElements.define("resultado-empatar", resutladoEmpatar)
}