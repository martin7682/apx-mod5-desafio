export function rules(params){
    const div = document.createElement("div")
    
    div.innerHTML = `
    <custom-rules></custom-rules>
    <custom-button class="buttonEl" title="¡Jugá!"></custom-button>
    
    <div class="hands">
        <hand-piedra></hand-piedra>
        <hand-papel></hand-papel>
        <hand-tijera></hand-tijera>
    </div>
    `
    
    div.className = "contenedor"

    const style = document.createElement("style")
    style.textContent = `
    
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
    }
    .hands{
        display:flex;
        width: 80%;
        justify-content: space-evenly;
        position: relative;
        top: 10px;
    }
    @media(min-width:960px){
        .hands{
            width: 50%;
        }
    }
    `
    function buttonAction(){
        const buttonEl = div.querySelector(".buttonEl")
        buttonEl?.addEventListener("click", ()=>{
            params.i("/play")
        })
    }
    buttonAction()
    div.appendChild(style)
    return div
}