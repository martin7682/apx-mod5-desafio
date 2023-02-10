import { initRouter } from "./router";
import { initButtonEl } from "./components/butomEl";
import { initHandPapel } from "./components/hand-papel";
import { initHandTijera } from "./components/hand-tijera";
import { initHandPiedra } from "./components/hand-piedra";
import { initPtesentationTitle } from "./components/presentationTitle";
import { initRules } from "./components/rules-comp";
import { initResultadoGanar } from "./components/resultado-ganar";
import { initResultadoPerder } from "./components/resultado-perder";
import { initResultadoEmpatar } from "./components/resultado-empatar";
import { initScore } from "./components/score";
import { state } from "./state";


(function(){
    
    const root = document.querySelector(".root")
    initRouter(root!)
    state.init()
    
    
    initButtonEl()
    initPtesentationTitle()
    initRules()
    initHandPapel()
    initHandPiedra()
    initHandTijera()
    initResultadoGanar()
    initResultadoPerder()
    initResultadoEmpatar()
    initScore()
})()