# Threadwork

The AU Baby hand-embroidery studio as a drop-in script. Paste this where the studio should appear:

```html
<div id="threadwork" data-mode="lab"></div>
<script src="https://dplusplus1024.github.io/threadwork/threadwork.js" defer></script>
```

- `data-mode` is `lab` (the embroidery lab page) or `product` (a product page).
- `data-product` is the product handle when `data-mode="product"`, e.g. `data-product="{{ product.handle }}"` in Liquid.

The studio renders inside a shadow root, so the store's CSS and the studio's never touch. `window.Threadwork` exposes `{mode, product, root}`.

Built from the studio source by `node build-embed.mjs`; do not edit `threadwork.js` by hand.
