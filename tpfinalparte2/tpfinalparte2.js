//Serena Gerace - María Paz García
// comisión 1
// "el jardin de senderos que se bifurcan"

let yutsun=[];
let yutsunataca=[];
let secuaces=[];
let secuacesataca = [];
let juego;
let fondo;
let vidasjugador=[];

function setup() {
  createCanvas(800, 400);
  juego = new principal();
}

function preload() {
  for (let i=0; i<10; i++) {
    yutsun[i] = loadImage("data/yutsun"+i+".png");
  }
  for (let i=0; i<6; i++) {
    yutsunataca[i] = loadImage("data/golpe"+i+".png");
  }
  for (let i=0; i<9; i++) {
    secuaces[i] = loadImage("data/secuaz"+i+".png");
  }
  for (let i=0; i<9; i++) {
    secuacesataca[i] = loadImage("data/ataque"+i+".png");
  }
  for (let i=0; i<6; i++) {
    vidasjugador[i] = loadImage("data/vidas" +i+ ".png");
  }

  fondo=loadImage("data/fondo.png");
}
function draw() {
  background(60);
  juego.dibujar();
  juego.detectarcolision();
}
