var func = function() {
    console.log('hi');
    return 'hi again';
}

function log(a) {
    console.log(a());
}

log(func);