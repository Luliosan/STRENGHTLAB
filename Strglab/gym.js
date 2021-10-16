

alert('Bienvenido');
const gym = document.getElementById('gym');
const inputUsuario = document.getElementById('input-usuario').value;
const inputClave = document.getElementById('input-clave').value;
const body = document.querySelector('body');
const anchoMitad = window.innerWidth/2;
const altoMitad = window.innerHeight/2;

body.addEventListener('mousemove',(m)=> {
    if(m.clientX < anchoMitad && m.clientY > altoMitad){
        gym.src = "img/pngwing.com.png";
    
     }else if(m.clientX < anchoMitad && m.clientY < altoMitad){
        gym.src = "img/pngwing.com-3.png";
        
    }else if(m.clientX > anchoMitad && m.clientY<altoMitad){
        gym.src = "img/pngwing.com-4.png";
    }else if(m.clientX > anchoMitad && m.clientY>altoMitad){
        gym.src = "img/pngwing.com-5.png";   } 
 
})
    
var getData = function (){
    var inputUsuario = document.getElementById("inputUsuario").value;
    var inputClave = document.getElementById("inputClave").value;
    //console.log(inputUsuario+" "+inputClave);

}


localStorage["input-usuario"] = "usuario";
localStorage["input-clave"] = "clave";
console.log(localStorage["usuario"]);
console.log(localStorage["clave"]);




