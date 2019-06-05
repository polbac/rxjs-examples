const { Observable } =  require('rxjs');

const myObservable = Observable.create((observer) => {
    observer.next('Hello World');

    setTimeout(() => observer.next('Hello World again!'), 2000);

    try {
        //observer.next(missingVar);
    } catch(err) {
        observer.error(err);
    }

    observer.complete();
    
});

/* myObservable
    .subscribe(
        value => console.log('value', value),
        error => console.log('error', error),
        () => console.log('complete')

    ); */