export function initScore(){
    class score extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            const shadow = this.attachShadow({mode:"open"})
            const puntosJugador = this.getAttribute("puntosJugador")
            const puntosMaquina = this.getAttribute("puntosMaquina")
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="score">
                    <h1 class="score_title">Score</h1>
                    <p class="player">Vos: ${puntosJugador}</p>
                    <p class="computer">Máquina: ${puntosMaquina}</p>
                </div>
            `
            const style = document.createElement("style")
            style.textContent = `
            .score{
                display:flex;
                font-family: 'Odibee Sans';
                height: 175px;
                width:235px;
                justify-content: center;
                flex-direction: column;
                border: 10px solid #000000;
                border-radius: 10px;
                background: #FFFFFF;
                margin:0 0 10px 0;
            }
            .score_title{
                margin: 5px
                font-size:55px;
                letter-spacing: 0.05em;
                text-align: center;
            }
            .player,
            .computer{
                text-align:end;
                font-size:45px;
                margin: 0 5px 3px 0;
            }
            
            `
            shadow.append(div)
            shadow.appendChild(style)
        }
    }
    customElements.define("custom-score", score)
}