function * fibonacci() {
    var [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (fib of fibonacci()) {
    if (fib === 8)
        break;
    log(fib);
}