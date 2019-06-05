
function addCallback(n1, n2, cb) {
    setTimeout(() => {
        cb(n1 + n2)
    }, 3000);
   
};

addCallback(1, 2, (value) => console.log(value));