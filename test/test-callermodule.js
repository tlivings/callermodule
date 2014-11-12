'use strict';

var test = require('tape'),
    callermodule = require('../lib');

test('test', function (t) {

    t.test('found module', function (t) {
        var pkg, tapepkg;

        tapepkg = require('tape/package.json');

        t.plan(5);

        t.doesNotThrow(function () {
            pkg = callermodule();
        });

        t.strictEqual(pkg.name, tapepkg.name, 'found module name.');
        t.strictEqual(pkg.version, tapepkg.version, 'found module version.');
        t.strictEqual(pkg.description, tapepkg.description, 'found module description.');
        t.strictEqual(pkg.repository, tapepkg.repository.url, 'found module repo.');
    });

});
