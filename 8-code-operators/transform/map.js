const { interval } = require('rxjs');
const { map } = require('rxjs/operators');

const numbers$ = interval(1000);

numbers$
    .pipe(map(x => x * 2))
    .subscribe(x => console.log(x) ); 

