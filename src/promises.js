const promise = new Promise((resolve, reject) => {
    if (true){
        resolve('It worked!!!');
    } else {
        reject('It crashed');
    }
})

promise.then(result=> console.log(result));