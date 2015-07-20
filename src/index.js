module.exports = fastSlice;


function fastSlice(array, offset) {
    var length, newLength, i, il, result, j;

    offset = offset || 0;

    length = array.length;
    i = offset - 1;
    il = length - 1;
    newLength = length - offset;
    result = new Array(newLength <= 0 ? 0 : newLength);
    j = 0;

    while (i++ < il) {
        result[j++] = array[i];
    }

    return result;
}
