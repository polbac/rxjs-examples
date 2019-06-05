const { from } = require('rxjs');

const numbers$ = from([1, 2, 3, 4, 5]);

numbers$.subscribe(x => console.log(x) );