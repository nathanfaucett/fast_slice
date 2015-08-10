var isNumber = require("is_number");


module.exports = fastSlice;


function fastSlice(array, offset) {
    var length, newLength, i, il, result, j;

    offset = isNumber(offset) ? (offset <= 0 ? 0 : offset) : 0;

    length = array.length;
    i = offset - 1;
    il = length - 1;
    newLength = length - offset;
    result = new Array(newLength);
    j = 0;

    while (i++ < il) {
        result[j++] = array[i];
    }

    return result;
}
