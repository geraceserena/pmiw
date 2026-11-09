class principal {

  constructor() {
    this.escenario = new escenario();
    this.jugador = new jugador();
    this.enemigos = [];
    this.vidas = 6;
    this.estado= "jugando";
    for (let i = 0; i < 3; i++) {
      this.enemigos[i] = new enemigo(this.escenario, 850 + i * 300);
    }
  }
  dibujar() {
   
    if (this.estado==="perdiste") {
      background(0);
      fill(255);
      textSize(40);
      textAlign(CENTER, CENTER);
      text("¡PERDISTE!", width/2, height/2);
      return;
    }
    this.escenario.mostrar();
    this.jugador.mover();
    this.jugador.atacar();
    this.jugador.mostrar();
    for (let i = 0; i < 3; i++) {
      this.enemigos[i].mover();
      this.enemigos[i].atacar();
      this.enemigos[i].mostrar();
    }
   for (let i=0; i<6; i++) {
      if (this.vidas === i + 1) {
        image(vidasjugador[i], 20, 20, 150, 50);
      }
    }
  }
  perdervida() { //para yutsun
    if (this.vidas>0) {
      this.vidas--;
    }

    if (this.vidas===0) {
      this.estado = "perdiste";
    }
  }
  detectarcolision() {
    for (let i = 0; i < 3; i++) {
      if (this.enemigos[i].atacando === true && this.enemigos[i].golpe >= 3 && this.enemigos[i].restavida === false) {
        this.perdervida();
        this.enemigos[i].restavida = true;
      }
    }
    for (let i = 0; i < 3; i++) {
      let enemigo = this.enemigos[i];
      let jugadorX = this.escenario.camX + this.jugador.x;

      if (this.jugador.atacando === true && enemigo.ultimoataque!== this.jugador.numeroataque && ((enemigo.x > jugadorX && enemigo.x - jugadorX < 70) ||(enemigo.x < jugadorX && jugadorX - enemigo.x < 70))) {
        enemigo.recibirgolpe(); 
        enemigo.ultimoataque= this.jugador.numeroataque;
        //este if delimita la distancia en la q tiene q estar el jugador y el enemigo para q el golpe impacte
      }
    }
  }
}
