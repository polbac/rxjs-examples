const { Observable } =  require('rxjs');

const giveLetters = Observable.create((observer) => {
    observer.next('a');
    observer.next('b');
    setTimeout(() => observer.next('c'), 3000);
});

const subscription = giveLetters
    .subscribe(
        value => console.log(value)
    );

subscription.unsubscribe();