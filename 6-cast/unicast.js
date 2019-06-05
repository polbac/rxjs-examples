const { Observable } = require('rxjs');

const randomNumber$ = Observable.create(observer => {
    observer.next(Math.random())
});

const subscription1 = randomNumber$.subscribe(x => console.log(x));
const subscription2 = randomNumber$.subscribe(x => console.log(x));