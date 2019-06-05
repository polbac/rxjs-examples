const { BehaviorSubject } = require('rxjs');

const numbers$ = new BehaviorSubject();

numbers$.next(0);
numbers$.next(1);
numbers$.next(2);

numbers$.next(3);
numbers$.subscribe(value => console.log('subscription1', value));
numbers$.subscribe(value => console.log('subscription2', value));

