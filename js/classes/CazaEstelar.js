class CazaEstelar {
    constructor(numeroSerie, vidaMax, fuerzaAtaque) {
        this.numeroSerie = numeroSerie;
        this.vidaActual = vidaMax;
        this.vidaMax = vidaMax;
        this.fuerzaAtaque = fuerzaAtaque;
    }

    disparar(cazaEstelar) {
        const daño = this.fuerzaAtaque + Math.floor(Math.random() * 10) + 1;
        cazaEstelar.vidaActual -= daño;
        gamePanel.innerHTML = `Se han producido: ${daño} puntos de daño\n`;

        if (cazaEstelar.vidaActual <= 0) {
            gamePanel.innerHTML += `El TieFighter[${cazaEstelar.numeroSerie}] ha muerto!\n`;
        } else {
            gamePanel.innerHTML += `Vida restante  del TieFighter[${cazaEstelar.numeroSerie}] = ${cazaEstelar.vidaActual}\n`;
        }

    }
}