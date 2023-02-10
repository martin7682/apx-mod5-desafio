import {state} from "../../../state"

export function empate(params){
    const div = document.createElement("div")
    const currentStateData = state.getState()
    div.innerHTML = `
        <resultado-empatar class="star"></resultado-empatar>
        <custom-score puntosJugador=${currentStateData.historyScore.jugador} puntosMaquina=${currentStateData.historyScore.computadora}></custom-score>
        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>
        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>
    `
    div.className = "contenedor"

    const style = document.createElement("style")
    style.textContent=`
    .contenedor{
        background: var(--fondo-empate);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        justify-content: space-evenly;
    }
    .botonEl{
        margin-top:4px;
    }
    .star{
        width:255px;
        height:260px;
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