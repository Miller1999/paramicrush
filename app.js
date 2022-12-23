
function moverPosNO(elm)
{
    elm.style.position = 'absolute';
    elm.style.top = Math.random()*(window.innerHeight-elm.offsetHeight) + 'px';
    elm.style.left = Math.random()*(window.innerWidth-elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btnSi');
let btnNo = document.getElementById('btnNo');
let modoSx = document.getElementsByClassName('modoSexo')[0];

btnNo.addEventListener('mouseenter',function(e){moverPosNO(e.target)});
btnSi.addEventListener('click', function(e)
{
    alert('Sabia que dirias que SI, CASEMONOS')
    modoSx.style.display = 'block';
    const cancion = new Audio('Imagenes\\ModoSexo.mp3');
    cancion.play();
    
})