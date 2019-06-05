const { of } = require('rxjs');

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.subscribe(x => console.log('s1', x) );
numbers$.subscribe(x => console.log('s2', x) );