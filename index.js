" use strcit";

const btn_piedra = document.getElementById("Piedra");
const btn_papel = document.getElementById("Papel");
const btn_tijera = document.getElementById("Tijera");
const btn_iniciar = document.getElementById("Iniciar_juego");

const img_usuario = document.getElementById("usuario");
const img_cpu = document.getElementById("cpu");

const getPuntosUsuario = document.getElementById("puntos_usuario");
const getPuntosCpu = document.getElementById("puntos_cpu");

let marcador_usuario=0;
let marcador_cpu=0;

let Menu = "espera";
let Opcion_jugador;
let Opcion_cpu;

const img_piedra = "./img/Piedra.png";
const img_papel = "./img/Papel.png";
const img_tijera = "./img/Tijeras.png";

init_imagenes();
btn_iniciar.onclick = function () {
  Menu = "inicio";
  console.log(Opcion_jugador);
  Opcion_cpu = num_aleatorio();
  console.log("opcion cpu", Opcion_cpu);
  display_opcion_cpu(Opcion_cpu);
  jugar(Opcion_jugador, Opcion_cpu);
};
btn_piedra.onclick = function () {
  Opcion_jugador = 0;
  img_usuario.src = img_piedra;
};
btn_papel.onclick = function () {
  Opcion_jugador = 1;
  img_usuario.src = img_papel;
};
btn_tijera.onclick = function () {
  Opcion_jugador = 2;
  img_usuario.src = img_tijera;
};

switch (Menu) {
  case "espera":
    console.log("Esperando..");
    break;
  case "inicio":
    console.log("Iniciando juego");
    break;
}
/*  FUNCIONES */
function init_imagenes() {
  btn_piedra.style.backgroundImage = " url('./img/Piedra.png')";
  btn_papel.style.backgroundImage = " url('./img/Papel.png')";
  btn_tijera.style.backgroundImage = "url('./img/Tijeras.png')";
}

function num_aleatorio() {
  return parseInt(Math.random() * 3);
}

function jugar(opcion_jugador, opcion_cpu) {
  // var resultado = "";
  if (
    (opcion_jugador == 0 && opcion_cpu == 0) ||
    (opcion_jugador == 1 && opcion_cpu == 1) ||
    (opcion_jugador == 2 && opcion_cpu == 2)
  ) {
    //   resultado = "empate";
    alert("EMPATE");
  } else if (
    (opcion_jugador == 0 && opcion_cpu == 2) ||
    (opcion_jugador == 1 && opcion_cpu == 0) ||
    (opcion_jugador == 2 && opcion_cpu == 1)
  ) {
    alert("USUARIO GANA");
    marcador_usuario++;
    getPuntosUsuario.innerText=marcador_usuario;
    // document.getElementById("puntos_usuario").innerText = marcador_usuario;
  } else {
    alert("BOOT GANA");
    marcador_cpu++;
    getPuntosCpu.innerText=marcador_cpu;


    // document.getElementById("puntos_cpu").innerText = marcador_cpu;
  }
  // return resultado;
}

function display_opcion_cpu(opcion) {
  if (opcion === 0) {
    img_cpu.src = img_piedra;
  } else if (opcion === 1) {
    img_cpu.src = img_papel;
  } else {
    img_cpu.src = img_tijera;
  }
}
