function createIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               { value: array[nextIndex++], done: false } :
               { done: true};
       }
    }
}


var iterator = createIterator(['I', 'am', 'Thor']);

console.log(it.next().value); // 'I'
console.log(it.next().value); // 'am'
console.log(it.next().value); // 'Thor'
console.log(it.next().done);  // true