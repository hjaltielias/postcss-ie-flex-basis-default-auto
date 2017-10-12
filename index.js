var postcss = require('postcss');

module.exports = postcss.plugin('postcss-ie-flex-basis-default-auto', function (opts) {
    opts = opts || {};

    return function (root, result) {
        root.walkDecls('-ms-flex', declaration => {
            const match = declaration.value.match(/^\s*(\d+)(?:\s+(\d+))?\s*$/);

            if (match) {
                declaration.value = match[1] + (match[2] ? ' ' + match[2] : ' 0') + ' auto';
            }
        });
    };
});
