function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire1b67;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire1b67=a),a.register("27Lyk",(function(t,n){var r,a;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("1wqU5",(function(e,t){e.exports=new URL(a("27Lyk").resolve("2qAbK"),import.meta.url).toString()})),a.register("g1h0q",(function(e,t){e.exports=new URL(a("27Lyk").resolve("dBdvd"),import.meta.url).toString()})),a.register("lY1sQ",(function(e,t){e.exports=new URL(a("27Lyk").resolve("iAVPg"),import.meta.url).toString()})),a.register("cKEhr",(function(e,t){e.exports=new URL(a("27Lyk").resolve("1mggj"),import.meta.url).toString()})),a.register("b3tzh",(function(e,t){e.exports=new URL(a("27Lyk").resolve("fqzrs"),import.meta.url).toString()})),a.register("gvK6x",(function(e,t){e.exports=new URL(a("27Lyk").resolve("alWmJ"),import.meta.url).toString()})),a.register("3RykN",(function(e,t){e.exports=new URL(a("27Lyk").resolve("hDWbY"),import.meta.url).toString()})),a.register("7NKwy",(function(e,t){e.exports=new URL(a("27Lyk").resolve("8r5uV"),import.meta.url).toString()})),a.register("3Ls8u",(function(e,t){e.exports=new URL(a("27Lyk").resolve("6QeWe"),import.meta.url).toString()})),a.register("lgBze",(function(e,t){e.exports=new URL(a("27Lyk").resolve("dVtke"),import.meta.url).toString()})),a.register("b6qIh",(function(e,t){e.exports=new URL(a("27Lyk").resolve("EDVCh"),import.meta.url).toString()})),a.register("6HXxa",(function(e,t){e.exports=new URL(a("27Lyk").resolve("ifSjg"),import.meta.url).toString()})),a.register("gqrKL",(function(e,t){e.exports=new URL(a("27Lyk").resolve("juHkG"),import.meta.url).toString()})),a.register("8bg0Z",(function(e,t){e.exports=new URL(a("27Lyk").resolve("43uQj"),import.meta.url).toString()})),a("27Lyk").register(JSON.parse('{"1LzKV":"index.b4dc2f22.js","2qAbK":"piedra-img.5753bd08.svg","dBdvd":"papel-img.5d507519.svg","iAVPg":"tijera-img.c30bb30b.svg","1mggj":"human-piedra.0f7281a4.svg","fqzrs":"human-papel.e7dca706.svg","alWmJ":"human-tijera.36290aee.svg","hDWbY":"count.0c20e3a0.svg","8r5uV":"papel.5f79bbf0.svg","6QeWe":"tijera.6a2fdda1.svg","dVtke":"piedra.c88f7ccf.svg","EDVCh":"piedra-papel-tijera.1b361087.svg","ifSjg":"estrella-ganaste.925a67b3.svg","juHkG":"estrella-perdiste.9846907e.svg","43uQj":"estrella-empate.a7b52072.svg"}'));var o={},s=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function c(e,t){this._id=e,this._clearFn=t}o.setTimeout=function(){return new c(i.call(setTimeout,s,arguments),clearTimeout)},o.setInterval=function(){return new c(i.call(setInterval,s,arguments),clearInterval)},o.clearTimeout=o.clearInterval=function(e){e&&e.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(s,this._id)},o.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},o.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},o._unrefActive=o.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))};var l,d,u={},p=u={};function m(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function f(e){if(l===setTimeout)return setTimeout(e,0);if((l===m||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:m}catch(e){l=m}try{d="function"==typeof clearTimeout?clearTimeout:h}catch(e){d=h}}();var g,y=[],v=!1,b=-1;function x(){v&&g&&(v=!1,g.length?y=g.concat(y):b=-1,y.length&&E())}function E(){if(!v){var e=f(x);v=!0;for(var t=y.length;t;){for(g=y,y=[];++b<t;)g&&g[b].run();b=-1,t=y.length}g=null,v=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===h||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function L(e,t){this.fun=e,this.array=t}function S(){}p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new L(e,t)),1!==y.length||v||f(E)},L.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=S,p.addListener=S,p.once=S,p.off=S,p.removeListener=S,p.removeAllListeners=S,p.emit=S,p.prependListener=S,p.prependOnceListener=S,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0},function(e,t){if(!e.setImmediate){var n,r,a,o,s,i=1,c={},l=!1,d=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?n=function(e){u.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){h(e.data)},n=function(e){a.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):n=function(e){setTimeout(h,0,e)}:(o="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&h(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),n=function(t){e.postMessage(o+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var a={callback:e,args:t};return c[i]=a,n(i),i++},p.clearImmediate=m}function m(e){delete c[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{m(e),l=!1}}}}}("undefined"==typeof self?void 0===t?{}:t:self),o.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||o&&o.setImmediate,o.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||o&&o.clearImmediate;const w={data:{currentPlay:{myPlay:"",computerPlay:"",resultado:[]},historyScore:{jugador:0,computadora:0}},init(){const e=localStorage.getItem("scoreData");if(!e)return console.log("bienvenidos a pidra papel y tijera");this.data.historyScore=JSON.parse(e)},getState(){return this.data},setState(e){this.data=e},playerMove(e){const t=this.getState();t.currentPlay.myPlay=e;t.currentPlay.computerPlay=["piedra","papel","tijera"][Math.floor(3*Math.random())]},whoWins(e,t){const n=this.getState().currentPlay.resultado,r=["piedra"==e&&"tijera"==t,"papel"==e&&"piedra"==t,"tijera"==e&&"papel"==t].includes(!0),a=["piedra"==e&&"piedra"==t,"papel"==e&&"papel"==t,"tijera"==e&&"tijera"==t].includes(!0);return n[0]=a?"empate":r?"ganaste":"perdiste"},pushToHistory(e){const t=this.getState(),n=t.historyScore.jugador,r=t.historyScore.computadora;"ganaste"==e?this.setState({...t,historyScore:{jugador:n+1,computadora:r}}):"perdiste"==e&&this.setState({...t,historyScore:{jugador:n,computadora:r+1}}),this.saveScore()},saveScore(){const e=this.getState().historyScore;localStorage.setItem("scoreData",JSON.stringify(e))},borrarScore(){localStorage.setItem("scoreData",JSON.stringify({jugador:0,computadora:0}))}};const T="/desafio-dwf-5",j=[{path:/\/wellcome/,component:function(e){const t=document.createElement("div");t.innerHTML='\n    <custom-presentation></custom-presentation>\n    <custom-button class="buttonEl" title="Empezar Martin"></custom-button>\n    <div class="hands">\n        <hand-piedra></hand-piedra>\n        <hand-papel></hand-papel>\n        <hand-tijera></hand-tijera>\n    </div>\n    ',t.className="contenedor";const n=document.createElement("style");return n.textContent="\n    .contenedor{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n        padding: 85px 0 0 0;\n    }\n    .hands{\n        display:flex;\n        width: 80%;\n        justify-content: space-evenly;\n        position: relative;\n        top: 10px;\n    }\n\n    @media(min-width:960px){\n        .hands{\n            width: 50%;\n        }\n    }\n    ",t.querySelector(".buttonEl")?.addEventListener("click",(t=>{e.i("/rules")})),t.appendChild(n),t}},{path:/\/rules/,component:function(e){const t=document.createElement("div");t.innerHTML='\n    <custom-rules></custom-rules>\n    <custom-button class="buttonEl" title="¡Jugá!"></custom-button>\n    \n    <div class="hands">\n        <hand-piedra></hand-piedra>\n        <hand-papel></hand-papel>\n        <hand-tijera></hand-tijera>\n    </div>\n    ',t.className="contenedor";const n=document.createElement("style");return n.textContent="\n    \n    .contenedor{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n        padding: 85px 0 0 0;\n    }\n    .hands{\n        display:flex;\n        width: 80%;\n        justify-content: space-evenly;\n        position: relative;\n        top: 10px;\n    }\n    @media(min-width:960px){\n        .hands{\n            width: 50%;\n        }\n    }\n    ",t.querySelector(".buttonEl")?.addEventListener("click",(()=>{e.i("/play")})),t.appendChild(n),t}},{path:/\/play/,component:function(e){const t=a("1wqU5"),n=a("g1h0q"),r=a("lY1sQ"),s=a("cKEhr"),i=a("b3tzh"),c=a("gvK6x");var l=[s,i,c,a("3RykN")],d=0,u=[t,n,r],p=0;let m=setInterval((function(){var t=document.getElementById("imageHuman");t.src=l[d],d=(d+1)%l.length,document.getElementById("imageComputer").src=u[p],p=(p+1)%u.length,t.src==l[3]&&(e.i("/rules"),clearInterval(m))}),1e3);const h=document.createElement("div");h.innerHTML=`\n    <div class = "contador">\n        <img id="imageHuman" >\n        <img id="imageComputer" >\n    </div>\n    <div class="hands-computer">\n        <img hand="piedra" class="hand-piedra-computer hand-disabled" src=${s}>\n        <img hand="papel" class="hand-papel-computer hand-disabled" src=${i}>\n        <img hand="tijera" class="hand-tijera-computer hand-disabled" src=${c}>\n    </div>\n    <div class="hands-player">\n        <img class="hand-piedra-player" src=${s}>\n        <img class="hand-papel-player" src=${i}>\n        <img class="hand-tijera-player" src=${c}>\n    </div>\n    `,h.classList.add("contenedor");const f=h.querySelector(".hand-piedra-computer"),g=h.querySelector(".hand-papel-computer"),y=h.querySelector(".hand-tijera-computer"),v=document.createElement("style");v.textContent="\n    .hands-player{\n        display:flex;\n        width: 100%;\n        justify-content: space-evenly;\n        translate: 0px 5px;\n    }\n    @media(min-width:960px){\n        .hands-player{\n            width: 70%;\n        }\n    }\n\n    .hand-disabled{\n        display: none\n    }\n\n    .hand-piedra-computer,\n    .hand-papel-computer,\n    .hand-tijera-computer{\n        transform: rotate(180deg);\n        \n    }\n    \n    .hand-piedra-player:hover,\n    .hand-papel-player:hover,\n    .hand-tijera-player:hover{\n        transform: translateY(-80px);\n        bottom: -50px;\n        transition: all 1s;\n    }\n\n    .hand-select{\n        transform: translateY(-25px);\n        transition: all 0.5s;\n    }\n    .deselected{\n        opacity: 0.5;\n        transform: translateY(5px);\n        transition: all 0.5s;\n    }\n    \n    .contenedor{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n        padding: 85px 0 0 0;\n    }\n    .contador{\n        \n        border-radius: 100%;\n        border: solid 15px black;\n        padding: 50px 50px;\n        \n    }\n    .jugar{\n        padding:50px 0 0 0;\n    }\n    ";const b=h.querySelector(".hand-piedra-player"),x=h.querySelector(".hand-papel-player"),E=h.querySelector(".hand-tijera-player"),L=h.querySelector(".contador"),S=h.querySelector(".hands-player").children;for(const e of S)e.addEventListener("click",(()=>{const t=e.getAttribute("class");clearInterval(m),"hand-piedra-player"==t?(w.playerMove("piedra"),T(b)):"hand-papel-player"==t?(w.playerMove("papel"),T(x)):"hand-tijera-player"==t&&(w.playerMove("tijera"),T(E))}));function T(t){for(const e of S)e.classList.add("deselected");t==b&&(t.classList.add("hand-select"),t.classList.remove("deselected"),t.classList.remove("hand-piedra-player"),x?.classList.remove("hand-papel-player"),E?.classList.remove("hand-tijera-player"),(0,o.setTimeout)((()=>{x?.classList.add("hand-disabled"),E?.classList.add("hand-disabled"),h.classList.add("jugar")}),1e3)),t==x&&(t.classList.add("hand-select"),t.classList.remove("deselected"),t.classList.remove("hand-papel-player"),b?.classList.remove("hand-piedra-player"),E?.classList.remove("hand-tiejra-player"),(0,o.setTimeout)((()=>{b?.classList.add("hand-disabled"),E?.classList.add("hand-disabled"),h.classList.add("jugar")}),1e3)),t==E&&(t.classList.add("hand-select"),t.classList.remove("deselected"),t.classList.remove("hand-tijera-player"),x?.classList.remove("hand-papel-player"),b?.classList.remove("hand-piedra-player"),(0,o.setTimeout)((()=>{b?.classList.add("hand-disabled"),x?.classList.add("hand-disabled"),h.classList.add("jugar")}),1e3));const n=w.getState().currentPlay.myPlay,r=w.getState().currentPlay.computerPlay;(0,o.setTimeout)((()=>{if(L?.remove(),"piedra"==r){f?.classList.remove("hand-disabled");const e=w.whoWins(n,"piedra");console.log(e)}if("papel"==r){g?.classList.remove("hand-disabled");const e=w.whoWins(n,"papel");console.log(e)}if("tijera"==r){y?.classList.remove("hand-disabled");const e=w.whoWins(n,"tijera");console.log(e)}}),1e3),(0,o.setTimeout)((()=>{const t=w.getState();"empate"==t.currentPlay.resultado?(w.pushToHistory("empate"),e.i("/empate")):"ganaste"==t.currentPlay.resultado?(w.pushToHistory("ganaste"),e.i("/ganar")):"perdiste"==t.currentPlay.resultado&&(w.pushToHistory("perdiste"),e.i("/perder"))}),2800)}return h.appendChild(v),h}},{path:/\/ganar/,component:function(e){const t=document.createElement("div"),n=w.getState();t.innerHTML=`\n        <resultado-ganar class="star"></resultado-ganar>\n        <custom-score puntosJugador=${n.historyScore.jugador} puntosMaquina=${n.historyScore.computadora}></custom-score>\n        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>\n        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>\n    `,t.className="contenedor";const r=document.createElement("style");r.textContent="\n    .contenedor{\n        background: var(--fondo-ganaste);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        height: 100vh;\n    }\n    .buttonEl{\n        margin-top:4px;\n    }\n    ",t.appendChild(r);const a=t.querySelector(".buttonEl"),o=t.querySelector(".reset");return a?.addEventListener("click",(()=>{e.i("/play")})),o?.addEventListener("click",(()=>{w.borrarScore(),w.init(),e.i("/rules")})),t}},{path:/\/perder/,component:function(e){const t=document.createElement("div"),n=w.getState();t.innerHTML=`\n        <resultado-perder class="star"></resultado-perder>\n        <custom-score puntosJugador=${n.historyScore.jugador} puntosMaquina=${n.historyScore.computadora}></custom-score>\n        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>\n        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>\n    `,t.className="contenedor";const r=document.createElement("style");r.textContent="\n    .contenedor{\n        background: var(--fondo-perdiste);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        height: 100vh;\n    }\n    .buttonEl{\n        margin-top:4px;\n    }\n    ",t.appendChild(r);const a=t.querySelector(".buttonEl"),o=t.querySelector(".reset");return a?.addEventListener("click",(()=>{e.i("/play")})),o?.addEventListener("click",(()=>{e.i("/rules"),w.borrarScore(),w.init()})),t}},{path:/\/empate/,component:function(e){const t=document.createElement("div"),n=w.getState();t.innerHTML=`\n        <resultado-empatar class="star"></resultado-empatar>\n        <custom-score puntosJugador=${n.historyScore.jugador} puntosMaquina=${n.historyScore.computadora}></custom-score>\n        <custom-button title="Volver a jugar" class="buttonEl"></custom-button>\n        <custom-button title="Borrar puntaje" class="buttonEl reset"></custom-button>\n    `,t.className="contenedor";const r=document.createElement("style");r.textContent="\n    .contenedor{\n        background: var(--fondo-empate);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        height: 100vh;\n        justify-content: space-evenly;\n    }\n    .botonEl{\n        margin-top:4px;\n    }\n    .star{\n        width:255px;\n        height:260px;\n    }\n    ",t.appendChild(r);const a=t.querySelector(".buttonEl"),o=t.querySelector(".reset");return a?.addEventListener("click",(()=>{e.i("/play")})),o?.addEventListener("click",(()=>{w.borrarScore(),w.init(),e.i("/rules")})),t}}];function H(){return location.host.includes("github.io")}(function(e){function t(e){const t=H()?T+e:e;history.pushState({},"",t),n(t)}function n(n){console.log("el handler recibio una nueva ruta",n);const r=H()?n.replace(T,""):n;for(const n of j)if(n.path.test(r)){const r=n.component({i:t});console.log(r),e.firstElementChild&&e.firstElementChild.remove(),e.appendChild(r)}}location.host.includes("github.io")?t("/welcome"):"/"==location.pathname?t("/wellcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}})(document.querySelector(".root")),w.init(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){this.getAttribute("title");const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("style");t.innerHTML=`\n                <div class="contenedor-buttonEl">\n                    <buttonEl class="buttonEl">${this.title}</buttonEl>\n                </div>\n            `,n.innerHTML="\n            .contenedor-buttonEl{\n                display: flex\n            }\n            .buttonEl{\n                background: #006CFC;\n                color: #D8FCFC;\n                border: 10px solid #001997;\n                border-radius: 10px;\n                width: 322px;\n                height: 87px;\n                text-align: center;\n                padding: 18px 0 0 0;\n                font-size: 45px;\n                font-family: 'Odibee Sans';\n                \n                \n            }\n            @media(min-width:960px){\n                .buttonEl{\n                    width: 336px;\n                }\n            }\n            ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-button",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=a("b6qIh"),n=document.createElement("div");n.innerHTML='\n            <div class="image"></div>\n            ';n.querySelector(".image").innerHTML=`\n            <img src=${t}>\n            `,e.appendChild(n)}}customElements.define("custom-presentation",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className="rules",t.innerHTML='\n                <h3 class="rules-text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen 3 segundos.</h3>\n            ';const n=document.createElement("style");n.innerHTML='\n            .rules{\n                display:flex;\n                font-family: "Noto Serif Display", serif;\n                color: black;\n                text-align: center;\n            }\n            .rules-text{\n                font-size: 40px;\n                width: 317px;\n                height: 330px;\n                padding:0px;\n                margin:0px;\n            }\n            \n            ',e.appendChild(t),e.appendChild(n)}}customElements.define("custom-rules",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=a("7NKwy"),n=document.createElement("img");n.src=t,e.appendChild(n)}}customElements.define("hand-papel",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=a("lgBze"),n=document.createElement("img");n.src=t,e.appendChild(n)}}customElements.define("hand-piedra",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=a("3Ls8u"),n=document.createElement("img");n.src=t,e.appendChild(n)}}customElements.define("hand-tijera",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=a("6HXxa"),n=document.createElement("div");n.innerHTML='\n                <div class="image">                 \n                </div>\n            ';n.querySelector(".image").innerHTML=`\n                <img src=${t}>\n            `,e.appendChild(n)}}customElements.define("resultado-ganar",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=a("gqrKL"),n=document.createElement("div");n.innerHTML='\n                <div class="image">                 \n                </div>\n            ';n.querySelector(".image").innerHTML=`\n                <img src=${t}>\n            `,e.appendChild(n)}}customElements.define("resultado-perder",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=a("8bg0Z"),n=document.createElement("div");n.innerHTML='\n                <div class="image">                 \n                </div>\n            ';n.querySelector(".image").innerHTML=`\n                <img src=${t}>\n            `,e.appendChild(n)}}customElements.define("resultado-empatar",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=this.getAttribute("puntosJugador"),n=this.getAttribute("puntosMaquina"),r=document.createElement("div");r.innerHTML=`\n                <div class="score">\n                    <h1 class="score_title">Score</h1>\n                    <p class="player">Vos: ${t}</p>\n                    <p class="computer">Máquina: ${n}</p>\n                </div>\n            `;const a=document.createElement("style");a.textContent="\n            .score{\n                display:flex;\n                font-family: 'Odibee Sans';\n                height: 175px;\n                width:235px;\n                justify-content: center;\n                flex-direction: column;\n                border: 10px solid #000000;\n                border-radius: 10px;\n                background: #FFFFFF;\n                margin:0 0 10px 0;\n            }\n            .score_title{\n                margin: 5px\n                font-size:55px;\n                letter-spacing: 0.05em;\n                text-align: center;\n            }\n            .player,\n            .computer{\n                text-align:end;\n                font-size:45px;\n                margin: 0 5px 3px 0;\n            }\n            \n            ",e.append(r),e.appendChild(a)}}customElements.define("custom-score",e)}();
//# sourceMappingURL=index.b4dc2f22.js.map
