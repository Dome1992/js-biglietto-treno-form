function calcolaPrezzo() {
    const kmInput = document.getElementById('kmInput');
    const ageInput = document.getElementById('ageInput');
    const output = document.getElementById('output');

    const km = parseFloat(kmInput.value);
    const age = parseInt(ageInput.value);

    if (isNaN(km) || isNaN(age)) {
        output.innerText = 'Inserisci un valore valido per i chilometri e l\'età.';
        return;
    }

    const prezzoBase = km * 0.21;

    let prezzoFinale = prezzoBase;

    if (age < 18) {
        // Applica lo sconto del 20% per i minorenni
        prezzoFinale *= 0.8;
    } else if (age >= 65) {
        // Applica lo sconto del 40% per gli over 65
        prezzoFinale *= 0.6;
    }

    // Formatta il prezzo con massimo due decimali
    prezzoFinale = prezzoFinale.toFixed(2);

    output.innerText = `Il prezzo del biglietto è: ${prezzoFinale} €`;
}
