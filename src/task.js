function hello() {
    var { spawn, sleep } = task;
    spawn(function() {
        log("Hello...");
        yield sleep(1000);
        log("...world!");
    });
}

hello();