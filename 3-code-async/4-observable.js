const { Observable } =  require('rxjs');

const addObservable = (n1, n2) => Observable.create((observer) => {
    try {
        setTimeout(() => {
            observer.next(n1 + n2)
        }, 3000);
    } catch(err) {
        observer.error(err)
    }

    observer.complete();
});

addObservable(1, 1)
    .subscribe({
        next: x => console.log(x),
        error: err => console.log(err),
        complete: () => console.log('complete'),
    });