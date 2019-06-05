
const observer = {
    next: (value) => console.log('next', value),
    error: (error) => console.log('error', error),
    complete: () => console.log('copmlete'),
};
