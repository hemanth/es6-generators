function * menu() {
    while (true) {
        try {
            var val = yield null;
            log('I ate: ' + val);
        } catch (e) {
            log('Good, now pay the bill :P');
        }
    }
}

var meEat = menu();

meEat.next();

meEat.next("Poori");

meEat.next("Pizza");

meEat.
throw (new Error("Burp!"));