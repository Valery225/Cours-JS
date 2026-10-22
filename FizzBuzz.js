for (let nombre = 1; nombre <= 30; nombre++) 
    if (nombre % 3 === 0 && nombre % 5 === 0) {
        console.log("FizzBuzz");
    } else if (nombre % 3 === 0) {
        console.log("Fizz");
    } else if (nombre % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(nombre);
}

// Boucle de 1 à 30 pour afficher Fizz, Buzz ou FizzBuzz selon les conditions.
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}