// JSnacks


// // Esercizio 1

// let numero = parseInt(prompt("Inserisci un numero"))

// if(numero % 2 == 0){
//     console.log(numero);
// }
// else{
//     console.log((numero + 1));
// }


// // Esercizio 2

// pescare cose a caso da  due array diverse e unirle

// let nomi = ["Obi-Wan", "Luke", "Han", "Jar-Jar", "C3", "Jabba", "Padmè", "Qui-Gon"];

// let cognomi = ["Kenobi", "Skywalker", "Solo", "Binks", "P8", "The Hut", "Amidala", "Jinn"]

// let nomeRandom = Math.floor(Math.random() * nomi.length);
// let cognomeRandom = Math.floor(Math.random() * cognomi.length);


// console.log((nomeRandom, nomi[nomeRandom]) + " " + (cognomeRandom, cognomi[cognomeRandom]));


// // Esercizio 3


// let numeri = ["3", "1", "3", "1", "3", "1", "3", "1", "3"]

// let somma = 0;

// //ciclo impostato per tracciare gli indici dispari

// for(i = 1; i < numeri.length; i += 2){

//         somma += parseInt(numeri[i])
// }

// console.log(somma);



// Esercizio 4

let array1 = ["a", "b", "c", "d", "e"]

let array2 = ["1", "2", "3"]

console.log("array1 has ", array1.length, " elements");
console.log("array2 has ", array2.length, " elements");


if(array1.length < array2.length){
    let difference = array2.length - array1.length;
    for(i = 0; i < difference; i++){
        array1.push("test")
    }
    console.log("array1 was smaller and now has ", array1.length, " elements: ", array1);
}
else if(array2.length < array1.length){
    let difference = array1.length - array2.length;
    for(i = 0; i < difference; i++){
        array2.push("test")
    }
    console.log("array2 was smaller and now has ", array2.length, " elements: ", array2);
}
else{
    console.log("already the same");
}



