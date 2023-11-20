/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.*/


// Selezione dell'input user
const inputNome = document.querySelector(".nomeuser");

// Selezione del bottone invio dati
const sendButton = document.getElementById("send");

let nomeUser = ""

console.log(inputNome);

console.log("valore di input", inputNome.value);


sendButton.addEventListener("click",

    function () {
        document.getElementById("mio_id").innerHTML= "nome del passeggero"  + nomeUser  + "Il prezzo del tuo biglietto è:"+ risultato  +"€";
        nomeUser = inputNome.value;
        console.log(nomeUser);

        kmUser = userKm.value;
        console.log(kmUser);

        etaUser = userAge.value;
        console.log(etaUser);

        if(userAge < 18) {
            //console.log ("Il prezzo scontato del 20% per i minorenni è:", moltiplicazione - sconto20 , "€");
            risultato= moltiplicazione - sconto20 ;
        
        
        } else if (userAge > 65) {
           // console.log("Il prezzo scontato del 40% per gli over 65 è:", moltiplicazione - sconto40 , "€");
           risultato=  moltiplicazione - sconto40  ;
        
        } else {
            //console.log("Il prezzo senza sconto è:", moltiplicazione ,"€");
            risultato= moltiplicazione ;
        }
    }
);



// Chiediamo a User quanti KM vuole percorrere?
/*const userKm = parseInt(prompt("Quanti KM vuoi percorrere?"));
console.log (userKm);*/
const userKm = document.querySelector(".kmuser");

let kmUser = ""

console.log(userKm);

console.log("valore di input", userKm.value);




// Quanti anni hai?
/*const userAge = parseInt(prompt("Quanti anni hai?"));
console.log (userAge);*/
const userAge = document.querySelector(".etauser");

let etaUser = ""

console.log(userAge);

console.log("valore di input", userAge.value);






// Prezzo definito Euro-Km 0.21 €
const kmEuro = 0.21;


// Sconto definito per i minorenni 20%
const userMinorenni = 20;

// Sconto definito per gli anziani 40%
const userAnziani = 40;


// Calcolo prezzo del viaggio
const moltiplicazione = userKm * kmEuro;
/*console.log("Il prezzo senza sconto è:", moltiplicazione ,"€");*/

// Calcolo prezzo viaggio minorenni
const sconto20 = moltiplicazione * userMinorenni / 100;
/*console.log("Il prezzo scontato del 20% per i minorenni è:", moltiplicazione - sconto20 , "€");*/

// Calcolo prezzo viaggio maggiorenni
const sconto40 = moltiplicazione * userAnziani / 100;
/*console.log("Il prezzo scontato del 40% per gli over 65 è:", moltiplicazione - sconto40 , "€");*/

let risultato ="";

// Confronto prezzo età

/*if(userAge < 18) {
    //console.log ("Il prezzo scontato del 20% per i minorenni è:", moltiplicazione - sconto20 , "€");
    risultato= moltiplicazione - sconto20 ;


} else if (userAge > 65) {
   // console.log("Il prezzo scontato del 40% per gli over 65 è:", moltiplicazione - sconto40 , "€");
   risultato=  moltiplicazione - sconto40  ;

} else {
    //console.log("Il prezzo senza sconto è:", moltiplicazione ,"€");
    risultato= moltiplicazione ;
}*/



// Output per lo User 
/*document.getElementById("mio_id").innerHTML= "Il prezzo del tuo biglietto è:"+ risultato  +"€";*/


