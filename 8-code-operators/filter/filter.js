const { interval } = require('rxjs');
const { filter } = require('rxjs/operators');

const numbers$ = interval(1000);

numbers$
    .pipe(filter(x => x % 2 === 0 && x !== 0))
    .subscribe(x => console.log(`Numeros pares: ${x}`) ); 

numbers$
    .pipe(filter(x => x % 2 !== 0))
    .subscribe(x => console.log(`Numeros impares: ${x}`) ); 
