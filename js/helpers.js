function status () {
    return `XWing nºSerie [${player.numeroSerie}]\nVida [${player.vidaActual}]  Escudo [${player.escudo}]\nEnemigos restantes [${opponents.length}]`;
}

function enemyTurn () {
    gamePanel.innerHTML += '------------------\n';
    if (opponents[0].escogerAccion() === 1) {
        opponents[0].disparar(player);
    } else {
        opponents[0].reparar();
    }
} 
   

function game () {
    if (gameOn === true) {
        if (opponents.length === 0) {
            alert("No quedan mas Enemigos\nHas ganado!");
            gamePanel.innerHTML = "";
            gameOn = false;
        } else {
            if (player.vidaActual <= 0) {
                alert("No quedan mas puntos de vida\nHas perdido!");
                gamePanel.innerHTML = "";
                gameOn = false;
            }
        }

    } else {
        gamePanel.innerHTML = `Debes iniciar una partida antes.`;
    }
}