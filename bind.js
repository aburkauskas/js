var arr1 = [1,2,3];

var arr5 = makeForEach(arr1, bindDelimiter(1, delimiterFn));

function bindDelimiter(delimiter, fn) {
    fn.bind(this, delimiter);
    return fn;
} 