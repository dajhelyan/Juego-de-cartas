import { changeView } from './lib/routes.js'


export const initRouter = () => {
    
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => { changeView(window.location.hash) })
}

window.addEventListener('load', initRouter);