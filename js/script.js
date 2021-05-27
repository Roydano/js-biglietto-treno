// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).








// Inserisci il numero di km
var km = parseInt( prompt ('Inserisci il numero di kilometri che devi percorrere'));
// console.log(km);

// inserisci l'età del passeggero
var eta = parseInt( prompt ('Inserisci l\'età del passeggero '));
// console.log(eta);

// calcolo per il prezzo del biglietto
var prezzo = km * 0.21;


// sconti applicati in base all'età
if(eta < 18){
    prezzo = prezzo * 0.8;
} if(eta > 65){
    prezzo = prezzo * 0.6;
} else{
    prezzo = prezzo;
}
// console.log(prezzo);

// restituzione cifra su schermo con due decimali
document.getElementById("price").innerHTML = 
"Il prezzo del biglietto è: " + prezzo.toFixed(2) + '€';