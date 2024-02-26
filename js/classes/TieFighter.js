class TieFighter extends CazaEstelar {
    constructor(numeroSerie, vidaMax, fuerzaAtaque) {
        super(numeroSerie, vidaMax, fuerzaAtaque);
    }

    disparar(XWing) {
        let daño = this.fuerzaAtaque + Math.floor(Math.random() * 10) + 1;
        let XWingVida = XWing.vidaActual;
        let XWingEscudo = XWing.escudo;
        gamePanel.innerHTML += `TieFigther[${opponents[0].numeroSerie}] dispara con ${daño} puntos de daño.\n` 

        if (XWing.vidaActual == XWing.vidaMax) {
            XWing.escudo -= daño;
            if (XWing.escudo < 0) {
                daño = -XWing.escudo;
                XWing.escudo = 0;
                XWing.vidaActual -= daño;
            }
        } else {
            XWing.vidaActual -= daño;
        }

        XWingVida = XWingVida - XWing.vidaActual;
        XWingEscudo = XWingEscudo - XWing.escudo;
        gamePanel.innerHTML += `Has perdido ${XWingVida} puntos de vida y ${XWingEscudo} puntos de escudo.\n`;

    }

    reparar() {
        let tieFigtherVida = this.vidaActual;

        this.vidaActual += 4;
        if(this.vidaActual > this.vidaMax) {
            this.vidaActual = this.vidaMax;
        }

        tieFigtherVida = this.vidaActual - tieFigtherVida;
        gamePanel.innerHTML += `El enemigo ha reparado ${tieFigtherVida} puntos de vida.\n`;
        gamePanel.innerHTML += `Vida actual del TieFigther = ${this.vidaActual}\n`;
    }

    escogerAccion() {
        return Math.floor(Math.random() * 2) + 1;
    }


}