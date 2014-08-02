function * Counter() {
    var n = 0;
    while (1 < 2) {
        yield n;
        n = n + 1;
    }
}

var CountIter = Counter();

log(CountIter.next().value);
// Would result in { value: 0, done: false }

// Again 
log(CountIter.next().value);
//Would result in { value: 1, done: false }