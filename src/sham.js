function theAnswer() {
    var state = 0;
    return {
        next: function() {
            switch (state) {
                case 0:
                    state = 1;
                    return {
                        value: 42, // The yielded value.
                        done: false
                    };
                case 1:
                    return {
                        value: undefined,
                        done: true
                    };
            }
        }
    };
}

var ans = theAnswer();

log(ans.next().value);

log(ans.next().done);