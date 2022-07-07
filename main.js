
let who = ['El perro','Mi abuelo','Mi tortuga', 'Mi gato'];
let what = ['se comió','aplastó','robó','rompió', 'ensució'];
let when = ['antes de clases','justo a tiempo', 'cuando terminé','durante el almuerzo','mientras oraba'];

function generadorExcusas(quien, que, cuando) {
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);

    return quien[numQuien]+ ' ' + que[numQue]+ ' ' + "mi tarea" + ' ' + cuando[numCuando];

}

function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = generadorExcusas(who, what, when);
}
window.onload = onLoad;