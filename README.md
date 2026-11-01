# Threadwork

The AU Baby hand-embroidery studio as a drop-in script.

## Lab page (inline)

```html
<div id="threadwork" data-mode="lab"></div>
<script src="https://aubaby.github.io/threadwork/threadwork.js" defer></script>
```

## Product page (modal)

Only Sawa blankets have knits in the studio so far, so the block is wrapped in a title check; add other lines as their fabrics arrive.

```html
{% if product.title contains 'The Sawa Blanket' %}
<button data-threadwork-open hidden>Personalize with hand embroidery</button>
<div id="threadwork" data-mode="product" data-line="sawa" data-product="{{ product.handle }}" data-blanket="{{ product.title | split: ' - ' | last }}" data-variant="{{ product.selected_or_first_available_variant.id }}" data-title="{{ product.title | escape }}" data-url="{{ product.url | absolute_url }}"></div>
<script src="https://aubaby.github.io/threadwork/threadwork.js" defer></script>
{% endif %}
```

In product mode the studio is a modal over a dimmed page. Any element with `data-threadwork-open` opens it; the X, Escape, or a click on the dim area closes it. Add `data-open` to the div to start open. `window.Threadwork` exposes `{mode, product, root, open(), close()}`.

The modal's button is **Save embroidery**. Saving closes the modal and renders a summary card into `<div id="threadwork-summary"></div>` (put it right after the trigger): preview, text, font, thread, letter count and price, with Modify and Remove, followed by the script's own "Add to cart · $total" button (the blanket price comes from `data-price`, in cents). While a card is showing, the trigger and the theme's own `.product-buy-buttons--root` are hidden; Remove or a successful add brings them back. The add posts the blanket plus the matching "N Letters" variant of Custom Hand Embroidery with the `_for`, `_link`, `Embroidery Text`, `Thread Color`, `Font` and `_image` properties, uploads the render snapshot, then opens the cart drawer.

- `data-mode` says who is looking: `lab` (default) or `product`. A third value, `studio`, is the design view with the Advanced switch; the store never uses it.
- `data-product` is the product handle in product mode.
- `data-variant`, `data-title`, `data-url`: the product's variant id, title and canonical URL. Add to Cart adds that variant plus the matching "N Letters" variant of Custom Hand Embroidery with the `_for`, `_link`, `Embroidery Text`, `Thread Color`, `Font` and `_image` properties, uploads a snapshot of the render for the cart, then opens the cart drawer.
- `data-flow` picks how the modal ends: `save` (default: Save embroidery → summary card → one Add to cart), `direct` (Add to Cart inside the modal, no card), or `ab` (each browser is assigned one at random and keeps it). The bucket is written to the embroidery line as a hidden `_flow` property, so orders can be counted per flow in Shopify. `?threadwork_flow=save|direct` on any product URL overrides it for testing. The script also fires `threadwork:open`, `threadwork:saved` and `threadwork:added` window events (and `dataLayer` pushes when a dataLayer exists) with the flow and product.
- `data-line` names the product line (`sawa`); fabrics in the studio are tagged with their line so same-named colours never cross over.
- `data-blanket` is the product's blanket colour in product mode: Pink Quartz, Henna, Moon Stone, Sky Blue or Citron (case and spacing don't matter). The blanket row is hidden there; without the flag the default blanket is used.

The studio renders inside a shadow root, so the store's CSS and the studio's never touch. Built from the studio source by `node build-embed.mjs`; do not edit `threadwork.js` by hand.
