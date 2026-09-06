//Serena Gerace 
//Conisión 1
//aclaracion:en la 2da animacion el tamaño de las imagenes es mas grande pq el kirby esta mas cerca.
let velo, posx, posy, fondo;
let estados;
let sprite;
let kirby1=[];
let kirby2=[];
let texto;
let inicio;
let fc;
function preload() {
  for (let i=0; i<12; i++) {
    kirby1[i] = loadImage("data/frame"+i+".png");
  }
   for (let i=0; i<6; i++) {
    kirby2[i] = loadImage("data/sprite"+i+".png");
  }
}
function setup() {
  createCanvas(800,600);
  fondo=loadImage("data/fondo.png");
  posx=width/12;
  posy=height/2.5;
  fc=8;
  velo=2;
  sprite=0;
  estados=0;
  inicio=millis();
  texto= "Presiona R para reiniciar"
}
function draw() {
  background(0);
  image(fondo, 0, 0, width, height);
  fill(0);
  text(texto,230,500);
  textSize(30);
  
  
  estados = chequeodeestado(estados,inicio);

  
  if (frameCount%fc===0){
    sprite++;
  }
  
  if (estados===0) {
    sprite = chequeoframes(sprite,12);
    posx+=velo;
    image(kirby1[sprite], posx, posy);

  }
    else if (estados===1) {
      sprite = chequeoframes(sprite,6);
      image(kirby2[sprite], posx, posy);
  }
}
function chequeodeestado(estado,inicio){
    if (millis()-inicio>1000) {
      estado = 1;
    } 
    return estado;
  }
  
function chequeoframes(sprites,frames){
 if (sprites>=frames) {
    sprites=0;
 }
 return sprites;
}
function reiniciar() {
  posx = width/12;
  posy = height / 2.5;
  estados = 0;
  sprite=0;
  inicio = millis();
  velo=2;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciar();
  }
}
