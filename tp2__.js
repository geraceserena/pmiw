let imagenes=[];
let pantalla=0;
let texto=[];
let fuenteN,fuenteR;
function preload(){
 for (let i=0; i<13; i++) {
    imagenes[i] = loadImage("data/img"+i+".png");
  }
 fuenteN= loadFont("data/negrita.ttf");
 fuenteR= loadFont("data/normal.ttf");
}
function mostrarpantalla(numero,tam,posx,posy){
 image(imagenes[numero],0,0,width,height);  
 textSize(tam);
 text(texto[numero],posx,posy);
 fill(255);
}

function setup() {
createCanvas(800,450);
texto[0]="El jardín de senderos \nque se bifurcan"
texto[1]="Eres Yu Tsun, un espía chino trabajando para Alemania durante la Primera \nGuerra Mundial. Richard Madden ha descubierto a tu compañero de mision, \ndescubrio tu identidad y ahora te persigue."
texto[2]="Debes cumplir con tu mision. Tu ultima tarea: transmitirle a Alemania \nel nombre de una ciudad que tienen que bombardear. Juntas fuerzas a pesar \nde tus miedos y te comprometés con la misión."
texto[3]="3"
}
function detectarzona(x,y,tamx,tamy) {
  if (mouseX>x && mouseX<x+tamx && mouseY>y && mouseY< y+tamy) {
    return true;
  } else {
    return false;
  }
}
function botones(x,y,tamx,tamy,nombre) {
  if (detectarzona(x,y,tamx,tamy)) {
    fill(60);
  } else {
    fill(60,0,255);
  }
  rect(x, y, tamx, tamy, tamy/4);
  textSize(tamy/3);
  fill(255);
  text(nombre, x+tamx/8, y+tamy/2);
}
function mousePressed() {
  if (detectarzona(670,370,120,50)) {
    pantalla++;
  }
}

function draw() {

if(pantalla===0){
  textFont(fuenteN);
  mostrarpantalla(0,60,0,50);
  textSize(30);
  text("Serena Gerace \nMaría Paz García",20,300,800);
  text("De Jorge Luis Borges",20,200,800);
  botones(670,370,120,50,"SIGUIENTE");

 }
if(pantalla===1){
  mostrarpantalla(1,20,5,310);
  botones(670,370,120,50,"SIGUIENTE");

 }
 if(pantalla===2){
  mostrarpantalla(2,20,5,310);
  botones(670,370,120,50,"SIGUIENTE");

 }
 if(pantalla===3){
  mostrarpantalla(3,20,5,310);
  botones(670,370,120,50,"SIGUIENTE");

 }if(pantalla===4){
  mostrarpantalla(4,20,5,310);
  botones(670,370,120,50,"SIGUIENTE");

 }if(pantalla===5){
  mostrarpantalla(5,20,5,310);
  botones(670,370,120,50,"SIGUIENTE");

 }if(pantalla===6){
  mostrarpantalla(6,20,5,310);
  botones(670,370,120,50,"SIGUIENTE");
 }
}
