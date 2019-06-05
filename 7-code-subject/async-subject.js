const { AsyncSubject } = require('rxjs');

const numbers$ = new AsyncSubject();

numbers$.subscribe(value => console.log('value', value));

numbers$.next(1);
numbers$.next(2);
numbers$.next(3);

numbers$.complete();