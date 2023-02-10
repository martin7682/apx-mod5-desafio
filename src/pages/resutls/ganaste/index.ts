import {state} from "../../../state"

export function ganar(params){
    const div = document.createElement("div")
    const currentStateData = state.getState()
    div.innerHTML = `
        <resultado-ganar class="star"></resultado-ganar>
        <custom-score puntosJugador=${currentStateData.historyScore.jugador} puntosMaquina=${currentStateData.historyScore.computadora}></custom-score>
        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>
        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>
    `
    div.className = "contenedor"

    const style = document.createElement("style")
    style.textContent=`
    .contenedor{
        background: var(--fondo-ganaste);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100vh;
    }
    .buttonEl{
        margin-top:4px;
    }
    `
    div.appendChild(style)
    
    const buttonEl = div.querySelector(".buttonEl")
    const reset = div.querySelector(".reset")
    
    buttonEl?.addEventListener("click", ()=>{
        params.i("/play")
    })
    
    reset?.addEventListener("click", ()=>{
        state.borrarScore()
        state.init()
        params.i("/rules")
    })

    return div
}