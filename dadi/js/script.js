// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// Generate random number from 1 to 6
let sum = 0;

const userRandomNumbers = [];
for (i = 1; i <= 6; i++) {
    let userRandom = Math.floor((Math.random(userRandomNumbers) * i) + 1);
    console.log("user", userRandom);
    sum += userRandom;
    console.log(sum);
}


const pcRandomNumbers = [];
for (i = 1; i <=6; i++) {
    let pcRandom = Math.floor((Math.random(pcRandomNumbers) * i) + 1);
    console.log("pc", pcRandom);
}
