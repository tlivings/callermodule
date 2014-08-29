'use strict';

var caller = require('caller'),
    path = require('path'),
    fs = require('fs');

module.exports = function callermodule() {

    function lookup(dir) {
        var file, parent;

        file = path.join(dir, 'package.json');

        if (fs.existsSync(file)) {
            return require(file).name;
        }

        parent = path.dirname(dir);

        if (parent !== dir) {
            return lookup(parent);
        }

        return undefined;
    }

    return lookup(path.dirname(caller()));
};
