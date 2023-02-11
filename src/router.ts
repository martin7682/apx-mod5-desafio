import { wellcome } from "./pages/wellcome";
import { rules } from "./pages/rules";
import { play } from "./pages/play";
import { ganar } from "./pages/resutls/ganaste";
import { perder } from "./pages/resutls/perdiste";
import { empate } from "./pages/resutls/empate";


const BASE_PATH = "/apx-mod5-desafio"

const routes = [
    {
        path: /\/wellcome/,
        component: wellcome
    },
    {
        path: /\/rules/,
        component:rules
    },
    {
        path: /\/play/,
        component: play
    },
    {
        path: /\/ganar/,
        component: ganar
    },
    {
        path: /\/perder/,
        component: perder
    },
    {
        path: /\/empate/,
        component: empate
    }
]

function isGithubPages() {
    return location.host.includes("github.io");
}

export function initRouter(container: Element){
    function goTo(path){
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({},"",completePath);
        handleRoute(completePath)
    }
    function handleRoute(route){
        console.log("el handler recibio una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for(const r of routes){
            if(r.path.test(newRoute)){
                const el= r.component({i:goTo});
                console.log(el);
                if(container.firstElementChild){
                    container.firstElementChild.remove()
                }
                container.appendChild(el)
            }
        }
    }
    if (location.host.includes("github.io")) {
        goTo("/wellcome");
    } else if (location.pathname == "/"){
        goTo("/wellcome");
    } else {
        handleRoute(location.pathname)
    }
    window.onpopstate = function(){
        handleRoute(location.pathname)
    }
}