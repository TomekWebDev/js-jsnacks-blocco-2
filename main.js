// JSnacks

// // Esercizio 1

// let numero = parseInt(prompt("Inserisci un numero"))

// if(numero % 2 == 0){
//     console.log(numero);
// }
// else{
//     console.log((numero + 1));
// }


// Esercizio 2

let nomi = ["Obi-Wan", "Luke", "Han", "Jar-Jar", "C3", "Jabba", "Padmè", "Qui-Gon"];

let cognomi = ["Kenobi", "Skywalker", "Solo", "Binks", "P8", "The Hut", "Amidala", "Jinn"]

let nomeRandom = Math.floor(Math.random() * nomi.length);
let cognomeRandom = Math.floor(Math.random() * cognomi.length);


console.log((nomeRandom, nomi[nomeRandom]) + " " + (cognomeRandom, cognomi[cognomeRandom]));

