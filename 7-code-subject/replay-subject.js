const { ReplaySubject } = require('rxjs');

const numbers$ = new ReplaySubject(2);

numbers$.next(0);
numbers$.next(1);
numbers$.next(2);
numbers$.next(3);

numbers$.subscribe(value => console.log('subscription', value));