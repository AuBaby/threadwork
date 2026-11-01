# Threadwork

The AU Baby hand-embroidery studio as a drop-in script.

## Lab page (inline)

```html
<div id="threadwork" data-mode="lab"></div>
<script src="https://aubaby.github.io/threadwork/threadwork.js" defer></script>
```

## Product page (modal)

```html
<button data-threadwork-open>Add hand embroidery</button>
<div id="threadwork" data-mode="product" data-product="{{ product.handle }}"></div>
<script src="https://aubaby.github.io/threadwork/threadwork.js" defer></script>
```

In product mode the studio is a modal over a dimmed page. Any element with `data-threadwork-open` opens it; the X, Escape, or a click on the dim area closes it. Add `data-open` to the div to start open. `window.Threadwork` exposes `{mode, product, root, open(), close()}`.

- `data-mode` says who is looking: `lab` (default) or `product`. A third value, `studio`, is the design view with the Advanced switch; the store never uses it.
- `data-product` is the product handle in product mode.

The studio renders inside a shadow root, so the store's CSS and the studio's never touch. Built from the studio source by `node build-embed.mjs`; do not edit `threadwork.js` by hand.
