'use strict';

var path = require('path'),
    fs = require('fs'),
    caller = require('caller');

module.exports = function callermodule() {
    return lookup(path.dirname(caller(2)));
};

function lookup(dir) {
    var file, parent, pkg;

    file = path.join(dir, 'package.json');

    if (fs.existsSync(file)) {
        pkg = require(file);

        return {
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
            repository: typeof pkg.repository === 'object' ? pkg.repository.url : pkg.repository
        };
    }

    parent = path.dirname(dir);

    if (parent !== dir) {
        return lookup(parent);
    }

    return undefined;
}
