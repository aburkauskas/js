function closureBuilder() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push((function(j) {
            return function() {
                console.log(j);
            }
        }(i)))
    }
    return arr;
}

var fs = closureBuilder();

fs[0]();
fs[1]();
fs[2]();