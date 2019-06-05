
const { Observable } =  require('rxjs');

export const giveMeNumbers = Observable.create(function(observer) {
    observer.next(1);
    observer.next(2);
});

giveMeNumbers.subscribe(x => console.log(x));