
function addPromise(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(n1 + n2);
            } catch(err) {
                reject(err);
            }
        }, 3000);
    });
};

addPromise(1,2)
    .then(res => console.log(res))
    .catch(err => console.log(err));