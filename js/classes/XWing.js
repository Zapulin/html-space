class XWing extends CazaEstelar {
    constructor(numeroSerie, vidaMax, fuerzaAtaque, r2d2) {
        super(numeroSerie, vidaMax, fuerzaAtaque);
        this.r2d2 = r2d2;
        this.escudo = 10;
        this.escudoMax = 10;
    }

    reparar () {
        let sobrante;
        let XWingVida = this.vidaActual;
        let XWingEscudo = this.escudo;

        if (this.r2d2){
            if (this.vidaActual == this.vidaMax) {
                this.escudo += 4;
                if (this.escudo > this.escudoMax) {
                    this.escudo = this.escudoMax;
                }
            } else {
                this.vidaActual += 4;
                if (this.vidaActual > this.vidaMax) {
                    sobrante = this.vidaActual - 20;
                    this.vidaActual = this.vidaMax;
                    this.escudo += sobrante;
                    if (this.escudo > this.escudoMax) {
                        this.escudo = this.escudoMax;
                    }
    
                }
            }
        } else {
            this.vidaActual += 4;

            if (this.vidaActual > this.vidaMax) {
                this.vidaActual = this.vidaMax;
            }
        }

        XWingVida = this.vidaActual - XWingVida;
        XWingEscudo = this.escudo - XWingEscudo;
        gamePanel.innerHTML = `Has recuperado ${XWingVida} puntos de vida y ${XWingEscudo} puntos de escudo.\n`;
    }
}