var tape = require("tape"),
    fastSlice = require("../src/index");


tape("fastSlice(value: ArrayLike [, offset: Number]) should copy array with the given offset", function(assert) {
    assert.deepEqual(fastSlice([0, 1, 2, 3], 1), [1, 2, 3]);
    assert.end();
});
