var tape = require("tape"),
    fastSlice = require("../src/index");


tape("fastSlice(value: ArrayLike [, offset: Number]) should copy array with the given offset", function(assert) {
    var array = [0, 1, 2];

    assert.deepEqual(fastSlice(array), [0, 1, 2]);
    assert.deepEqual(fastSlice(array, -1), [0, 1, 2]);
    assert.deepEqual(fastSlice(array, 1), [1, 2]);
    assert.deepEqual(fastSlice(array, 2), [2]);
    assert.deepEqual(fastSlice(array, 3), []);
    assert.deepEqual(fastSlice(array, 4), []);

    assert.end();
});
