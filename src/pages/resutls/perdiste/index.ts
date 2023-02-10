import {state} from "../../../state"

export function perder(params){
    const div = document.createElement("div")
    const currentStateData = state.getState()
    div.innerHTML = `
        <resultado-perder class="star"></resultado-perder>
        <custom-score puntosJugador=${currentStateData.historyScore.jugador} puntosMaquina=${currentStateData.historyScore.computadora}></custom-score>
        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>
        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>
    `
    div.className = "contenedor"

    const style = document.createElement("style")
    style.textContent=`
    .contenedor{
        background: var(--fondo-perdiste);
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
        params.i("/rules")
        state.borrarScore()
        state.init()
    })

    return div
}