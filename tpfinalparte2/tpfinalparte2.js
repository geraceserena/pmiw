//Serena Gerace - María Paz García
// comisión 1
// "el jardin de senderos que se bifurcan"

let yutsun=[];
let yutsunataca=[];
let yutsun1;
let fondo;
function setup() {
  createCanvas(800, 400);
  yutsun1 = new jugador();
}

function preload() {
  for (let i=0; i<10; i++) {
    yutsun[i] = loadImage("data/yutsun"+i+".png");
  }
  for (let i=0; i<6; i++) {
    yutsunataca[i] = loadImage("data/golpe"+i+".png");
  }
  fondo=loadImage("data/fondo.png");
}

function draw() {
  background(60);
  image(fondo, 0, 0, 800, 400, 0, 0, 800, 400);//los ultimos 6 parametros son para delimitar lo q se ve de la imagen
  yutsun1.mover();
  yutsun1.atacar();
  yutsun1.mostrar();
}
