// calcolare prezzo del biglietto in base al numero di km percorsi e allo sconto sull'età


//  chiedere chilometri da percorrere 

    let chilometri = parseInt(prompt("Quanti km vuoi percorrere?"));

    console.log(chilometri);

//  chiedere età utente

    let eta = parseInt(prompt("quanti anni hai?"));

    console.log(eta);

// calcolo prezzo con variabili (se under 18 anni -20%, se over 65 -40% , altrimenti prezzo base 0,21 centesimi al km)

    let prezzoNormale = chilometri * 0.21

    console.log(prezzoNormale);

    var prezzoFinale

    if (eta < 18 ){
        prezzoFinale = prezzoNormale - (prezzoNormale * .20);

    } else if (eta > 65) {
        prezzoFinale = prezzoNormale - (prezzoNormale * .40);

    } else {
        prezzoFinale = prezzoNormale
    }

    console.log(prezzoFinale)

    document.getElementById("text").innerHTML = "Il prezzo del tuo biglietto è di prezzoFinale €"

// output on screen del prezzo del biglietto (da sistemare con solo 2 decimalis)