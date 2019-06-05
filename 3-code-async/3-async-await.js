
function addAsync(n1, n2) {
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

async function init() {
    const res = await addAsync(1, 2);
    console.log(res);
}

init();
