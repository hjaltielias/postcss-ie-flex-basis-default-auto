var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('morph -ms-flex with a single number declaration', () => {
    return run('a{ -ms-flex: 1; }', 'a{ -ms-flex: 1 0 auto; }', { });
});

it('morph -ms-flex with a double number declaration', () => {
    return run('a{ -ms-flex: 0 1; }', 'a{ -ms-flex: 0 1 auto; }', { });
});

it('don\'t morph -ms-flex with triple value declaration', () => {
    return run('a{ -ms-flex: 1 1 10px; }', 'a{ -ms-flex: 1 1 10px; }', { });
});
