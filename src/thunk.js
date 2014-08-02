var timeoutThunk = (ms) =>
    (cb) => setTimeout(cb, ms);


timeoutThunk(3000)(function() {
    log("meow!");
});