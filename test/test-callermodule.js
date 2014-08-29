'use strict';

var test = require('tape'),
    callermodule = require('../lib');

test('test', function (t) {

    t.test('found module', function (t) {
        t.plan(1);

        t.strictEqual(callermodule(), 'tape', 'found module name.');
    });

});
