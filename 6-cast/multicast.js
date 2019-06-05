const { Subject, Observable } = require('rxjs');

const randomNumber$ = Observable.create(observer => {
    observer.next(Math.random())
});

const randomNumberSubject = new Subject(); // los subjects permiten multicasteo

const subscription1 = randomNumberSubject.subscribe(x => console.log(x));
const subscription2 = randomNumberSubject.subscribe(x => console.log(x));

randomNumber$.subscribe(randomNumberSubject);