// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// Generate random number from 1 to 6
let userRandom = 0;
let pcRandom = 0;
let sum = 0;


userRandom = Math.floor((Math.random(userRandom) * 6) + 1);
console.log("user", userRandom);

pcRandom = Math.floor((Math.random(pcRandom) * 6) + 1);
console.log("pc", pcRandom);

if (userRandom > pcRandom) {
    console.log("User ha vinto");
} else if (pcRandom > userRandom) {
    console.log("PC ha vinto");
} else if (userRandom === pcRandom) {
    console.log("PARI");
}

