// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// LIST E-MAILS 
const emailsArray = ["mariorossi@gmail.com", "lawrenceedulian@gmail.com","rossimario@yahoo.it", "mariorossi@hotmail.it"];

// ASK USER EMAIL
const userEmail = prompt("Type your e-mail");
console.log(userEmail);

let access = false;
for (let i = 0; i < emailsArray.length; i++) {
    const checkEmail = emailsArray[i];
    if (checkEmail === userEmail) {
        access = true;
    }
    console.log(userEmail, checkEmail, access);
}

if (access) {
    alert ("Access Granted");
} else {
    alert ("Access Denied");
}