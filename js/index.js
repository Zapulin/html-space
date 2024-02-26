let player, opponents;
let gameOn = false;
const statusPanel = document.getElementById('statusPanel');
const gamePanel = document.getElementById('gamePanel');

document.getElementById('iniciar').addEventListener('click', () => {
    player = new XWing (document.getElementById('numSerie').value, 20, 4, document.getElementById('r2d2').checked);

    opponents = [];
    let opponent;
    for (let i=1; i<6;i++){
        opponent = new TieFighter (i,10,2);
        opponents.push(opponent);
    }
    gameOn = true;
    statusPanel.innerHTML = status();        
    gamePanel.innerHTML = `Partida iniciada!.`;
    
    console.log(opponents);
    console.log(player);


});

document.getElementById('disparar').addEventListener('click', () => {    
    if(gameOn === true){
        player.disparar(opponents[0]);

        if (opponents[0].vidaActual <= 0) {
            opponents.shift(0);
        }

        if (opponents.length > 0) {
            enemyTurn();
        }
        statusPanel.innerHTML = status();

    } else {
        statusPanel.innerHTML = "";
    } 
}); 

document.getElementById('reparar').addEventListener('click', () => {        
    if(gameOn === true){
        player.reparar();
        enemyTurn();
        statusPanel.innerHTML = status();   

    }
});


