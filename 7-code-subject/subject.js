const { Subject } = require('rxjs');

const numbers$ = new Subject(0);

numbers$.subscribe(value => console.log('subscription1', value));

numbers$.next(1);
numbers$.next(2);

numbers$.subscribe(value => console.log('subscription2', value));

numbers$.next(3);

