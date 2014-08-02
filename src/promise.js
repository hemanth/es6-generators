var promise = new Promise(function(resolve, reject) {
    // Some async...
    if (1 < 2) {
        resolve("It worked!");
    } else {
        reject(Error("It did not work :'("));
    }
});

promise.then(function(result) {
    log(result); // "It worked!"
}, function(err) {
    log(err); // Error: "It don not work :'("
});