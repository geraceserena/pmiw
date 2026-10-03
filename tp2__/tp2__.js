let imagenes=[];
let pantalla=0;
let texto=[];
let fuenteN,fuenteR;
function preload(){
 for (let i=0; i<13; i++) {
    imagenes[i] = loadImage("data/img"+i+".png");
  }
 texto=loadStrings("data/jardin.txt");
 fuenteN= loadFont("data/negrita.ttf");
 fuenteR= loadFont("data/normal.ttf");
}

function setup() {
 createCanvas(800,450);
 textFont(fuenteN);

}
function mostrarpantalla(num,tam,posx,posy,post,ancho,alt){
 image(imagenes[num],0,0,width,height);  
 fill(128,128,128,150);
 rect(posx-10,posy-30,ancho,alt,alt/4);
 fill(255);
 textSize(tam);
 text(texto[post],posx,posy,ancho,alt);
 
}
function pantalladecision(num1,num2,posx1,posx2,posy,ancho,alt){
 textSize(17);
 fill(128,128,128,150);
 rect(posx1-10,posy-30,ancho,alt,alt/4);
 rect(posx2-10,posy-30,ancho,alt,alt/4);
 fill(255);
 text(texto[num1],posx1,posy,ancho,alt);
 text(texto[num2],posx2,posy,ancho,alt);
}
function elegir(x,y,tamx,tamy,destino) {
  if (detectarzona(x,y,tamx,tamy)) {
    pantalla = destino;
  }
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
    fill(60,0,255);
  } else {
    fill(60);
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
  
  else if (pantalla===3) {
   elegir(70,320,320,100,4);
   elegir(450,350,320,100,5);
  }
  else if (pantalla===5) {
   elegir(70,320,320,100,6);
   elegir(450,350,320,100,7);
 }
}
//elegir(x,y,tamx,tamy,destino)
function draw() {
//mostrarpantalla(num,tam,posx,posy,post,ancho,alt)
//pantalladecision(num1,num2,posx1,posx2,posy,ancho,alt)
if(pantalla===0){
  mostrarpantalla(0,60,10);
  textSize(30);
  text(texto[1],20,200,800);
  botones(width/2-50,250,110,50," INICIAR");

}
if(pantalla===1){
  mostrarpantalla(1,20,10,310,2,width,100);
  botones(670,370,120,50,"SIGUIENTE");

}
 if(pantalla===2){
  mostrarpantalla(2,20,10,310,3,width,100);
  botones(670,370,120,50,"SIGUIENTE");

}
 if(pantalla===3){
  mostrarpantalla(3,20,10,40,4,width,80);
  pantalladecision(5,6,80,450,350,320,100);
  
}
 if(pantalla===4){
  mostrarpantalla(4,20,10,310,7,width,100);
  botones(670,370,120,50,"SIGUIENTE");

}
 if(pantalla===5){
  mostrarpantalla(5,20,20,30,8,width-25,120);
  pantalladecision(9,10,80,450,350,250,70);
}

 if(pantalla===6){
  mostrarpantalla(6,20,5,310,6);
  botones(670,370,120,50,"SIGUIENTE");
 }
 if(pantalla===7){
  mostrarpantalla(7,20,5,310,6);
  botones(670,370,120,50,"SIGUIENTE");
 }
}
