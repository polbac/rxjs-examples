
 export function *giveMeNumbers() {
    yield 1;
    yield 2;
}

const invokeGiveMeNumbers = giveMeNumbers.call();
invokeGiveMeNumbers.next(); // 1
invokeGiveMeNumbers.next(); // 2

