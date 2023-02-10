export function initButtonEl(){
    class buttonComponent extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const title = this.getAttribute("title")
            const shadow = this.attachShadow({mode:"open"})
            const div = document.createElement("div")
            const style = document.createElement("style")
            
            div.innerHTML = `
                <div class="contenedor-buttonEl">
                    <buttonEl class="buttonEl">${this.title}</buttonEl>
                </div>
            `
            style.innerHTML = `
            .contenedor-buttonEl{
                display: flex
            }
            .buttonEl{
                background: #006CFC;
                color: #D8FCFC;
                border: 10px solid #001997;
                border-radius: 10px;
                width: 322px;
                height: 87px;
                text-align: center;
                padding: 18px 0 0 0;
                font-size: 45px;
                font-family: 'Odibee Sans';
                
                
            }
            @media(min-width:960px){
                .buttonEl{
                    width: 336px;
                }
            }
            `
            shadow.appendChild(div)
            shadow.appendChild(style)
        }
    }
    customElements.define("custom-button", buttonComponent)
}