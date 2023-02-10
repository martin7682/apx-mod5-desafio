export function initRules(){
    class rulesComponent extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"})
            
            const div = document.createElement("div")
            div.className="rules"
            div.innerHTML=`
                <h3 class="rules-text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen 3 segundos.</h3>
            `
            const style = document.createElement("style")
            style.innerHTML=`
            .rules{
                display:flex;
                font-family: "Noto Serif Display", serif;
                color: black;
                text-align: center;
            }
            .rules-text{
                font-size: 40px;
                width: 317px;
                height: 330px;
                padding:0px;
                margin:0px;
            }
            
            `
            shadow.appendChild(div)
            shadow.appendChild(style)
        }
    }
    customElements.define("custom-rules", rulesComponent)
}