function * powPuff() {
    return Math.pow((yield "x"), (yield "y"));
}

var puff = powPuff();

puff.next();

puff.next(2);

log(puff.next(3).value); // Guess ;)