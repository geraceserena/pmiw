class jugador {

  constructor() {
    this.x=350;
    this.y=220;
    this.velocidad=3;
    this.sprite = 0;
    this.contador=0;
    this.contadorgolpe=0;
    this.atacando=false;
    this.golpe=0;
  }
  mover() {
    if (this.atacando==false) {
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.velocidad;
        this.contador++;
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.velocidad;
        this.contador++;
      } else {
        this.sprite=0;
        this.contador=0;
      }

      if (this.contador>=5) {
        this.sprite++;
        this.contador=0;
      }

      if (this.sprite>=10) {
        this.sprite=0;
      }
    }
  }
  mostrar() {
    if (this.atacando==true) {
      image(yutsunataca[this.golpe], this.x, this.y);
    } else {
      image(yutsun[this.sprite], this.x, this.y);
    }
  }
  atacar() {
    if (keyIsDown(80) && this.atacando==false) { //80 es la tecla P, con esa atacas
      this.atacando=true;
      this.golpe=0;
      this.contadorgolpe=0;
    }

    if (this.atacando==true) {
      this.contadorgolpe++;

      if (this.contadorgolpe>=5) {
        this.golpe++;
        this.contadorgolpe=0;
      }

      if (this.golpe>=6) {
        this.atacando=false;
        this.golpe=0;
      }
    }
  }
}
