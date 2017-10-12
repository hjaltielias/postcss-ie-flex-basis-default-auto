# PostCSS Ie Flex Basis Default Auto [![Build Status][ci-img]][ci]

[PostCSS] plugin that finds all `-ms-flex: <number> [number]` declarations (e.g. from autoprefixer) and appends `auto` to it, overriding the problematic 0px flex basis in IE. Note that 0px and auto are not the same, but this is still the better fallback for almost all cases. This is also a very specific thing for a very specific project and is probably bad so don't use it.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/hjaltielias/postcss-ie-flex-basis-default-auto.svg
[ci]:      https://travis-ci.org/hjaltielias/postcss-ie-flex-basis-default-auto

```css
.foo {
    /* Input example */
    -ms-flex: 1;
    flex: 1;
}
```

```css
.foo {
  /* Output example */
  -ms-flex: 1 0 auto;
  flex: 1;
}
```

## Usage

```js
postcss([ require('postcss-ie-flex-basis-default-auto') ])
```

See [PostCSS] docs for examples for your environment.
