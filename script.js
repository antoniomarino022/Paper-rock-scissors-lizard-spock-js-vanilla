// PUNTO I SEGUENTI ELEMENTI

let btnCarta = document.getElementById('carta');
let btnForbice = document.getElementById('forbice');
let btnSasso = document.getElementById('sasso');
let btnSpock = document.getElementById('spock');
let btnLizard = document.getElementById('lizard');
let risultato = document.getElementById('result')

// AGGIUNGO DEGLI ELEMENTI CHE SI ATTIVERANNO LA FUNZIONE AL CLICK
btnCarta.addEventListener('click', function() {
    partita("paper");
});

btnForbice.addEventListener('click', function() {
    partita("scissor");
});

btnSasso.addEventListener('click', function() {
    partita("rock");
});

btnSpock.addEventListener('click', function() {
    partita("spock");
});

btnLizard.addEventListener('click', function() {
    partita("lizard");
});



function partita(utente){

    // ARRAY DELLE POSSIBILI OPZIONI DEL PC
    let pc = ['paper','scissor','rock','lizard','spock'];

    // ASSEGNO DEI NUMERI CASUALI AL PC COMPRESO TRA 0 E LA LUNGHEZZA DELL'ARRAY
    let sceltaPC = pc[Math.floor(Math.random() * pc.length)];

    // SE LA SCELTA DEL PC è UGUALE A QUELLA DELL'UTENTE ALLORA è PAREGGIO
    if(sceltaPC === utente){
        risultato.textContent='pareggio,il pc ha scelto : '+ sceltaPC
    }
    // SEGUENZA DI VITTORIA
    else if(sceltaPC === 'paper' && utente === 'scissor'||
            sceltaPC === 'scissor' && utente === 'rock'||
            sceltaPC === 'rock' && utente === 'paper'||
            sceltaPC === 'rock' && utente === 'spock'||
            sceltaPC === 'lizard' && utente === 'spock'||
            sceltaPC === 'spock' && utente === 'scissor'||
            sceltaPC === 'scissor' && utente === 'lizard'||
            sceltaPC === 'lizard' && utente === 'paper'||
            sceltaPC === 'paper' && utente === 'spock'||
            sceltaPC === 'spock' && utente === 'sasso'

    ){
        risultato.textContent='hai vinto,il pc ha scelto : '+ sceltaPC }
        // SENNO HAI PERSO
    else{
        risultato.textContent='hai perso,il pc ha scelto : '+ sceltaPC
    }
};

