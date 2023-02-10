//import { clear, time } from "console";
import { isReadable } from "stream";
import { setTimeout } from "timers";
import {state} from "../../state";

export function play(direction){

const piedraImage = require("/src/images/piedra-img.svg")
const papelImage = require("/src/images/papel-img.svg")
const tijeraImage = require("/src/images/tijera-img.svg")


const imagenPiedra = require("/src/images/human-piedra.svg");
const imagenPapel = require("/src/images/human-papel.svg");
const imagenTijera = require("/src/images/human-tijera.svg");
const imagenFin = require("/src/images/count.svg");



var imagesHuman = [imagenPiedra, imagenPapel, imagenTijera, imagenFin]
var currentImageHuman = 0;

var imagesComputer = [piedraImage, papelImage, tijeraImage];
var currentImageComputer = 0;

let intervaloHuman = setInterval(function() {
        
        var imgHuman: any = document.getElementById("imageHuman");
        imgHuman.src = imagesHuman[currentImageHuman];
        currentImageHuman = (currentImageHuman + 1) % imagesHuman.length;
        
        var imgComputer: any = document.getElementById("imageComputer");
        imgComputer.src = imagesComputer[currentImageComputer];
        currentImageComputer = (currentImageComputer + 1) % imagesComputer.length;
        
        
        if(imgHuman.src == imagesHuman[3]){
            direction.i("/rules")
            clearInterval(intervaloHuman)
            
        }
        
}, 1000);
    
    
    const div = document.createElement("div")
    div.innerHTML = `
    <div class = "contador">
        <img id="imageHuman" >
        <img id="imageComputer" >
    </div>
    <div class="hands-computer">
        <img hand="piedra" class="hand-piedra-computer hand-disabled" src=${imagenPiedra}>
        <img hand="papel" class="hand-papel-computer hand-disabled" src=${imagenPapel}>
        <img hand="tijera" class="hand-tijera-computer hand-disabled" src=${imagenTijera}>
    </div>
    <div class="hands-player">
        <img class="hand-piedra-player" src=${imagenPiedra}>
        <img class="hand-papel-player" src=${imagenPapel}>
        <img class="hand-tijera-player" src=${imagenTijera}>
    </div>
    `;
    
    div.classList.add("contenedor")
    const handComputerPiedra = div.querySelector(".hand-piedra-computer")
    const handComputerPapel = div.querySelector(".hand-papel-computer")
    const handComputerTijera = div.querySelector(".hand-tijera-computer")
    
    const style = document.createElement("style")
    style.textContent = `
    .hands-player{
        display:flex;
        width: 100%;
        justify-content: space-evenly;
        translate: 0px 5px;
    }
    @media(min-width:960px){
        .hands-player{
            width: 70%;
        }
    }

    .hand-disabled{
        display: none
    }

    .hand-piedra-computer,
    .hand-papel-computer,
    .hand-tijera-computer{
        transform: rotate(180deg);
        
    }
    
    .hand-piedra-player:hover,
    .hand-papel-player:hover,
    .hand-tijera-player:hover{
        transform: translateY(-80px);
        bottom: -50px;
        transition: all 1s;
    }

    .hand-select{
        transform: translateY(-25px);
        transition: all 0.5s;
    }
    .deselected{
        opacity: 0.5;
        transform: translateY(5px);
        transition: all 0.5s;
    }
    
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        padding: 85px 0 0 0;
    }
    .contador{
        
        border-radius: 100%;
        border: solid 15px black;
        padding: 50px 50px;
        
    }
    .jugar{
        padding:50px 0 0 0;
    }
    `
    const piedra = div.querySelector(".hand-piedra-player")
    const papel = div.querySelector(".hand-papel-player")
    const tijera = div.querySelector(".hand-tijera-player")
    const time = div.querySelector(".contador")
    
    const hands: any = div.querySelector(".hands-player")!.children
    
    for (const h of hands){
        h.addEventListener("click", ()=>{
            const clase = h.getAttribute("class")
            clearInterval(intervaloHuman);
                        
            if (clase == "hand-piedra-player"){
                state.playerMove("piedra")
                classDinamic(piedra)
            }else if (clase == "hand-papel-player"){
                state.playerMove("papel")
                classDinamic(papel)
                
            }else if (clase == "hand-tijera-player"){
                state.playerMove("tijera")
                classDinamic(tijera)
            }
        })
    }

    function classDinamic(params){
        for (const h of hands){
            h.classList.add("deselected")
        }
        if(params == piedra){
            params.classList.add("hand-select")
            params.classList.remove("deselected")
            params.classList.remove("hand-piedra-player")
            papel?.classList.remove("hand-papel-player")
            tijera?.classList.remove("hand-tijera-player")
            setTimeout(()=>{
                papel?.classList.add("hand-disabled")
                tijera?.classList.add("hand-disabled")
                div.classList.add("jugar")
            }, 1000)
            
        } if (params == papel){
            params.classList.add("hand-select")
            params.classList.remove("deselected")
            params.classList.remove("hand-papel-player")
            piedra?.classList.remove("hand-piedra-player")
            tijera?.classList.remove("hand-tiejra-player")
            setTimeout(()=>{
                piedra?.classList.add("hand-disabled")
                tijera?.classList.add("hand-disabled")
                div.classList.add("jugar")
            }, 1000)
            
        } if (params == tijera){
            params.classList.add("hand-select")
            params.classList.remove("deselected")
            params.classList.remove("hand-tijera-player")
            papel?.classList.remove("hand-papel-player")
            piedra?.classList.remove("hand-piedra-player")
            setTimeout(()=>{
                piedra?.classList.add("hand-disabled")
                papel?.classList.add("hand-disabled")
                div.classList.add("jugar")
            }, 1000)
        }
        
        const jugada = state.getState().currentPlay.myPlay
        const jugadaMaquina = state.getState().currentPlay.computerPlay
        
        setTimeout(()=>{
            time?.remove()
            if(jugadaMaquina == "piedra"){
                handComputerPiedra?.classList.remove("hand-disabled")
                const re = state.whoWins(jugada, "piedra")
                console.log(re);
            
            }if(jugadaMaquina == "papel"){
                handComputerPapel?.classList.remove("hand-disabled")
                const re = state.whoWins(jugada, "papel")
                console.log(re);
                
            }if(jugadaMaquina == "tijera"){
                handComputerTijera?.classList.remove("hand-disabled")
                const re = state.whoWins(jugada, "tijera")
                console.log(re);
                
            }
        }, 1000)
        
        setTimeout(()=>{
            const currentState = state.getState()
            if(currentState.currentPlay.resultado == "empate"){
                state.pushToHistory("empate")
                direction.i("/empate")
            }else if(currentState.currentPlay.resultado == "ganaste"){
                state.pushToHistory("ganaste")
                direction.i("/ganar")
            }else if(currentState.currentPlay.resultado == "perdiste"){
                state.pushToHistory("perdiste")
                direction.i("/perder")
            }
        }, 2800)
    }
    
    div.appendChild(style)
    return div
}