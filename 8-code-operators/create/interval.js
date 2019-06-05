const { interval } = require('rxjs');

const numbers$ = interval(1000);

numbers$.subscribe(x => console.log(x) );