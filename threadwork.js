/* Threadwork embroidery studio — built from dist/index.html by build-embed.mjs. Do not edit by hand. */
(()=>{'use strict';
const SCRIPT=document.currentScript;
const ASSETS=new URL('./assets/',SCRIPT&&SCRIPT.src||location.href).href;
const FONTS="@font-face{font-family:'Sofia Pro';src:url('./assets/Sofia-Pro-Regular.woff2') format('woff2');font-display:swap}\n    @font-face{font-family:'Gopher Bold';src:url('./assets/Gopher-Bold.woff2') format('woff2');font-display:swap}\n    @font-face{font-family:Pacifico;src:url('./assets/Pacifico-Regular.ttf') format('truetype');font-display:block}\n    @font-face{font-family:Damion;src:url('./assets/Damion-Regular.ttf') format('truetype');font-display:block}\n    @font-face{font-family:'Petit Formal Script';src:url('./assets/PetitFormalScript-Regular.ttf') format('truetype');font-display:block}\n    @font-face{font-family:Sacramento;src:url('./assets/Sacramento-Regular.ttf') format('truetype');font-display:block}\n    @font-face{font-family:'Boucherie Cursive';src:url('./assets/Boucherie-Cursive.ttf') format('truetype');font-display:block}\n    @font-face{font-family:'Espiritu Script';src:url('./assets/Espiritu-Script.otf') format('opentype');font-display:block}";
const CSS="\n    /* The AU Baby store's own UI faces (Sofia Pro, Gopher), copied from its theme; licensed to the store, not open source. */\n    :host{--ink:#293d35;--muted:#80877d;--paper:#f5f3ed;--border:#dddcd3;--accent:#395c4b}\n    *{box-sizing:border-box}:host{display:block;margin:0;background:var(--paper);color:var(--ink);font:14px/1.5 'Sofia Pro',Helvetica,Arial,sans-serif}button,input{font:inherit}button{cursor:pointer}button:focus-visible,input:focus-visible,a:focus-visible{outline:2px solid #476a55;outline-offset:5px}button{color:inherit}svg{display:block}button svg{pointer-events:none}\n    .shell{max-width:1500px;margin:auto;padding:28px 52px 20px}.shell:not([data-mode=studio]) .corner{display:none}.card{position:relative}.close-modal{display:none;position:absolute;top:-11px;right:-11px;width:34px;height:34px;border-radius:50%;border:1px solid #8f8c82;background:#fffdf8;box-shadow:0 3px 10px #1b1a1830;color:var(--ink);font-size:24px;line-height:1;place-items:center;padding:0 0 3px;transition:transform .18s ease}.close-modal:hover{transform:scale(1.08)}.shell[data-mode=product]{position:fixed;inset:0;z-index:2147483647;max-width:none;margin:0;padding:24px 52px;background:#2b2a289e;display:flex;align-items:flex-start;overflow:auto}.shell[data-mode=product][hidden]{display:none}.shell[data-mode=product][popover]{width:auto;height:auto;max-width:none;max-height:none;margin:0;border:0;color:inherit;inset:0}.shell[data-mode=product] .card{width:min(1396px,100%);margin:0 auto}.shell[data-mode=product] .studio{border-color:#8f8c82;box-shadow:0 24px 60px #1b1a1840}.shell[data-mode=product] .close-modal{display:grid}.shell[data-mode=product] #fabricGroup,.shell[data-mode=product] #productGroup{display:none}.product-select{width:100%;height:38px;margin-top:2px;padding:0 32px 0 11px;border:1px solid var(--border);border-radius:7px;background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%235a6358' stroke-width='1.4'/%3E%3C/svg%3E\") no-repeat right 12px center;font:inherit;font-size:13px;color:#293d35;appearance:none;-webkit-appearance:none;cursor:pointer}.product-select:focus{outline:none;border-color:#9eae9c}.corner{display:flex;justify-content:flex-end;align-items:center;gap:9px;padding:14px 2px 0;color:#8d9584}header{height:102px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)}.brand{display:flex;align-items:center;gap:10px;font-family:Georgia,serif;font-size:27px;letter-spacing:-1.1px}.brand svg{width:33px;height:33px}.topnote{font-size:10px;letter-spacing:2px;color:#657367;display:flex;align-items:center;gap:10px}.dot{display:inline-block;width:6px;height:6px;background:#69846b;border-radius:50%}\n    .intro{display:flex;align-items:flex-end;justify-content:space-between;padding:43px 0 30px}.eyebrow{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#788374}.intro h1{font:normal 44px/1.15 Georgia,serif;letter-spacing:-1.7px;margin:10px 0 10px}.intro p{color:#7b8178;margin:0;font-size:13px}.intro-right{text-align:right;font-size:11px;color:#8b8f85;padding-bottom:4px}.intro-right span{display:block;margin-top:5px;letter-spacing:1.3px;font-size:9px;text-transform:uppercase}\n    .studio{display:grid;grid-template-columns:minmax(0,1fr) 306px;border:1px solid var(--border);border-radius:9px;overflow:hidden;background:#faf9f5;box-shadow:0 12px 32px #24332605}.workspace{position:relative;background:#c8b0b1;min-width:0;overflow:hidden;display:flex;flex-direction:column}.canvaswrap{position:relative;aspect-ratio:1.38;overflow:hidden;touch-action:none;cursor:grab;flex:1;min-height:420px}.canvaswrap:active{cursor:grabbing}#scene{display:block;width:100%;height:100%;object-fit:cover}.scene-top{position:absolute;top:24px;left:25px;right:25px;display:flex;justify-content:space-between;align-items:center;pointer-events:none}.scene-tag{border:1px solid #ffffff60;border-radius:4px;background:#f7f2ec9c;backdrop-filter:blur(8px);padding:6px 10px;font-size:9px;letter-spacing:1.5px;color:#4c554b}.material-label{font:italic 14px Georgia,serif;color:#4b3d3e99}.preview-bottom{position:absolute;left:24px;bottom:22px;display:flex}.light{display:flex;gap:6px;font-size:10px;align-items:center;color:#473f4199}.light svg{width:14px;height:14px}.zoom{display:flex;align-items:center;border-radius:5px;background:#faf6f0db;border:1px solid #ffffff60;box-shadow:0 2px 8px #3325280b;overflow:hidden}.zoom button{width:31px;height:31px;border:0;background:none;font-size:18px;display:grid;place-items:center}.zoom output{font-size:10px;min-width:45px;text-align:center}.zoom .reset{border-left:1px solid #c6bcb350;margin-left:3px;font-size:14px}.zoom .reset:disabled{opacity:.3}.zoom button:hover{background:#fff9}.loading{position:absolute;inset:0;display:grid;place-items:center;background:#e6d7d3;z-index:5;color:#5e6a5e;font:italic 21px Georgia,serif;transition:opacity .3s}.loading.done{opacity:0;pointer-events:none}.caption{background:#f9f8f3;padding:17px 25px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);font-size:11px;color:#7c8378}.caption strong{color:#495a4b;font-weight:500}.caption svg{display:inline-block;width:12px;height:12px;vertical-align:-2px;margin-right:4px}.caption .small{font-size:9px;letter-spacing:1px}\n    aside{padding:26px 25px 23px;border-left:1px solid var(--border);display:flex;flex-direction:column}.panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px}.panel-head h2{font:normal 21px 'Gopher Bold',Georgia,serif;margin:0;white-space:nowrap;line-height:1.1}.panel-head span{font-size:9px;color:#8c9386;letter-spacing:1.1px}.label-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:9px}label,.control-title,.label-row label{font-size:13px;font-weight:500}.value{font-size:12px;color:#5a6358}.picked{justify-content:flex-start;gap:4px}.picked .control-title:after{content:':'}.text-field{background:#fffefa;border:1px solid #d5d8cc;border-radius:5px;display:flex;align-items:center;padding-right:12px}.text-field:focus-within{border-color:#637a62;box-shadow:0 0 0 2px #637a6210}.text-field input{width:100%;min-width:0;padding:10px 12px;color:var(--ink);background:none;border:0;font-size:16px;outline:none}.text-field span{font-size:9px;color:#9b9f94}.font-note{display:flex;justify-content:space-between;align-items:center;margin:10px 0 21px;font-size:10px;color:#8a9184}.font-note .script{font:16px Pacifico;color:#68735e}.group{margin-top:19px}.swatches{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}#threads{display:grid;width:100%;box-sizing:border-box;padding:0 5px;grid-template-columns:repeat(6,32px);justify-content:space-between;column-gap:0;row-gap:12px}#threads .swatch{width:32px;height:32px}.swatch{width:28px;height:28px;border-radius:50%;background:var(--swatch);border:1px solid #00000012;position:relative;padding:0;box-shadow:inset 0 1px 2px #ffffff50}.swatch[aria-pressed=true]:after{content:'';position:absolute;inset:-4px;border:1px solid #64715d;border-radius:50%}.swatch.pale{border-color:#00000030}.swatch{transition:transform .18s ease}.swatch:hover{transform:scale(1.1)}.fabric-swatch{border-radius:5px}.fabric-swatch[aria-pressed=true]:after{border-radius:8px}.section-note{margin:11px 0 0;color:#969b8e;font-size:10px}.range-block{margin-top:15px}input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:3px;margin:10px 0 8px;background:#dfe2d7;border-radius:3px;cursor:pointer;accent-color:#536d51}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:11px;height:11px;background:#52694f;border-radius:50%;box-shadow:0 0 0 3px #faf9f5}.range-ends{display:flex;justify-content:space-between;font-size:9px;color:#a0a497}.toggle-row{display:flex;justify-content:space-between;align-items:center;margin-top:17px}.switch{width:29px;height:17px;border:0;border-radius:15px;padding:3px;background:#c3c9bc;display:flex;align-items:center}.switch[aria-checked=true]{background:#526b50}.switch:before{content:'';width:11px;height:11px;border-radius:50%;background:#fff;box-shadow:0 1px 2px #0002;transition:transform .15s}.switch[aria-checked=true]:before{transform:translateX(12px)}.price-note{order:99;margin:14px 0 0;font-size:11.5px;color:#222;white-space:nowrap;text-align:center}.price-note strong{font-weight:700}.download{margin-top:24px;width:100%;border:0;background:#aa7a73;color:#fff;border-radius:5px;height:62px;padding:0 20px;font:17px 'Gopher Bold',Georgia,serif;letter-spacing:1px;text-transform:uppercase;cursor:pointer}.download:hover{background:#a06f68}.under-button{text-align:center;font-size:9px;color:#999f91;margin:9px 0 0}\n    .presets{padding:24px 0;display:flex;align-items:center;justify-content:space-between;gap:20px}.preset-label{font-size:9px;letter-spacing:1.4px;white-space:nowrap;color:#8c9385}.preset-list{display:flex;gap:9px;flex:1}.preset{display:flex;align-items:center;gap:8px;font-size:11px;border:1px solid #dedfd5;border-radius:30px;background:transparent;padding:7px 13px}.preset:hover{background:#eceee4;border-color:#acb7a1}.mini{width:13px;height:13px;border-radius:50%;background:var(--fabric);position:relative}.mini:after{content:'';width:7px;height:2px;background:var(--thread);position:absolute;left:3px;top:5px;transform:rotate(-25deg)}.source{border:0;background:none;color:#8d9584;font-size:10px;padding:7px 0;text-decoration:underline;text-underline-offset:3px}.bottomline{padding:0 0 25px;display:flex;justify-content:space-between;font-size:9px;color:#a2a798;letter-spacing:.4px}.bottomline span:first-child{display:flex;gap:7px;align-items:center}.bottomline .dot{width:4px;height:4px;background:#a0ac94}.toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%,20px);opacity:0;pointer-events:none;background:#293f30;color:#fff;padding:11px 18px;border-radius:6px;font-size:12px;transition:all .2s;z-index:9}.toast.show{opacity:1;transform:translate(-50%,0)}\n    .guide-button{border:0;background:none;padding:2px 0;color:#89927e;font-size:9px;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.guide-button[aria-pressed=true]{color:#344c39;font-weight:600}\n    .fontstyles{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}.fontstyle{border:1px solid #d5d8cc;border-radius:7px;background:#fffefa;padding:9px 6px 8px;font-size:21px;line-height:1.1;color:#4c554b}.fontstyle:hover{border-color:#acb7a1}.fontstyle:disabled{opacity:.4;font:500 13px 'Sofia Pro',Helvetica,Arial,sans-serif;cursor:default}.fontstyle[aria-pressed=true]{border-color:#344c39;background:#eceee4;box-shadow:0 0 0 1px #344c39}\n    @media(min-width:1400px){.canvaswrap{aspect-ratio:1.48}}\n    @media(max-width:1000px){.shell{padding:22px 28px 16px}.studio{grid-template-columns:minmax(0,1fr) 280px}aside{padding:23px 21px}.intro h1{font-size:39px}.canvaswrap{min-height:500px}.preset-list{gap:6px}.preset{padding:7px 10px}.presets{gap:12px}}\n    @media(max-width:919px){.shell{padding:16px 18px 12px}header{height:77px}.topnote{font-size:8px;letter-spacing:1px}.brand{font-size:24px}.intro{padding:29px 0 23px}.intro h1{font-size:36px}.intro-right{display:none}.intro p{font-size:12px}.studio{grid-template-columns:1fr}.canvaswrap{min-height:0;aspect-ratio:1.72}#scene{object-position:50% 18%}.panel-head{display:none}.scene-top{left:17px;right:17px;top:17px}.material-label{font-size:12px}.preview-bottom{left:15px;bottom:auto;top:15px}.shell[data-mode=product]{padding:24px 20px}.close-modal{top:-13px;right:-13px}.caption{padding:13px 17px}.caption .small{font-size:8px}aside{border-left:0;border-top:1px solid var(--border);padding:24px}.price-note{font-size:12px}.panel-head{margin-bottom:18px}.font-note{margin-bottom:15px}.group{margin-top:18px}.swatches{gap:19px}.swatch{width:28px;height:28px}.presets{flex-wrap:wrap;padding:20px 0}.preset-label{width:100%}.preset-list{flex-wrap:wrap}.source{margin-left:auto}.bottomline{font-size:8px;gap:15px}.light{font-size:9px}.scene-tag{font-size:8px}}\n    /* Side by side, the panel sets the height of the card and the preview fills what is left. */\n    @media(min-width:920px){.canvaswrap{position:absolute;inset:0;aspect-ratio:auto;min-height:0}.shell[data-mode=product] #scene{object-position:50% 0}}\n    .tw-spin{display:inline-block;width:15px;height:15px;margin-left:5px;vertical-align:-2px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:tw-spin .8s linear infinite}@keyframes tw-spin{to{transform:rotate(360deg)}}\n    .price-note{display:grid;grid-template-rows:0fr;opacity:0;margin-top:0;transition:grid-template-rows .35s ease,opacity .3s ease,margin-top .35s ease}.price-note.show{grid-template-rows:1fr;opacity:1;margin-top:14px}.price-inner{overflow:hidden;min-height:0}.has-tip{position:relative;cursor:help;outline:none}.has-tip:focus-visible>:first-child{text-decoration:underline dotted;text-underline-offset:3px}.price-note:not(.show) .tip{display:none}.tip{position:absolute;left:50%;bottom:calc(100% + 10px);transform:translate(-50%,6px);width:max-content;max-width:min(250px,calc(100vw - 40px));padding:10px 13px;border-radius:7px;background:#9eae9c;border:1px solid #8a9a88;box-shadow:0 8px 24px #1b1a1826;color:#fffdf8;font-size:12.5px;line-height:1.45;text-align:left;white-space:normal;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .22s ease,transform .22s ease,visibility 0s linear .22s}.tip{z-index:3}.tip:after,.tip:before{content:\"\";position:absolute;top:100%;left:50%;border:7px solid transparent;transform:translateX(-50%)}.tip:before{border-top-color:#8a9a88}.tip:after{border-top-color:#9eae9c;margin-top:-1px}.tip.tip-below{bottom:auto;top:calc(100% + 8px);transform:translate(-50%,-6px);padding-top:12px;padding-bottom:12px}.tip.tip-below:after,.tip.tip-below:before{top:auto;bottom:100%;border-top-color:transparent}.tip.tip-below:before{border-bottom-color:#8a9a88}.tip.tip-below:after{border-bottom-color:#9eae9c;margin-top:0;margin-bottom:-1px}@media(min-width:920px){.tip{width:calc(100% + 16px);max-width:none;padding:12px 16px}.tip.tip-below{padding-top:13px;padding-bottom:13px}}.has-tip.tipped .tip{opacity:1;visibility:visible;transform:translate(-50%,0);transition:opacity .22s ease,transform .22s ease,visibility 0s}\n  ";
const HTML="<div class=\"shell\">\n    <div class=\"card\"><main class=\"studio\">\n      <section class=\"workspace\" aria-label=\"Live embroidery preview\">\n        <div class=\"canvaswrap\" id=\"canvaswrap\">\n          <canvas id=\"scene\" width=\"1600\" height=\"1150\" role=\"img\" aria-label=\"Your text embroidered in chain stitches on knit\"></canvas>\n          <div class=\"preview-bottom\"><div class=\"zoom\" aria-label=\"Preview zoom\"><button id=\"zoomOut\" title=\"Zoom out\" aria-label=\"Zoom out\">−</button><output id=\"zoomReadout\">100%</output><button id=\"zoomIn\" title=\"Zoom in\" aria-label=\"Zoom in\">+</button><button id=\"resetView\" class=\"reset\" title=\"Reset view\" aria-label=\"Reset view\">↺</button></div></div>\n          <div class=\"loading\" id=\"loading\">Threading the needle…</div>\n        </div>\n      </section>\n      <aside aria-label=\"Embroidery settings\">\n        <div class=\"panel-head\"><h2>Add Hand Embroidery</h2></div>\n        <div class=\"label-row has-tip\" tabindex=\"0\" aria-describedby=\"lengthTip\"><label for=\"name\">Embroidery text</label><span class=\"value\">Up to 20 characters</span><span class=\"tip tip-below\" id=\"lengthTip\" role=\"tooltip\">Each letter will add <strong>$10</strong> to your order. Embroidery is lovingly done by hand at our headquarters in Portland, Oregon.</span></div>\n        <div class=\"text-field\"><input id=\"name\" value=\"\" autocomplete=\"off\" spellcheck=\"false\"><span id=\"charCount\">0/20</span></div>\n        <div class=\"group\" style=\"margin-top:18px\"><div class=\"label-row picked\"><span class=\"control-title\" id=\"fontLabel\">Font style</span><span class=\"value\" id=\"fontName\">Petit</span></div><div class=\"fontstyles\" id=\"fontstyles\" role=\"group\" aria-labelledby=\"fontLabel\"></div></div>\n        <div class=\"group\"><div class=\"label-row picked\"><span class=\"control-title\" id=\"threadLabel\">Thread color</span><span class=\"value\" id=\"threadName\">Pearl</span></div><div class=\"swatches\" id=\"threads\" role=\"group\" aria-labelledby=\"threadLabel\"></div></div>\n        <div class=\"group\" id=\"productGroup\"><div class=\"label-row\"><span class=\"control-title\" id=\"productLabel\">Product</span></div><select class=\"product-select\" id=\"productSelect\" aria-labelledby=\"productLabel\"></select></div>\n        <div class=\"group\" id=\"fabricGroup\"><div class=\"label-row picked\"><span class=\"control-title\" id=\"fabricLabel\">Blanket color</span><span class=\"value\" id=\"fabricName\">Pink Quartz</span></div><div class=\"swatches\" id=\"fabrics\" role=\"group\" aria-labelledby=\"fabricLabel\"></div></div>\n        <!-- Tuning controls for testing; hidden until Advanced is switched on. -->\n        <div class=\"group\" id=\"advancedPanel\" hidden>\n          <div class=\"font-note\" style=\"margin:0\"><span>Lettering</span><button id=\"fontGuide\" class=\"guide-button\" aria-pressed=\"false\" aria-label=\"Show font guide\">Font guide</button><span class=\"script\" id=\"fontScript\">Petit</span></div>\n          <div class=\"range-block\"><div class=\"label-row\"><label for=\"weight\">Thread weight</label><output class=\"value\" id=\"weightValue\">Delicate</output></div><input id=\"weight\" type=\"range\" min=\"2.5\" max=\"7.5\" step=\".25\" value=\"5\"><div class=\"range-ends\"><span>Fine</span><span>Full</span></div></div>\n          <div class=\"range-block\"><div class=\"label-row\"><label for=\"length\">Stitch length</label><output class=\"value\" id=\"lengthValue\">2.5 mm</output></div><input id=\"length\" type=\"range\" min=\"7\" max=\"18\" step=\".5\" value=\"10\"><div class=\"range-ends\"><span>Close-knit</span><span>Relaxed</span></div></div>\n        </div>\n        <p class=\"price-note has-tip\" tabindex=\"0\" aria-describedby=\"priceTip\"><span class=\"price-inner\">This embroidery will add <strong id=\"price\">$0.00</strong> to your order.</span><span class=\"tip\" id=\"priceTip\" role=\"tooltip\">Each letter will add <strong>$10</strong> to your order. Embroidery is lovingly done by hand at our headquarters in Portland, Oregon.</span></p>\n        <button class=\"download\" id=\"download\">Add to Cart</button>\n      </aside>\n    </main><button class=\"close-modal\" id=\"closeModal\" title=\"Close\" aria-label=\"Close\">×</button></div>\n    <div class=\"corner\"><button class=\"guide-button\" id=\"previewModal\" style=\"margin-right:auto\">Preview modal</button><span class=\"control-title\" id=\"advancedLabel\">Advanced</span><button class=\"switch\" id=\"advanced\" role=\"switch\" aria-checked=\"false\" aria-labelledby=\"advancedLabel\"></button></div>\n    <div class=\"toast\" id=\"toast\" role=\"status\" aria-live=\"polite\"></div>\n  </div>";
const start=()=>{
const MOUNT=document.getElementById('threadwork')||document.querySelector('[data-threadwork]');
if(!MOUNT||MOUNT.shadowRoot)return;
// A modal must escape the theme's wrappers: a transformed or filtered ancestor would trap position:fixed inside it.
if(MOUNT.dataset.mode==='product'&&MOUNT.parentElement!==document.body)document.body.append(MOUNT);
if(!document.getElementById('threadwork-fonts')){const s=document.createElement('style');s.id='threadwork-fonts';s.textContent=FONTS.replaceAll('./assets/',ASSETS);document.head.append(s);}
const SHADOW=MOUNT.attachShadow({mode:'open'});
SHADOW.innerHTML='<style>'+CSS+'</style>'+HTML;
// All cloth, stitches, strand twists and fibers are drawn at runtime.
    // The original fixed-size stitch renderer is unchanged. Explicit Pacifico
    // pen paths resolve overlapping lowercase strokes; native ink guides the
    // joins. Every pen path is then recentered on the word's rasterized ink.
    // Stitch width and loop dimensions stay independent of letter width.
    // Who is looking at the page. `embed.mode` is one of:
    //   studio  — this standalone page and the Claude artifact (design work; shows the Advanced switch)
    //   lab     — the store's embroidery lab page
    //   product — a store product page; `embed.product` is then the product handle, `embed.line` the product
    //             line ('sawa', 'popcorn', 'cashmere', 'beanie'; a line with no fabric of that name borrows the same-named fabric of another line) and `embed.blanket` the colour name ("Moon Stone", "moon-stone"…);
    //             the blanket row is hidden there. Which products get the button is decided in the Liquid block.
    // Standalone it is studio, overridable with ?mode=&product= for testing; the embed build replaces
    // these lines with the mount element's data-mode / data-product and its shadow root (default lab).
    const MODES=['studio','lab','product'];
    const embed={mode:MODES.includes(MOUNT.dataset.mode)?MOUNT.dataset.mode:'lab',product:MOUNT.dataset.product||'',blanket:MOUNT.dataset.blanket||'',line:MOUNT.dataset.line||'',price:MOUNT.dataset.price||'',flow:MOUNT.dataset.flow||'',variant:MOUNT.dataset.variant||'',title:MOUNT.dataset.title||'',url:MOUNT.dataset.url||'',max:MOUNT.dataset.max||'',open:MOUNT.hasAttribute('data-open')};
    const root=SHADOW;
    const $ = id => root.getElementById(id);
    root.querySelector('.shell').dataset.mode=embed.mode;
    // Which flow this shopper gets: 'save' (Save embroidery → card → Add to cart) or 'direct' (Add to Cart in the modal).
    // 'ab' assigns one at random per browser and remembers it; ?threadwork_flow=save|direct overrides for testing.
    // The choice is stamped on the embroidery line as _flow so orders can be counted per bucket.
    const FLOW=(()=>{let f=new URLSearchParams(location.search).get('threadwork_flow')||embed.flow||'save';if(f==='ab'){try{f=localStorage.getItem('threadwork-flow');if(f!=='save'&&f!=='direct'){f=Math.random()<.5?'save':'direct';localStorage.setItem('threadwork-flow',f);}}catch(e){f='save';}}f=f==='direct'?'direct':'save';if(f==='save'&&embed.mode==='product'&&!document.getElementById('threadwork-summary'))f='direct';return f;})();
    const announce=(name,detail)=>{try{window.dispatchEvent(new CustomEvent('threadwork:'+name,{detail:Object.assign({flow:FLOW,product:embed.product},detail||{})}));if(Array.isArray(window.dataLayer))window.dataLayer.push(Object.assign({event:'threadwork_'+name,threadwork_flow:FLOW,threadwork_product:embed.product},detail||{}));}catch(e){}};
    const money=n=>'$'+n.toFixed(2);
    let saved=null,saving=false;const urlRestore={cancelled:false,openWhenReady:false};
  const syncQuiet=async()=>{const t=document.querySelector('[data-threadwork-open]');if(!t||!canSell())return;try{const c=await (await fetch('/cart.js',{credentials:'same-origin'})).json();const has=(c.items||[]).some(i=>/(Sawa|Popcorn) Blanket|Little Love Blanket|Cashmere Cloud (Baby Blanket )?Gift Set|Kid Beanie|Adult Beanie/i.test(i.product_title||'')||/Custom Hand Embroidery/i.test(i.product_title||''));if(has)t.dataset.quiet='1';else delete t.dataset.quiet;}catch(e){}};
  document.addEventListener('theme:cart:updated',()=>syncQuiet());
    // The twelve thread colours offered on the store.
    const threads = [
      { name:'White', hex:'#ffffff' }, { name:'Cream', hex:'#fafaeb', yarn:'#e9dfc0' },
      { name:'Baby Pink', hex:'#edbbd3' }, { name:'Red', hex:'#c11c1c', yarn:'#9c2a2c' },
      { name:'Yellow', hex:'#e9e194' }, { name:'Ice', hex:'#c9e5f5', yarn:'#b2d0dd' },
      { name:'Jade', hex:'#a7d9b2', yarn:'#a7cca9' }, { name:'Teal', hex:'#40b0d0' },
      { name:'Purple', hex:'#c0baec' }, { name:'Grey', hex:'#acbbba' },
      { name:'Navy', hex:'#27497e' }, { name:'Ochre', hex:'#b06800' }
    ];
    const fabrics = [
      // Every blanket is a cleaned-up knit image (Codex): `image` is its swatch, `hex` the average colour of the original photo.
      // `scale` sets the stitch size on the cloth; Pink Quartz (1254px, ~28 stitches across) is the reference look.
      // With `texture` the cloth is that cleaned-up knit image (optionally `crop:[x,y,w,h]` as fractions of the photo first), shadows lifted (`lift`, default .28; negative deepens them), colour-matched
      // to `hex` (greyed first when `neutral`) and repeated at `scale`;
      // without one the cloth is drawn as seed stitch.
      { name:'Pink Quartz', hex:'#f5aab9', image:ASSETS+'fabrics/pink-quartz.webp', texture:ASSETS+'fabrics/pink-quartz.webp', scale:.425, line:'sawa' }, { name:'Henna', hex:'#d1a180', image:ASSETS+'fabrics/henna.webp', texture:ASSETS+'fabrics/henna.webp', scale:.425, line:'sawa' },
      { name:'Moon Stone', hex:'#aba8a7', image:ASSETS+'fabrics/moon-stone.webp', texture:ASSETS+'fabrics/pink-quartz.webp', neutral:true, lift:-.35, marl:.2, scale:.425, line:'sawa' }, { name:'Sky Blue', hex:'#8da6c7', image:ASSETS+'fabrics/sky-blue.webp', texture:ASSETS+'fabrics/sky-blue.webp', scale:.425, line:'sawa' },
      { name:'Citron', hex:'#ded693', image:ASSETS+'fabrics/citron.webp', texture:ASSETS+'fabrics/citron.webp', scale:.425, line:'sawa' },
      // Popcorn (baby + adult). Moon Stone has no photo yet and falls back to the Sawa knit by name.
      { name:'Pink Quartz', hex:'#e9a8b2', texture:ASSETS+'fabrics/popcorn-pink-quartz.webp', lift:0, pure:true, scale:.55, line:'popcorn' }, { name:'Henna', hex:'#c69778', texture:ASSETS+'fabrics/popcorn-henna.webp', lift:0, pure:true, scale:.55, line:'popcorn' },
      { name:'Sky Blue', hex:'#90a2bb', texture:ASSETS+'fabrics/popcorn-sky-blue.webp', lift:0, pure:true, scale:.55, line:'popcorn' }, { name:'Citron', hex:'#e7df96', texture:ASSETS+'fabrics/popcorn-citron.webp', lift:0, pure:true, scale:.55, line:'popcorn' },
      { name:'Cream', hex:'#cec7b5', texture:ASSETS+'fabrics/popcorn-cream.webp', lift:0, pure:true, scale:.55, line:'popcorn' }, { name:'Moon Stone', hex:'#aba8a7', aka:['Moonstone'], texture:ASSETS+'fabrics/popcorn-knit.webp', neutral:true, lift:-.35, marl:.2, scale:.45, line:'popcorn' },
      // Little Love cashmere + the Cashmere Cloud gift sets (same knit). 'Peony Pink' is the gift set's name for Peony.
      { name:'Butter Cream', hex:'#c1aea3', texture:ASSETS+'fabrics/littlelove-butter-cream.webp', pure:true, lift:0, sharpen:.7, lane:{pitch:208.333,centre:104.167}, scale:1, line:'cashmere' }, { name:'Cloud', hex:'#c9c0b6', texture:ASSETS+'fabrics/littlelove-cloud.webp', pure:true, lift:0, sharpen:.7, lane:{pitch:208.333,centre:104.167}, scale:1, line:'cashmere' },
      { name:'Hydrangea', hex:'#aebcc7', texture:ASSETS+'fabrics/littlelove-hydrangea.webp', pure:true, lift:0, sharpen:.7, lane:{pitch:208.333,centre:104.167}, scale:1, line:'cashmere' }, { name:'Lavande', hex:'#d5b9d9', texture:ASSETS+'fabrics/littlelove-lavande.webp', pure:true, lift:0, sharpen:.7, lane:{pitch:208.333,centre:104.167}, scale:1, line:'cashmere' },
      { name:'Peony', aka:['Peony Pink'], hex:'#d1b6b2', texture:ASSETS+'fabrics/littlelove-peony.webp', pure:true, lift:0, sharpen:.7, lane:{pitch:208.333,centre:104.167}, scale:1, line:'cashmere' },
      // Kid + Adult beanies (rib photos, placeholder).
      { name:'Charcoal', hex:'#4b4a4f', image:ASSETS+'fabrics/beanie-charcoal.webp', texture:ASSETS+'fabrics/beanie-charcoal-knit.webp', whole:true, wash:false, lift:.1, marl:.1, scale:.5, line:'beanie' }, { name:'Chocolate', hex:'#53271a', image:ASSETS+'fabrics/beanie-chocolate.webp', texture:ASSETS+'fabrics/beanie-chocolate-knit.webp', whole:true, wash:false, lift:.1, scale:.5, line:'beanie' },
      { name:'Cobalt', hex:'#172b9a', image:ASSETS+'fabrics/beanie-cobalt.webp', texture:ASSETS+'fabrics/beanie-cobalt-knit.webp', whole:true, wash:false, lift:.1, scale:.5, line:'beanie' }, { name:'Lavande', hex:'#b9a2cf', image:ASSETS+'fabrics/beanie-lavande.webp', texture:ASSETS+'fabrics/beanie-lavande-knit.webp', whole:true, scale:.5, line:'beanie' },
      { name:'Pink Haze', hex:'#ce8085', image:ASSETS+'fabrics/beanie-pink-haze.webp', texture:ASSETS+'fabrics/beanie-pink-haze-knit.webp', whole:true, marl:.1, scale:.5, line:'beanie' }
    ];
    const fonts = [
      // Petit is a non-connecting script: each letter carries its own entry
      // and exit flicks, so letters are stitched whole and never joined.
      { name:'Petit', family:'Petit Formal Script', file:'PetitFormalScript-Regular.ttf', tracking:-8, connected:false, tile:{bold:true,size:19,down:1} },
      { name:'Damion', family:'Damion', file:'Damion-Regular.ttf' },
      { name:'Sacramento', family:'Sacramento', file:'Sacramento-Regular.ttf', tile:{bold:true,down:2} },
      { name:'Pacifico', family:'Pacifico', file:'Pacifico-Regular.ttf', tile:{size:19} },
      { name:'Boucherie', family:'Boucherie Cursive', file:'Boucherie-Cursive.ttf', extendEnds:true, tile:{size:22} },
      // A font may instead carry `kit` (an Adobe Fonts stylesheet URL; works on the store's own domain,
      // not in the artifact or the single file) or `pending:true` to show a greyed, unpickable tile.
      { name:'Espiritu', family:'Espiritu Script', file:'Espiritu-Script.otf', extendEnds:true, tile:{down:2,stroke:.25,size:23} }
    ];
    const state = { text:'', font:0, thread:0, fabric:0, weight:5, length:10, guide:false, advanced:false, zoom:1, panX:0, panY:0 };
    // A named blanket (from the product page) wins over the default; unknown names fall back to it.
    {const norm=t=>t.toLowerCase().replace(/[^a-z]/g,''),want=norm(embed.blanket);const match=f=>norm(f.name)===want||(f.aka||[]).some(a=>norm(a)===want);let i=embed.line?fabrics.findIndex(f=>f.line===embed.line&&match(f)):-1;if(i<0&&want)i=fabrics.findIndex(match);if(i<0&&embed.line)i=fabrics.findIndex(f=>f.line===embed.line);if(i>=0)state.fabric=i;}
    // Every measurement, raster and guide uses the chosen face at 180 px,
    // with the face's own tracking (a non-connecting script sits tighter).
    const fontSpec = () => `180px "${fonts[state.font].family}"`;
    // Initials (two to five capitals and nothing else) are a monogram: in every face they are spaced
    // apart and stitched as separate letters, since capitals otherwise run into one another.
    // Centreline to centreline, since the chain has its own width (d, 2026-11-01: ink-to-ink left Pacifico
    // a little far apart and Petit's T and P touching).
    // Bump when any knit tile changes: the file name stays, the cache key does not.
    const TEXTURE_VERSION='7';
    const INITIALS_GAP = 32;
    // The chain's own width in font units (measured on the canvas at the default weight) and the gap the
    // stitched strokes should keep in two dimensions: a hairline face needs more ink clearance than a fat one.
    const CHAIN_WIDTH = 8, STITCH_GAP = 22;
    const initials = () => { const t = state.text.replace(/[^A-Za-z]/g, ''); return t.length >= 2 && t.length <= 5 && /^[A-Z]+$/.test(t); };
    const connected = () => fonts[state.font].connected !== false && !initials();
    const applyFont = ctx => { ctx.font = fontSpec(); ctx.letterSpacing = (fonts[state.font].tracking || 0) + 'px'; return ctx; };
    const W=1600, H=1150;
    const canvas=$('scene'), ctx=canvas.getContext('2d');
    const cloth=document.createElement('canvas'); cloth.width=W; cloth.height=H;
    const clothCtx=cloth.getContext('2d');
    const artwork=document.createElement('canvas'); artwork.width=W; artwork.height=H;
    const art=artwork.getContext('2d');
    let paths=[], geometry=null, ready=false, raf=0, debounce=0, stitches=0, strokeWidth=24;
    const rgb = hex => hex.match(/[a-f\d]{2}/gi).map(x=>parseInt(x,16));
    // The swatch is the catalogue colour; the thread is dyed cotton. Pull it
    // off pure white and full saturation and warm it slightly, the way
    // spun yarn reads under daylight, so the swatch stays true on screen
    // while the stitches look sewn rather than painted.
    const yarn = hex => {
      let [r,g,b]=rgb(hex).map(v=>v/255);const max=Math.max(r,g,b),min=Math.min(r,g,b);let h=0,s=0,l=(max+min)/2;
      if(max!==min){const d=max-min;s=l>.5?d/(2-max-min):d/(max+min);h=max===r?((g-b)/d+(g<b?6:0))/6:max===g?((b-r)/d+2)/6:((r-g)/d+4)/6;}
      s*=.7;l=.1+l*.82;
      const k=(n,v)=>{const t=(n+h*12)%12,a=s*Math.min(l,1-l);return v?l-a*Math.max(-1,Math.min(t-3,9-t,1)):0;};
      // Pale threads carry the most of the ivory cast; dark ones barely any.
      let [R,G,B]=[k(0,1),k(8,1),k(4,1)];const warm=[.95,.91,.8],w=.05+.13*l;R=R*(1-w)+warm[0]*w;G=G*(1-w)+warm[1]*w;B=B*(1-w)+warm[2]*w;
      return '#'+[R,G,B].map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('');
    };
    const color = (hex, offset=0, alpha=1) => {const c=rgb(hex).map(v=>Math.max(0,Math.min(255,v+offset)));return `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;};
    function random(seed) {let v=seed|0;return ()=>{v=(Math.imul(v,1664525)+1013904223)|0;return (v>>>0)/4294967296;};}
    function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2200);}
    // Near-white swatches vanish into the panel without a firmer edge.
    const pale=hex=>[1,3,5].every(i=>parseInt(hex.slice(i,i+2),16)>228);
    function swatches(items,container,key){items.forEach((item,i)=>{const b=document.createElement('button');b.className='swatch'+(key==='fabric'?' fabric-swatch':'');b.style.setProperty('--swatch',item.hex);if(pale(item.hex))b.classList.add('pale');b.title=item.name;b.setAttribute('aria-label',item.name);b.setAttribute('aria-pressed',String(i===state[key]));b.addEventListener('click',()=>{state[key]=i;updateControls();if(key==='fabric')ensureTexture(fabrics[i]).then(()=>{drawCloth();requestRender();});else requestRender();});$(container).append(b);});}
    swatches(threads,'threads','thread');swatches(fabrics,'fabrics','fabric');
    // When a swatch row has to wrap, split it evenly rather than leaving a short last line.
    function balanceRows(){for(const row of root.querySelectorAll('.swatches')){const items=[...row.children];if(!items.length)continue;row.style.maxWidth='';if(getComputedStyle(row).display==='grid'){const cs=getComputedStyle(row),sw=items[0].offsetWidth,inner=row.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight),minGap=10;if(inner<=0||!sw)continue;const fit=Math.max(1,Math.floor((inner+minGap)/(sw+minGap)));let per=items.length;if(fit<items.length){const rows=Math.ceil(items.length/fit);per=Math.ceil(items.length/rows);}row.style.gridTemplateColumns='repeat('+per+','+sw+'px)';continue;}const gap=parseFloat(getComputedStyle(row).gap)||0,w=items[0].offsetWidth,fit=Math.max(1,Math.floor((row.clientWidth+gap)/(w+gap)));if(fit>=items.length)continue;const rows=Math.ceil(items.length/fit),per=Math.ceil(items.length/rows);row.style.maxWidth=(per*w+(per-1)*gap)+'px';}}
    // The price line must never wrap: on desktop shrink its type until it fits the panel; on a phone it sits under the button at its natural size.
    function fitPrice(){const n=root.querySelector('.price-note');if(!n)return;if(innerWidth<=919){n.style.fontSize='';return;}const width=()=>{const r=document.createRange();r.selectNodeContents(n.querySelector('.price-inner')||n);return r.getBoundingClientRect().width;};let size=12;n.style.fontSize=size+'px';while(width()>n.clientWidth*.94&&size>9){size-=.25;n.style.fontSize=size+'px';}}
    function fitHeading(){const h=root.querySelector('.panel-head h2');if(!h)return;if(innerWidth<=919){h.style.fontSize='';return;}h.style.fontSize='21px';const r=document.createRange();r.selectNodeContents(h);const w=r.getBoundingClientRect().width;if(w>0)h.style.fontSize=Math.min(48,21*h.parentElement.clientWidth/w).toFixed(2)+'px';}
    root.querySelectorAll('.has-tip').forEach(host=>{const tip=on=>host.classList.toggle('tipped',on);host.addEventListener('mouseenter',()=>tip(true));host.addEventListener('mouseleave',()=>tip(false));host.addEventListener('focus',()=>tip(true));host.addEventListener('blur',()=>tip(false));host.addEventListener('click',e=>{if(e.target.closest('label'))return;tip(!host.classList.contains('tipped'));});});
    const relayout=()=>{balanceRows();fitPrice();fitHeading();};relayout();addEventListener('resize',relayout);addEventListener('resize',()=>requestRender());root.querySelector('.price-note').addEventListener('transitionend',e=>{if(e.propertyName==='grid-template-rows')requestRender();});document.fonts.ready.then(relayout);
    // The mode is read live so the studio can preview the product modal in place ("Preview modal" in the corner row).
    const shell=root.querySelector('.shell'),isModal=()=>shell.dataset.mode==='product';let previewing=false;
    const card=root.querySelector('.card');
    const centerCard=()=>{if(!isModal()||shell.hidden)return;const pad=parseFloat(getComputedStyle(shell).paddingTop);card.style.marginTop=Math.max(0,(shell.clientHeight-2*pad-card.offsetHeight)/2)+'px';};
    const openModal=()=>{if(!isModal())return;announce('open');const host=root.host;if(host&&host.parentElement===document.body)document.body.append(host);shell.hidden=false;if(shell.showPopover){shell.setAttribute('popover','manual');try{shell.showPopover();}catch(e){}}document.body.style.overflow='hidden';relayout();centerCard();if(ready)renderArtwork();if(innerWidth>=920)setTimeout(()=>$('name').focus({preventScroll:true}),0);};
    const closeModal=()=>{if(!isModal())return;document.body.style.overflow='';card.style.marginTop='';if(saved&&!saving)restoreSaved();if(shell.hasAttribute('popover')){try{shell.hidePopover();}catch(e){}shell.removeAttribute('popover');}if(previewing){previewing=false;shell.dataset.mode=embed.mode;relayout();}else shell.hidden=true;};
    addEventListener('resize',centerCard);document.fonts.ready.then(centerCard);
    if(isModal()){shell.hidden=true;if(embed.open)openModal();}
    $('closeModal').addEventListener('click',closeModal);let downOnShell=false;shell.addEventListener('pointerdown',e=>{downOnShell=e.target===shell;});shell.addEventListener('click',e=>{if(e.target===shell&&downOnShell)closeModal();downOnShell=false;});addEventListener('keydown',e=>{if(e.key==='Escape'&&isModal()&&!shell.hidden)closeModal();});document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-threadwork-open]');if(t){e.preventDefault();openModal();}});
    $('previewModal').addEventListener('click',()=>{previewing=true;shell.dataset.mode='product';openModal();});
    function updateControls(){
      $('threadName').textContent=threads[state.thread].name;$('fabricName').textContent=fabrics[state.fabric].name;
      $('fontName').textContent=fonts[state.font].name;$('fontScript').textContent=fonts[state.font].name;$('fontScript').style.fontFamily=`"${fonts[state.font].family}"`;
      $('fontstyles').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===state.font)));
      $('threads').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===state.thread)));
      $('fabrics').querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===state.fabric)));
      $('charCount').textContent=letters(state.text)+'/'+MAX_LETTERS;$('price').textContent='$'+(letters(state.text)*PRICE_PER_LETTER).toFixed(2);root.querySelector('.price-note').classList.toggle('show',letters(state.text)>0);fitPrice();$('weightValue').textContent=state.weight<3.5?'Extra fine':state.weight<4.25?'Delicate':state.weight<5.75?'Classic':'Chunky';
      $('lengthValue').textContent=(state.length/2.2).toFixed(1)+' mm';$('advanced').setAttribute('aria-checked',String(state.advanced));$('advancedPanel').hidden=!state.advanced;$('zoomReadout').textContent=Math.round(state.zoom*100)+'%';$('resetView').disabled=state.zoom===1;
      canvas.setAttribute('aria-label',`${state.text||'Blank fabric'} embroidered in ${threads[state.thread].name.toLowerCase()} chain stitches on ${fabrics[state.fabric].name.toLowerCase()} knit fabric`);
    }
    // Tileable knit, lit from the upper left, drawn as seed stitch when a blanket has no texture.
    function drawCloth(){
      const fabric=fabrics[state.fabric];
      const base=fabric.hex;
      const tile=document.createElement('canvas');tile.width=216;tile.height=216;
      const t=tile.getContext('2d');t.fillStyle=color(base,-4);t.fillRect(0,0,216,216);t.lineCap='round';
        // Seed stitch, as the photographed blankets show it: every stitch is a short
        // horizontal bar, wider than tall, lit along its top with a dark slot beneath,
        // laid in a brick pattern so the surface reads as a diagonal lattice. Jitter is
        // keyed to the wrapped cell so the tile repeats without a seam.
        const nx=22,ny=36,px=216/nx,py=216/ny;t.fillStyle=color(base,-32);t.fillRect(0,0,216,216);
        for(let row=-1;row<=ny;row++)for(let col=-1;col<=nx;col++){
          const r=random(((row+ny)%ny)*97+((col+nx)%nx)*13+5);
          // Bars lean alternately, which is what makes the surface read as a diagonal lattice.
          const cx=col*px+(row%2?px/2:0)+px/2+(r()-.5)*2,cy=row*py+py/2+(r()-.5)*1.2,shade=(r()-.5)*22,tilt=((col+row)%2?.3:-.3)+(r()-.5)*.2,w=px*(.42+r()*.12);
          // The slot under the bar.
          t.fillStyle=color(base,-60,.7);t.beginPath();t.ellipse(cx+.6,cy+py*.5,px*.42,py*.3,tilt,0,Math.PI*2);t.fill();
          // A soft halo first, so the bar has a hairy edge rather than a hard one.
          t.fillStyle=color(base,shade+10,.3);t.beginPath();t.ellipse(cx,cy,w*1.3,py*.6,tilt,0,Math.PI*2);t.fill();
          // The bar itself, bright on top and shaded underneath.
          const g=t.createLinearGradient(0,cy-py*.45,0,cy+py*.45);
          g.addColorStop(0,color(base,shade+48));g.addColorStop(.35,color(base,shade+14));g.addColorStop(.7,color(base,shade-8));g.addColorStop(1,color(base,shade-34));
          t.fillStyle=g;t.beginPath();t.ellipse(cx,cy,w,py*.44,tilt,0,Math.PI*2);t.fill();
          // Fuzz: stray fibres lying along the bar and catching the light.
          for(let f=0;f<7;f++){t.strokeStyle=color(base,f<4?52:-30,.12+r()*.16);t.lineWidth=.3+r()*.2;t.beginPath();const x0=cx-w*.9+r()*w*1.8,y0=cy-py*.5+r()*py,ang=tilt+(r()-.5)*1.4,len=3+r()*6;t.moveTo(x0,y0);t.lineTo(x0+Math.cos(ang)*len,y0+Math.sin(ang)*len);t.stroke();}
        }
      clothCtx.fillStyle=base;clothCtx.fillRect(0,0,W,H);
      if(fabric.photoCanvas){const p=fabric.photoCanvas,k=Math.max(W/p.width,H/p.height)*1.04,dw=p.width*k,dh=p.height*k;clothCtx.save();clothCtx.imageSmoothingEnabled=true;clothCtx.imageSmoothingQuality="high";clothCtx.filter="blur("+Math.max(1.5,W/700).toFixed(1)+"px)";clothCtx.drawImage(p,(W-dw)/2,(H-dh)/2,dw,dh);clothCtx.restore();}
      else if(fabric.pattern&&fabric.lane){const box=letterBox(),s=Math.max(.5,Math.min(2.5,box.h*2.3/fabric.lane.pitch)),target=box.y-box.h*.2,ty=target-fabric.lane.centre*s;clothCtx.save();clothCtx.imageSmoothingQuality='high';clothCtx.translate(0,ty);clothCtx.scale(s,s);clothCtx.fillStyle=fabric.pattern;clothCtx.fillRect(0,-ty/s-fabric.lane.pitch,W/s,H/s+fabric.lane.pitch*2);clothCtx.restore();}
      else if(fabric.pattern){clothCtx.save();clothCtx.scale(fabric.scale,fabric.scale);clothCtx.fillStyle=fabric.pattern;clothCtx.fillRect(0,0,W/fabric.scale,H/fabric.scale);clothCtx.restore();if(!fabric.pure&&fabric.wash!==false){clothCtx.fillStyle=color(base,0,.12);clothCtx.fillRect(0,0,W,H);}}
      else{clothCtx.save();clothCtx.translate(W/2,H/2);clothCtx.rotate(-.047);clothCtx.scale(1.12,1.12);clothCtx.fillStyle=clothCtx.createPattern(tile,'repeat');clothCtx.fillRect(-W,-H,W*2,H*2);clothCtx.restore();}
      let g=null;if(!fabric.pure){g=clothCtx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#fffcdf28');g.addColorStop(.35,'#ffffff10');g.addColorStop(.72,'#1d17200b');g.addColorStop(1,'#2716221f');clothCtx.fillStyle=g;clothCtx.fillRect(0,0,W,H);}
      if(!fabric.pure){g=clothCtx.createRadialGradient(W*.37,H*.36,50,W*.5,H*.5,W*.7);g.addColorStop(0,'#fffae810');g.addColorStop(1,'#20182518');clothCtx.fillStyle=g;clothCtx.fillRect(0,0,W,H);}
      // Fine irregular fibers remove the mechanically perfect tile surface.
      const r=random(8313);clothCtx.lineWidth=.42;
      for(let i=0;i<14000;i++){const x=r()*W,y=r()*H;clothCtx.strokeStyle=color(base,r()>.45?62:-48,r()*.2);clothCtx.beginPath();clothCtx.moveTo(x,y);clothCtx.lineTo(x+(r()-.4)*7,y+(r()-.5)*4);clothCtx.stroke();}
    }
    // Single-stroke masters traced through the actual Pacifico glyphs at
    // 180 px. Explicit pen paths resolve overlapping brush strokes that a
    // medial-axis skeleton incorrectly turns into T-shaped branches.
    const strokeMasters={
      A:{d:['M133 -137 C100 -150 20 -125 10 -70 C2 -25 28 -6 52 -14 C68 -20 88 -28 101 -40','M118 -118 C114 -95 108 -65 100 -40 C95 -22 104 -9 120 -10 C136 -11 148 -22 157 -35'],entry:[10,-70],exit:[157,-35]},
      U:{d:['M7 -117 C10 -132 30 -148 42 -142 C58 -134 56 -100 50 -75 C46 -55 42 -30 46 -16 C50 -4 72 -6 90 -20 C97 -33 108 -48 124.3 -61.7','M137 -150 C134 -120 124 -88 124 -50 C120 -30 122 -12 136 -8 C150 -5 165 -14 177 -37'],entry:[7,-117],exit:[177,-37]},
      W:{native:true,entry:[40,-139],exit:[232,-70]},
      M:{native:true,entry:[6,-116],exit:[239,-33]},
      N:{native:true,entry:[6,-116],exit:[175,-31]},
      a:{d:['M62 -69 C35 -94 3 -30 23 -13 C35 -3 51 -18 60 -35','M65 -73 C63 -53 59 -29 60 -10'],entry:[18,-25],exit:[60,-10],tail:[60,-6]},
      b:{native:true,entry:[24,-25],exit:[62,-26]},
      c:{d:['M56 -55 C73 -88 17 -95 16 -41 C12 -1 48 0 69 -26'],entry:[17,-40],exit:[69,-26]},
      d:{native:true,entry:[18,-25],exit:[62,-14],tail:[70,-5]},
      e:{d:['M16 -31 C13 -45 23 -77 44 -76 C70 -75 68 -43 16 -31','M16 -31 C11 -20 20 -10 34 -10 C46 -6.5 62 -11 66 -18.5 C69 -21 72 -24 75 -25.5'],entry:[12,-18],exit:[75,-25.5]},
      f:{native:true,entry:[25,-70],exit:[73,-41]},
      g:{native:true,entry:[18,-25],exit:[55,7]},
      h:{d:['M29 -77 C31 -116 43 -160 55 -160 C87 -160 70 -108 29 -77 C24 -58 22 -35 23 -24 C22 -9 27 -7 32 -25 C43 -52 55 -76 67 -75 C77 -74 65 -30 66 -12'],entry:[26,-65],exit:[66,-12],tail:[66,-6]},
      i:{d:['M26 -72 C22 -52 18 -28 17 -12'],dot:[34,-110],entry:[24,-60],exit:[17,-12],tail:[17,-6]},
      j:{d:['M28 -72 C24 -40 20 -8 11 30 C-7 80 -34 85 -30 59 C-27 39 -5 19 17 12'],dot:[34,-110],entry:[26,-60],exit:[17,12]},
      k:{d:['M29 -77 C31 -116 43 -160 55 -160 C87 -160 70 -108 29 -77 C22 -55 20 -27 22 -12','M23 -13 C37 -50 62 -81 78 -67 C92 -45 52 -38 62 -24 C66 -15 74 -12 83 -12'],entry:[26,-65],exit:[83,-12]},
      l:{d:['M22 -30 C32 -46 52 -76 62 -112 C70 -140 70 -162 56 -158 C40 -152 22 -115 20 -60 C19 -40 20 -30 25 -20 C30 -10 38 -4 45 -4 C52 -4 58 -10 63 -22'],entry:[22,-30],exit:[63,-22]},
      // The first stem of m and n runs its full height as one line. A join
      // lands on its side, and the next hump rises from that same point;
      // below it the ink is one merged blob.
      m:{d:['M28 -80 C24 -62 20 -42 20 -28 C20 -20 21 -14 22 -10','M20 -28 C30 -46 54 -76 67 -76 C78 -76 66 -42 66 -24 C64 -8 66 -4 72 -25 C85 -51 100 -76 112 -76 C123 -76 110 -27 110 -12'],entry:[20,-28],exit:[110,-12],tail:[110,-6]},
      n:{d:['M28 -80 C24 -62 20 -42 20 -28 C20 -20 21 -14 22 -10','M20 -28 C30 -46 54 -76 67 -76 C78 -76 66 -29 66 -12'],entry:[20,-28],exit:[66,-12],tail:[66,-6]},
      o:{d:['M64 -49 C64 -89 13 -90 14 -39 C14 4 66 -1 64 -49 Z'],entry:[16,-34],exit:[64,-46]},
      p:{native:true,entry:[24,-50],exit:[62,-32]},
      q:{d:['M62 -69 C35 -94 3 -30 23 -13 C35 -3 51 -18 60 -35','M69 -82 C63 -55 55 3 51 40'],entry:[18,-25],exit:[59,-12]},
      r:{d:['M28 -76 C25 -60 22 -36 23 -24 C22 -9 27 -7 32 -25 C43 -53 52 -75 62 -75 C70 -75 70 -64 72 -60 C75 -55 79 -50 78 -44'],entry:[26,-65],exit:[78,-44]},
      s:{d:['M8 -20 C18 -36 30 -50 39 -54 C45 -60 47 -70 46 -78','M39 -54 C46 -45 48 -28 45 -18 C43 -11 40 -8 34 -10'],entry:[8,-20],exit:[34,-10]},
      t:{d:['M35 -82 C36 -114 43 -150 56 -151 C84 -153 70 -110 35 -82 C18 -58 19 -10 45 -10 C56 -10 63 -16 68 -23','M10 -76 Q38 -75 66 -78'],entry:[26,-60],exit:[68,-23]},
      u:{d:['M26 -73 C22 -54 13 -29 20 -16 C29 0 49 -24 61 -47','M65 -73 C61 -52 57 -28 57 -12'],entry:[24,-63],exit:[57,-12]},
      v:{d:['M20 -73 C19 -42 18 -15 29 -12 C43 -7 68 -52 79 -75'],entry:[20,-63],exit:[79,-75]},
      // Down the left stem, up the arch onto the middle stem, then back down it and up to the flick.
      w:{d:['M19 -72 C19 -50 20 -28 23 -18 C26 -10 33 -11 39 -18 C45 -27 50 -40 57 -48 C61 -53 64 -62 66 -74','M66 -74 C65 -60 66 -40 69 -22 C71 -12 78 -12 84 -17 C92 -26 104 -52 118 -75'],entry:[20,-63],exit:[118,-75]},
      x:{d:['M24 -74 C34 -85 49 -78 49 -55 L42 -22 C33 0 7 -10 14 -27','M84 -74 C74 -85 58 -70 50 -51 L44 -22 C49 2 86 4 101 -24'],entry:[17,-28],exit:[101,-24]},
      y:{native:true,entry:[25,-65],exit:[54,11]},
      z:{d:['M23 -75 C37 -75 55 -75 66 -75 C50 -61 24 -33 18 -16 Q15 -9 28 -12 L66 -12'],entry:[23,-75],exit:[66,-12]}
    };
    // A dot is sewn as a small knot: a tight spiral out from the centre, so
    // two or three links overlap and fill it. Never smaller than a couple
    // of links, however tiny the dot.
    function knot(x,y,radius){
      const r=Math.max(4.5,radius),spiral=[];
      for(let k=0;k<=56;k++){const t=k/56,a=-Math.PI*.6+t*Math.PI*2*2.6,rr=r*(.15+.85*t);spiral.push({x:x+Math.cos(a)*rr,y:y+Math.sin(a)*rr});}
      return spiral;
    }
    // Masters for the other faces, where thinning misreads a glyph. Damion's
    // s is one stroke: over its rounded top, down the diagonal, round the
    // belly and up into the tail; thinning starts mid-terminal and reads it
    // as a hook.
    const fontMasters={
      'Espiritu Script':{
        // The traced s is fine alone, but in a word its entry snapped to the top-left hook (nearest the
        // previous exit) and the connector crossed the gap below it. The hand enters at the bottom tail.
        s:{d:['M40 -71 C38 -64 35 -56 35 -52 C36 -44 40 -34 40 -26 C40 -20 36 -12 31 -3','M35 -52 C32 -50 26 -45 22 -38 C20 -35 18 -32 17 -31','M11 -9 C14 -6 22 -3 31 -3 C40 -3 48 -7 54 -14 C60 -21 66 -30 72 -37'],entry:[11,-9],exit:[72,-37]}
      },
      'Boucherie Cursive':{
        // Thinning stops a stroke width short of each end of the stem; the hand takes it top to foot.
        // The arch leaves the stem where a connector actually lands (y -17), so the three meet at one point.
        n:{d:['M7 -59 C7 -41 6 -22 4 -4','M5 -17 C12 -23 22 -35 30 -46 C36 -52 42 -55 46 -54 C52 -52 51 -42 49 -32 C47 -22 45 -12 48 -7 C51 -2 58 -3 65 -6 C70 -8 75 -14 79 -19'],entry:[5,-17],exit:[79,-19]}
      },
      Damion:{
        s:{d:['M37 -55 C36 -61 24 -62 17 -52 C14 -44 34 -40 48 -32 C58 -26 56 -14 44 -6 C34 0 14 -2 6 -8 C1 -12 3 -18 5 -20'],entry:[14,-50],exit:[5,-10]},
        // Straight up the stem to its very top, then the arch leaves by dipping back down the stem a
        // hair first: that makes the join a hairpin, which the smoothing keeps, where a plain corner
        // would be rounded off and the stem would lose its height. The stem is pinned (`fixed`) because
        // the font's own stem bows slightly and centring would follow it; d wants a straight line.
        n:{d:['M8 -4 C16 -22 23 -40 31 -58','M31 -58 C30 -54 31 -51 36 -50 C44 -51 55 -57 62 -56 C70 -55 69 -45 65 -37 C60 -28 52 -16 54 -6 C56 -1 64 -5 75 -11 C84 -16 95 -24 102 -32'],fixed:[0,1],entry:[8,-4],exit:[102,-32]},
        // The font's g has an open tail; a hand sews it as a loop that
        // comes back up and crosses the stem at the baseline, so the
        // return leg runs deliberately outside the outline.
        g:{d:['M70 -56 C45 -66 22 -56 18 -40 C12 -22 14 -6 28 -6 C40 -6 48 -14 52 -20','M70 -56 C66 -44 58 -28 50 -4 C44 12 32 28 22 46 C12 58 0 44 10 28 C22 6 44 -6 62 -12 C74 -16 90 -26 97 -30'],entry:[72,-56],exit:[97,-30]}
      }
    };
    function sampleStroke(d){
      const tokens=d.match(/[MLCQZ]|-?\d+(?:\.\d+)?/g);let i=0,p={x:0,y:0},first=null;const line=[];
      const point=()=>({x:+tokens[i++],y:+tokens[i++]});
      while(i<tokens.length){const command=tokens[i++];
        if(command==='M'){p=point();first={...p};line.push({...p});}
        else if(command==='L'){p=point();line.push({...p});}
        else if(command==='Z'){p={...first};line.push({...p});}
        else if(command==='C'){
          const a={...p},b=point(),c=point(),e=point(),steps=Math.max(8,Math.ceil((Math.hypot(b.x-a.x,b.y-a.y)+Math.hypot(c.x-b.x,c.y-b.y)+Math.hypot(e.x-c.x,e.y-c.y))/2));
          for(let k=1;k<=steps;k++){const t=k/steps,u=1-t;line.push({x:u*u*u*a.x+3*u*u*t*b.x+3*u*t*t*c.x+t*t*t*e.x,y:u*u*u*a.y+3*u*u*t*b.y+3*u*t*t*c.y+t*t*t*e.y});}p=e;
        }else if(command==='Q'){
          const a={...p},b=point(),e=point(),steps=Math.max(8,Math.ceil((Math.hypot(b.x-a.x,b.y-a.y)+Math.hypot(e.x-b.x,e.y-b.y))/2));
          for(let k=1;k<=steps;k++){const t=k/steps,u=1-t;line.push({x:u*u*a.x+2*u*t*b.x+t*t*e.x,y:u*u*a.y+2*u*t*b.y+t*t*e.y});}p=e;
        }
      }
      return line;
    }
    function makeFontField(text,metrics,layout){
      const pad=32,left=Math.ceil(Math.max(0,metrics.actualBoundingBoxLeft)),ascent=Math.ceil(metrics.actualBoundingBoxAscent),c=document.createElement('canvas');
      c.width=Math.ceil(metrics.actualBoundingBoxRight)+left+pad*2;c.height=ascent+Math.ceil(metrics.actualBoundingBoxDescent)+pad*2;
      const t=applyFont(c.getContext('2d',{willReadFrequently:true}));
      if(layout)layout.forEach(([ch,x])=>t.fillText(ch,pad+left+x,pad+ascent));else t.fillText(text,pad+left,pad+ascent);
      const w=c.width,h=c.height,raw=t.getImageData(0,0,w,h).data,ink=new Uint8Array(w*h),distance=new Float32Array(w*h);
      for(let p=0;p<ink.length;p++){ink[p]=raw[p*4+3]>60?1:0;distance[p]=ink[p]?10000:0;}
      for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){const p=y*w+x;if(ink[p])distance[p]=Math.min(distance[p],distance[p-1]+1,distance[p-w]+1,distance[p-w-1]+1.414,distance[p-w+1]+1.414);}
      for(let y=h-2;y>0;y--)for(let x=w-2;x>0;x--){const p=y*w+x;if(ink[p])distance[p]=Math.min(distance[p],distance[p+1]+1,distance[p+w]+1,distance[p+w-1]+1.414,distance[p+w+1]+1.414);}
      return{w,h,ink,distance,ox:pad+left,oy:pad+ascent};
    }
    function connectStrokes(start,end,field,bounds=null){
      const {w,h,ink,distance,ox,oy}=field;
      const nearest=p=>{const x=Math.round(p.x+ox),y=Math.round(p.y+oy);let best=null,cost=Infinity;
        for(let dy=-8;dy<=8;dy++)for(let dx=-8;dx<=8;dx++){const xx=x+dx,yy=y+dy;if(xx<1||xx>=w-1||yy<1||yy>=h-1||!ink[yy*w+xx])continue;const v=dx*dx+dy*dy;if(v<cost){cost=v;best={x:xx,y:yy};}}return best;
      };
      const a=nearest(start),b=nearest(end);if(!a||!b)return[];
      const x0=Math.max(1,bounds?Math.floor(bounds.x0+ox)-24:Math.min(a.x,b.x)-20),x1=Math.min(w-2,bounds?Math.ceil(bounds.x1+ox)+24:Math.max(a.x,b.x)+20),y0=Math.max(1,bounds?Math.floor(bounds.y0+oy)-24:Math.min(a.y,b.y)-45),y1=Math.min(h-2,bounds?Math.ceil(bounds.y1+oy)+24:Math.max(a.y,b.y)+45),cw=x1-x0+1,ch=y1-y0+1;
      const local=(x,y)=>(y-y0)*cw+x-x0,source=local(a.x,a.y),goal=local(b.x,b.y),cost=new Float64Array(cw*ch).fill(Infinity),parent=new Int32Array(cw*ch).fill(-1),closed=new Uint8Array(cw*ch),heap=[];
      const push=(id,f)=>{let i=heap.length;heap.push({id,f});while(i){const j=(i-1)>>1;if(heap[j].f<=f)break;heap[i]=heap[j];i=j;}heap[i]={id,f};};
      const pop=()=>{const top=heap[0],last=heap.pop();if(heap.length){let i=0;while(i*2+1<heap.length){let j=i*2+1;if(j+1<heap.length&&heap[j+1].f<heap[j].f)j++;if(heap[j].f>=last.f)break;heap[i]=heap[j];i=j;}heap[i]=last;}return top;};
      cost[source]=0;push(source,0);
      while(heap.length){
        const {id}=pop();if(closed[id])continue;closed[id]=1;if(id===goal)break;const x=id%cw+x0,y=Math.floor(id/cw)+y0;
        for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){
          const xx=x+dx,yy=y+dy;if(xx<x0||xx>x1||yy<y0||yy>y1)continue;const p=yy*w+xx;
          let allowed=ink[p];if(!allowed)for(const d of [-w-1,-w,-w+1,-1,1,w-1,w,w+1])if(ink[p+d]){allowed=1;break;}
          if(!allowed)continue;const next=local(xx,yy);if(closed[next])continue;const step=dx&&dy?1.414:1,v=cost[id]+step*(ink[p]?1+6/(distance[p]+1):25);
          if(v<cost[next]){cost[next]=v;parent[next]=id;push(next,v+Math.hypot(xx-b.x,yy-b.y));}
        }
      }
      if(parent[goal]<0)return[];
      const route=[];let id=goal;for(let guard=0;guard<cw*ch;guard++){route.push({x:id%cw+x0-ox,y:Math.floor(id/cw)+y0-oy});if(id===source)break;id=parent[id];if(id<0)return[];}
      route.reverse();route[0]={...start};route[route.length-1]={...end};
      for(let pass=0;pass<8;pass++){const old=route.map(p=>({...p}));for(let i=1;i<route.length-1;i++)route[i]={x:(old[i-1].x+old[i].x*2+old[i+1].x)/4,y:(old[i-1].y+old[i].y*2+old[i+1].y)/4};}
      return route;
    }
    // Ink the word has that no stitch covers: a contextual alternate's own stroke (Espiritu's s after a
    // capital enters through a long hairline the isolated glyph lacks, and the E never touches it, so no
    // join can reach it). The word's skeleton is compared with the pen paths, and any skeleton run
    // farther from every path than the stroke's half-width is stitched on its own. A cheap pre-check on
    // the raw ink gates the thinning, so ordinary words only pay for one distance grid.
    function bareInkPaths(lines,field){
      const {w,h,ink,ox,oy}=field,G=w*h,half=Math.max(2.5,strokeWidth/2),tol=half+2;
      const dt=new Float32Array(G).fill(1e9);
      for(const line of lines)for(const p of line){const x=Math.round(p.x+ox),y=Math.round(p.y+oy);if(x>=0&&x<w&&y>=0&&y<h)dt[y*w+x]=0;}
      for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=y*w+x;let v=dt[i];if(x)v=Math.min(v,dt[i-1]+1);if(y){v=Math.min(v,dt[i-w]+1);if(x)v=Math.min(v,dt[i-w-1]+1.414);if(x<w-1)v=Math.min(v,dt[i-w+1]+1.414);}dt[i]=v;}
      for(let y=h-1;y>=0;y--)for(let x=w-1;x>=0;x--){const i=y*w+x;let v=dt[i];if(x<w-1)v=Math.min(v,dt[i+1]+1);if(y<h-1){v=Math.min(v,dt[i+w]+1);if(x<w-1)v=Math.min(v,dt[i+w+1]+1.414);if(x)v=Math.min(v,dt[i+w-1]+1.414);}dt[i]=v;}
      let far=0;for(let i=0;i<G;i++)if(ink[i]&&dt[i]>2*half+2)far++;
      if(far<12)return[];
      const a=Uint8Array.from(ink),offsets=[-w,-w+1,1,w+1,w,w-1,-1,-w-1],pixels=[];for(let p=w+1;p<G-w-1;p++)if(a[p])pixels.push(p);
      let changed=true;
      for(let it=0;changed&&it<120;it++){changed=false;for(let pass=0;pass<2;pass++){const del=[];for(const p of pixels){if(!a[p])continue;const b=offsets.map(o=>a[p+o]||0);let count=0,tr=0;for(let k=0;k<8;k++){count+=b[k];if(!b[k]&&b[(k+1)%8])tr++;}if(count<2||count>6||tr!==1)continue;if(pass===0?(b[0]*b[2]*b[4]===0&&b[2]*b[4]*b[6]===0):(b[0]*b[2]*b[6]===0&&b[0]*b[4]*b[6]===0))del.push(p);}if(del.length)changed=true;for(const p of del)a[p]=0;}}
      const bare=new Uint8Array(G);let count=0;for(const p of pixels)if(a[p]&&dt[p]>tol){bare[p]=1;count++;}
      if(count<12)return[];
      const nb=p=>offsets.map(o=>p+o).filter(q=>q>=0&&q<G&&bare[q]),visited=new Uint8Array(G),out=[];
      const walk=start=>{const line=[];let cur=start;visited[cur]=1;for(;;){line.push({x:cur%w-ox,y:Math.floor(cur/w)-oy});const next=nb(cur).filter(q=>!visited[q]);if(!next.length)break;const straight=q=>Math.abs(q-cur)===1||Math.abs(q-cur)===w?0:1;next.sort((p,q)=>straight(p)-straight(q));cur=next[0];visited[cur]=1;}return line;};
      const ends=[];for(const p of pixels)if(bare[p]&&nb(p).length===1)ends.push(p);
      for(const e of ends)if(!visited[e]){const line=walk(e);if(line.length>=12)out.push(line);}
      for(const p of pixels)if(bare[p]&&!visited[p]){const line=walk(p);if(line.length>=12)out.push(line);}
      return out;
    }
    function closestStrokePoint(point,lines){
      let best=Infinity,closest={...point},bestLine=null,bestIndex=0;
      for(const line of lines)for(let j=1;j<line.length;j++){
        const a=line[j-1],b=line[j],dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((point.x-a.x)*dx+(point.y-a.y)*dy)/(dx*dx+dy*dy||1))),q={x:a.x+t*dx,y:a.y+t*dy},d=(point.x-q.x)**2+(point.y-q.y)**2;
        if(d<best){best=d;closest=q;bestLine=line;bestIndex=j;}
      }
      return{point:closest,distance:Math.sqrt(best),line:bestLine,index:bestIndex};
    }
    function penArc(line){
      const s=[0];for(let i=1;i<line.length;i++)s.push(s[i-1]+Math.hypot(line[i].x-line[i-1].x,line[i].y-line[i-1].y));
      return{line,s,length:s[s.length-1]};
    }
    function penPoint(arc,s){
      if(s<=0)return{...arc.line[0]};if(s>=arc.length)return{...arc.line[arc.line.length-1]};
      let lo=0,hi=arc.s.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(arc.s[mid]<s)lo=mid;else hi=mid;}
      const t=(s-arc.s[lo])/(arc.s[hi]-arc.s[lo]||1),a=arc.line[lo],b=arc.line[hi];return{x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};
    }
    // Treat joins as a pen-path graph. Split at real contacts, then pair the
    // most continuous directions. This preserves genuine stems and counters
    // while letting a stitch run continue across a letter/connector seam.
    function joinPenPaths(lines){
      lines=lines.filter(line=>line.length>1);const ends=lines.flatMap(line=>[line[0],line[line.length-1]]),edges=[];
      for(const line of lines){
        const arc=penArc(line),cuts=[0,arc.length];
        for(const p of ends)for(let j=1;j<line.length;j++){
          const a=line[j-1],b=line[j],dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy||1)));
          if(Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)>.35)continue;
          const s=arc.s[j-1]+t*(arc.s[j]-arc.s[j-1]);if(s>1&&s<arc.length-1)cuts.push(s);
        }
        cuts.sort((a,b)=>a-b);const unique=cuts.filter((s,i)=>!i||s-cuts[i-1]>.8);
        for(let i=1;i<unique.length;i++){
          const from=unique[i-1],to=unique[i],part=[penPoint(arc,from)];
          for(let j=1;j<line.length-1;j++)if(arc.s[j]>from&&arc.s[j]<to)part.push(line[j]);
          part.push(penPoint(arc,to));if(to-from>.8)edges.push(part);
        }
      }
      const nodes=[],incidences=[],pairs=new Map();
      edges.forEach((line,edge)=>[0,1].forEach(end=>{
        const p=end?line[line.length-1]:line[0];let node=nodes.find(n=>Math.hypot(n.p.x-p.x,n.p.y-p.y)<.6);
        if(!node){node={p,ends:[]};nodes.push(node);}const arc=penArc(line),q=penPoint(arc,end?Math.max(0,arc.length-7):Math.min(7,arc.length)),length=Math.hypot(q.x-p.x,q.y-p.y)||1;
        const incidence={id:edge*2+end,edge,end,dx:(q.x-p.x)/length,dy:(q.y-p.y)/length};node.ends.push(incidence);incidences.push(incidence);
      }));
      for(const node of nodes){
        const remaining=[...node.ends];while(remaining.length>1){
          let best=1.01,pair=null;for(let i=0;i<remaining.length;i++)for(let j=i+1;j<remaining.length;j++){
            const a=remaining[i],b=remaining[j],dot=a.dx*b.dx+a.dy*b.dy;if(dot<best){best=dot;pair=[i,j];}
          }
          if(!pair||best>.45)break;const b=remaining.splice(pair[1],1)[0],a=remaining.splice(pair[0],1)[0];pairs.set(a.id,b.id);pairs.set(b.id,a.id);
        }
      }
      const used=new Set(),result=[];
      const trace=start=>{let current=start,line=[];
        while(!used.has(current>>1)){
          const edge=current>>1,end=current%2,part=end?[...edges[edge]].reverse():edges[edge];used.add(edge);line.push(...(line.length?part.slice(1):part));
          const next=pairs.get(edge*2+1-end);if(next===undefined)break;current=next;
        }
        if(line.length>1)result.push(line);
      };
      for(const end of incidences)if(!pairs.has(end.id)&&!used.has(end.edge))trace(end.id);
      for(let edge=0;edge<edges.length;edge++)if(!used.has(edge))trace(edge*2);
      return result;
    }
    // Arc-length sampling followed by quadratic corner cutting gives the pen
    // path rounded, tangent-continuous turns, independent of thread width.
    // Only this one center path is smoothed; no glyph area is filled.
    function smoothPenPath(line,step=10){
      const arc=penArc(line);if(arc.length<9)return line;
      const closed=Math.hypot(line[0].x-line[line.length-1].x,line[0].y-line[line.length-1].y)<.6;
      const count=Math.max(3,Math.ceil(arc.length/step));let points=[];
      for(let i=0;i<=count;i++)points.push(penPoint(arc,arc.length*i/count));if(closed)points.pop();
      for(let pass=0;pass<3;pass++){
        const next=closed?[]:[points[0]],n=points.length,segments=closed?n:n-1;
        for(let i=0;i<segments;i++){const a=points[i],b=points[(i+1)%n];next.push({x:a.x*.75+b.x*.25,y:a.y*.75+b.y*.25},{x:a.x*.25+b.x*.75,y:a.y*.25+b.y*.75});}
        if(!closed)next.push(points[n-1]);points=next;
      }
      if(closed)points.push({...points[0]});return points;
    }
    // A branch must keep touching its main stroke after that stroke moves.
    // Ease the correction over the last `reach` font units so snapping the
    // contact cannot introduce a new kink or a tiny unstitched gap. Contacts
    // are found on the original lines, measured on `reference`, applied to `result`.
    function snapContacts(lines,reference,result,reach,limit){
      lines.forEach((line,index)=>[0,1].forEach(end=>{
        const p=end?line[line.length-1]:line[0];let contact=null,best=Infinity;
        lines.forEach((other,j)=>{
          if(j===index||closestStrokePoint(p,[other]).distance>.65)return;
          const hit=closestStrokePoint(p,[reference[j]]);if(hit.distance<best){best=hit.distance;contact=hit.point;}
        });
        if(!contact||best>limit)return;
        const current=result[index],arc=penArc(reference[index]),fade=Math.min(reach,arc.length/2),q=current[end?current.length-1:0],offset={x:contact.x-q.x,y:contact.y-q.y};
        for(let i=0;i<current.length;i++){
          const distance=end?arc.length-arc.s[i]:arc.s[i];if(distance>=fade||!fade)continue;
          const t=1-distance/fade,weight=t*t*(3-2*t);current[i].x+=offset.x*weight;current[i].y+=offset.y*weight;
        }
      }));
    }
    function smoothPenPaths(lines,step){
      const smoothed=lines.map(line=>smoothPenPath(line,step)),result=smoothed.map(line=>line.map(p=>({...p})));
      snapContacts(lines,smoothed,result,12,4);
      return result;
    }
    // Recenter every pen path on the rasterized ink of the whole word. Each
    // point slides along its normal to the middle of the stroke it sits in.
    // Where two brush strokes overlap, that span is wider than one stroke,
    // so the point keeps to its own side: half a stroke in from the nearer
    // edge. Branch ends are held still, then eased back onto their stems.
    function centerPenPaths(lines,field){
      const {w,h,ink,ox,oy}=field;
      const inside=(x,y)=>{const ix=Math.round(x+ox),iy=Math.round(y+oy);return ix>0&&ix<w-1&&iy>0&&iy<h-1&&ink[iy*w+ix]===1;};
      const isClosed=line=>line.length>3&&Math.hypot(line[0].x-line[line.length-1].x,line[0].y-line[line.length-1].y)<.6;
      const normals=line=>{
        const n=line.length,closed=isClosed(line),m=n-1;
        return line.map((p,i)=>{const a=closed?line[((i-3)%m+m)%m]:line[Math.max(0,i-3)],b=closed?line[(i+3)%m]:line[Math.min(n-1,i+3)],chord=Math.hypot(b.x-a.x,b.y-a.y),len=chord||1;return{nx:-(b.y-a.y)/len,ny:(b.x-a.x)/len,chord};});
      };
      const span=(p,nn)=>{let l=0,r=0;while(l<60&&inside(p.x-nn.nx*l,p.y-nn.ny*l))l+=.25;while(r<60&&inside(p.x+nn.nx*r,p.y+nn.ny*r))r+=.25;return{l,r};};
      const result=lines.map(line=>line.map(p=>({...p})));
      // A stroke's own width is its thinnest nearby span: a brush stroke
      // widens slowly, an overlap suddenly. Pacifico's upstrokes run much
      // thinner than its downstrokes, so a median would let a merged valley
      // pass for a single stroke. The word-wide median is only a fallback.
      const spans=result.map(line=>{const nn=normals(line);return line.map((p,i)=>{const s=span(p,nn[i]);return s.l+s.r;});});
      const sorted=spans.flat().filter(s=>s>0&&s<120).sort((a,b)=>a-b);if(!sorted.length)return result;const nominal=strokeWidth=sorted[sorted.length>>1];
      const widths=spans.map(line=>line.map((s,i)=>{
        const near=[];for(let j=Math.max(0,i-16);j<=Math.min(line.length-1,i+16);j++)if(line[j]>0)near.push(line[j]);
        near.sort((a,b)=>a-b);return near.length?Math.min(near[Math.floor(near.length*.15)],nominal*1.15):nominal;
      }));
      // A point is measured only where that is reliable: inside a single
      // stroke, with both edges within a stroke of it (a ray that runs
      // lengthwise down a merged stem is no cross-section), with a
      // well-defined tangent. Across overlaps and merges the
      // shift is interpolated from the reliable neighbours, so those
      // stretches move with their surroundings and keep the hand-tuned pen
      // topology. Around a hairpin apex (a vanishing chord) both legs share
      // one merged blob; that turn moves rigidly, by the mean of its legs'
      // shifts, so the pen's turn keeps its drawn width instead of closing
      // into a knot. Ends move too, so a join cannot hook.
      // A hairpin is wherever the path doubles back on itself within a
      // stroke's width: the apex, and both legs for as long as they share
      // one merged blob (the first hump of an m is one stroke wide). Two
      // points are on opposite legs when they are close in space but the
      // path runs the other way there; neighbours along a curve never are.
      const hairpins=result.map(line=>{
        const n=line.length,flags=new Uint8Array(n),reach=nominal*.6,nn=normals(line),cells=new Map();
        nn.forEach((v,i)=>{if(v.chord<2)for(let k=Math.max(0,i-3);k<=Math.min(n-1,i+3);k++)flags[k]=1;});
        const key=(x,y)=>Math.floor(x/reach)*65536+Math.floor(y/reach);
        line.forEach((p,i)=>{const k=key(p.x,p.y);(cells.get(k)||cells.set(k,[]).get(k)).push(i);});
        line.forEach((p,i)=>{for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++)for(const j of cells.get(key(p.x+dx*reach,p.y+dy*reach))||[]){
          if(j<i+4||Math.hypot(p.x-line[j].x,p.y-line[j].y)>=reach)continue;
          if(nn[i].nx*nn[j].nx+nn[i].ny*nn[j].ny<-.5)flags[i]=flags[j]=1;
        }});
        return flags;
      });
      // Once the smoothing passes are over, stop as soon as a pass moves
      // nothing by more than a twentieth of a pixel.
      let maxShift=0;
      for(let pass=0;pass<10&&!(pass>7&&maxShift<.05);pass++){maxShift=0;result.forEach((line,index)=>{
        if(line.length<4)return;const nn=normals(line),closed=isClosed(line),n=line.length,hairpin=hairpins[index];
        const shift=line.map((p,i)=>{
          if(p.fixed)return{x:0,y:0};
          if(hairpin[i]||!inside(p.x,p.y))return null;
          const {l,r}=span(p,nn[i]);if(l+r>widths[index][i]*1.3||Math.max(l,r)>nominal*.9)return null;
          const d=Math.max(-2,Math.min(2,(r-l)/2));return{x:nn[i].nx*d,y:nn[i].ny*d};
        });
        const measured=shift.map(s=>!!s);if(!measured.includes(true))return;
        for(let i=0;i<n;){
          if(shift[i]){i++;continue;}
          let j=i;while(j<n&&!shift[j])j++;
          const sa=i>0?shift[i-1]:null,sb=j<n?shift[j]:null;let rigid=!sa||!sb;
          for(let k=i;k<j;k++)if(hairpin[k])rigid=true;
          if(rigid){
            const v=sa&&sb?{x:(sa.x+sb.x)/2,y:(sa.y+sb.y)/2}:(sa||sb);
            for(let k=i;k<j;k++)shift[k]=v;
            for(let k=0;k<8;k++)for(const q of [i-1-k,j+k]){
              if(q<0||q>=n||!measured[q]||line[q].fixed)continue;const u=(8-k)/9;
              shift[q]={x:shift[q].x*(1-u)+v.x*u,y:shift[q].y*(1-u)+v.y*u};
            }
          }else for(let k=i;k<j;k++){const t=(k-i+1)/(j-i+1);shift[k]={x:sa.x+(sb.x-sa.x)*t,y:sa.y+(sb.y-sa.y)*t};}
          i=j;
        }
        line.forEach((p,i)=>{p.x+=shift[i].x;p.y+=shift[i].y;maxShift=Math.max(maxShift,Math.abs(shift[i].x),Math.abs(shift[i].y));});
        if(closed)line[line.length-1]={...line[0]};
        if(pass<7){const old=line.map(p=>({...p}));for(let i=1;i<line.length-1;i++){if(line[i].fixed)continue;line[i].x=(old[i-1].x+old[i].x*2+old[i+1].x)/4;line[i].y=(old[i-1].y+old[i].y*2+old[i+1].y)/4;}}
      });}
      snapContacts(lines,result.map(line=>line.map(p=>({...p}))),result,12,8);
      return result;
    }
    // A monogram is laid out by ink, not by advance width: each initial is slid along until the
    // closest its ink comes to the previous letter's ink, on any row, is INITIALS_GAP. That reads
    // as the same spacing in every face, whatever its side bearings or swashes.
    function monogramLayout(measure){
      const chars=[...state.text].filter(ch=>ch.trim()),layout=[],right=new Map(),prevInk=[];let bbox=null,prevStroke=0;
      for(const ch of chars){
        const m=measure.measureText(ch),f=makeFontField(ch,m),rows=new Map();
        // Each row's ink runs; the outer edges are pulled in to the middle of their stroke (capped at the
        // face's own stroke width, so a crossbar still ends where it ends) because the chain is sewn down
        // the centreline at its own width: Pacifico's fat strokes and Petit's hairlines stitch the same.
        const rowRuns=[],widths=[];for(let y=0;y<f.h;y++){const runs=[];for(let x=0;x<f.w;x++)if(f.ink[y*f.w+x]){if(runs.length&&runs[runs.length-1][1]===x-1)runs[runs.length-1][1]=x;else runs.push([x,x]);}if(runs.length){rowRuns.push([y,runs]);for(const [a,b] of runs)if(b-a<60)widths.push(b-a+1);}}
        widths.sort((a,b)=>a-b);const stroke=widths[widths.length>>1]||1;
        for(const [y,runs] of rowRuns){const [a0,b0]=runs[0],[a1,b1]=runs[runs.length-1];rows.set(y-f.oy,[a0+Math.min(b0-a0+1,stroke)/2-f.ox,b1-Math.min(b1-a1+1,stroke)/2-f.ox]);}
        let x=0;if(layout.length){x=-Infinity;for(const [y,[lo]] of rows){const r=right.get(y);if(r!==undefined)x=Math.max(x,r+INITIALS_GAP-lo);}if(!isFinite(x)){const b=bbox;x=b.right+INITIALS_GAP-Math.min(...[...rows.values()].map(v=>v[0]));}}
        // Then in two dimensions: a crossbar sweeping over the next letter's swash is as close as a stem
        // beside it. The letter slides on until no stitch of it comes within `need` of the earlier ink.
        const pts=[];for(const [y,runs] of rowRuns){if(y%2)continue;for(const [a,b] of runs)for(let px=a;px<=b;px+=2)pts.push([px-f.ox,y-f.oy]);}
        if(layout.length&&prevInk.length){
          const need=Math.max(2,STITCH_GAP+CHAIN_WIDTH-(stroke+prevStroke)/2),G=2000,GH=600,OX=400,OY=350,dt=new Float32Array(G*GH).fill(1e9);
          for(const [px,py] of prevInk){const gx=px+OX,gy=py+OY;if(gx>=0&&gx<G&&gy>=0&&gy<GH)dt[gy*G+gx]=0;}
          for(let y=0;y<GH;y++)for(let gx=0;gx<G;gx++){const i=y*G+gx;let v=dt[i];if(gx)v=Math.min(v,dt[i-1]+1);if(y){v=Math.min(v,dt[i-G]+1);if(gx)v=Math.min(v,dt[i-G-1]+1.414);if(gx<G-1)v=Math.min(v,dt[i-G+1]+1.414);}dt[i]=v;}
          for(let y=GH-1;y>=0;y--)for(let gx=G-1;gx>=0;gx--){const i=y*G+gx;let v=dt[i];if(gx<G-1)v=Math.min(v,dt[i+1]+1);if(y<GH-1){v=Math.min(v,dt[i+G]+1);if(gx<G-1)v=Math.min(v,dt[i+G+1]+1.414);if(gx)v=Math.min(v,dt[i+G-1]+1.414);}dt[i]=v;}
          const minAt=xx=>{let m=1e9;for(const [px,py] of pts){const gx=Math.round(px+xx)+OX,gy=py+OY;if(gx<0||gx>=G||gy<0||gy>=GH)continue;const v=dt[gy*G+gx];if(v<m)m=v;}return m;};
          let guard=0;while(minAt(x)<need&&guard++<240)x+=1;
        }
        layout.push([ch,x]);for(const [y,[,hi]] of rows)right.set(y,Math.max(right.get(y)??-Infinity,x+hi));
        for(const [px,py] of pts)prevInk.push([Math.round(px+x),py]);prevStroke=stroke;
        const l=x-m.actualBoundingBoxLeft,r=x+m.actualBoundingBoxRight;bbox=bbox?{left:Math.min(bbox.left,l),right:Math.max(bbox.right,r),ascent:Math.max(bbox.ascent,m.actualBoundingBoxAscent),descent:Math.max(bbox.descent,m.actualBoundingBoxDescent)}:{left:l,right:r,ascent:m.actualBoundingBoxAscent,descent:m.actualBoundingBoxDescent};
      }
      return{layout,metrics:{width:bbox.right,actualBoundingBoxLeft:-bbox.left,actualBoundingBoxRight:bbox.right,actualBoundingBoxAscent:bbox.ascent,actualBoundingBoxDescent:bbox.descent}};
    }
    let monogram=null;
    function makeGeometry(){
      paths=[];geometry=null;monogram=null;if(!state.text.trim())return;
      const measure=applyFont(document.createElement('canvas').getContext('2d'));
      if(initials())monogram=monogramLayout(measure);
      const field=monogram?makeFontField(state.text,monogram.metrics,monogram.layout):makeFontField(state.text,measure.measureText(state.text));let prefix='',previous=null,placed=0;
      for(const [index,character] of [...state.text].entries()){
        const metrics=measure.measureText(character),origin=monogram?(character.trim()?monogram.layout[placed][1]:0):measure.measureText(prefix+character).width-metrics.width;prefix+=character;
        if(!character.trim()){previous=null;continue;}placed++;
        const last=!(state.text[index+1]||'').trim()||!connected();
        // The hand-traced masters belong to Pacifico; every other face is
        // thinned from its own ink and then recentred like the rest.
        const master=fonts[state.font].family==='Pacifico'?strokeMasters[character]:(fontMasters[fonts[state.font].family]||{})[character];
        const local=master&&!master.native?master.d.map((d,i)=>{const line=sampleStroke(d);if(master.fixed&&master.fixed.includes(i))line.forEach(q=>q.fixed=true);return line;}).concat(master.dot?[knot(master.dot[0],master.dot[1],5)]:[]):wordCenterlines(character,metrics);
        // A master's `tail` is where the pen stops when no letter follows:
        // a joined stroke leaves at the exit, a final one runs on to the tail.
        if(master&&master.tail&&last){const end=p=>Math.hypot(p.x-master.exit[0],p.y-master.exit[1]);const near=line=>Math.min(end(line[0]),end(line[line.length-1]));const line=local.reduce((a,b)=>near(b)<near(a)?b:a);if(end(line[0])<end(line[line.length-1]))line.reverse();line.push({x:master.tail[0],y:master.tail[1]});}
        // A stroke the glyph has on its own but the word does not (a contextual alternate dropped it,
        // as Espiritu drops the hook of an s after a capital) would stitch into bare cloth; leave it out.
        const onInk=(x,y)=>{const ix=Math.round(x+field.ox),iy=Math.round(y+field.oy);return ix>=0&&ix<field.w&&iy>=0&&iy<field.h&&field.ink[iy*field.w+ix]===1;};
        const glyphPaths=local.map(line=>line.map(p=>({...p,x:p.x+origin}))).filter(line=>line.filter(p=>onInk(p.x,p.y)).length>=line.length*.5);
        if(!glyphPaths.length){previous=null;continue;}
        let entry,exit;
        if(master){entry={x:master.entry[0]+origin,y:master.entry[1]};exit={x:master.exit[0]+origin,y:master.exit[1]};}
        else{
          const points=glyphPaths.flat();entry=points.reduce((a,b)=>b.x+Math.abs(b.y+25)*.2<a.x+Math.abs(a.y+25)*.2?b:a,points[0]);
          exit=points.reduce((a,b)=>b.x-Math.abs(b.y+15)*.8>a.x-Math.abs(a.y+15)*.8?b:a,points[0]);
        }
        entry=closestStrokePoint(entry,glyphPaths).point;exit=closestStrokePoint(exit,glyphPaths).point;
        if(previous&&entry&&connected()){
          const points=previous.paths.concat(glyphPaths).flat(),bounds={x0:Math.min(...points.map(p=>p.x)),x1:Math.max(...points.map(p=>p.x)),y0:Math.min(...points.map(p=>p.y)),y1:Math.max(...points.map(p=>p.y))};
          // The entry is wherever the word's own ink leads from the previous exit: every end of this
          // letter's strokes is tried, and the route that covers the most ink nothing else stitches wins
          // (shortest on a tie). Espiritu's s after a capital enters at the top of its body through a
          // long hairline, not at the bottom curl the position heuristic picks.
          const unstitched=route=>route.filter(p=>closestStrokePoint(p,glyphPaths).distance>5.5&&closestStrokePoint(p,previous.paths).distance>2.5).length;
          const candidates=[entry];for(const line of glyphPaths)for(const p of [line[0],line[line.length-1]])if(!candidates.some(c=>Math.hypot(c.x-p.x,c.y-p.y)<3))candidates.push(p);
          let best=null;
          for(const c of candidates){const route=connectStrokes(previous.exit,c,field,bounds);if(!route.length)continue;const score=unstitched(route);if(!best||score>best.score+2||(Math.abs(score-best.score)<=2&&route.length<best.route.length))best={c,route,score};}
          if(best)entry=best.c;
          let connector=best?best.route:connectStrokes(previous.exit,entry,field,bounds);
          // Stop as soon as the connector meets the next pen stroke. Drawing
          // the rest of a brush-font join would duplicate its downstroke.
          for(let k=1;k<connector.length;k++){
            const p=connector[k];if(p.x<origin-5)continue;
            const hit=closestStrokePoint(p,glyphPaths);
            if(hit.distance<5.5){connector=connector.slice(0,k);connector.push(hit.point);
            // The stroke's loose head behind the meeting point would be stitched twice, doubling back
            // into a knot (Petit's a runs on into the z's top bar); a short head is trimmed to the join.
            const L=hit.line;if(L&&hit.index>0){const q=hit.point,arc=(i0,i1)=>{let t=0;for(let i=i0+1;i<=i1;i++)t+=Math.hypot(L[i].x-L[i-1].x,L[i].y-L[i-1].y);return t;};
              const head=arc(0,hit.index-1)+Math.hypot(q.x-L[hit.index-1].x,q.y-L[hit.index-1].y),tail=arc(hit.index,L.length-1)+Math.hypot(L[hit.index].x-q.x,L[hit.index].y-q.y);
              if(head>.5&&head<=15&&L.length-hit.index>=2){L.splice(0,hit.index);L.unshift({...q});}
              else if(tail>.5&&tail<=15&&hit.index>=2){L.splice(hit.index);L.push({...q});}}
            break;}
          }
          // Discard any initial route that merely retraces the previous
          // glyph, then begin exactly on its last contact with the join.
          let leave=0,from=connector[0];
          for(let k=0;k<connector.length-1;k++){
            const hit=closestStrokePoint(connector[k],previous.paths);
            if(hit.distance<2.5){leave=k;from=hit.point;}
          }
          // A very short join can be trimmed down to its start; keep a
          // straight segment to the entry so the chain never breaks.
          if(connector.length>1){connector=[from,...connector.slice(leave+1)];if(connector.length<2)connector.push({...entry});paths.push(connector);}
        }
        paths.push(...glyphPaths);previous={exit,paths:glyphPaths};
      }
      // Corner cutting is sampled relative to the stroke, so a tight turn in
      // a fine monoline face is rounded no more than one in a brush face.
      paths=joinPenPaths(paths);if(!connected())trimOverlaps(paths,4.5);if(fonts[state.font].extendEnds)extendEnds(paths,field);paths=centerPenPaths(paths,field);paths.push(...bareInkPaths(paths,field));paths=smoothPenPaths(paths,Math.max(3,Math.min(10,strokeWidth*.42)));
      let x0=Infinity,y0=Infinity,x1=-Infinity,y1=-Infinity;for(const line of paths)for(const p of line){x0=Math.min(x0,p.x);x1=Math.max(x1,p.x);y0=Math.min(y0,p.y);y1=Math.max(y1,p.y);}
      // Optical centring: a heavy capital at one end and a thin flick at the other make a box-centred
      // word look shifted, so the centre is taken halfway between the box centre and the ink centroid.
      if(paths.length){let sx=0,n=0;paths.forEach(l=>l.forEach(p=>{sx+=p.x;n++;}));geometry={cx:((x0+x1)/2+sx/n)/2,cy:(y0+y1)/2,width:x1-x0,height:y1-y0};}
    }
    // A letter's thinned skeleton depends only on the face and the
    // character, never on its neighbours, so it is traced once per face
    // and reused. Joins, centring and the fit still run on the whole word.
    const skeletons=new Map();
    // Thinning stops about half a stroke width short of every stroke end. For a
    // monoline face the hand clearly runs to the edge of the ink, so once the
    // connectors are joined, each end still open walks on through the ink, a unit
    // at a time, nudged back to the middle of the stroke so a curling flick is
    // followed round. The stroke's own width is measured a little way back from
    // the end; an end that already sits in a wider blob is a junction with another
    // stroke and is left alone, and the walk stops as soon as the ink widens, runs
    // out, or has gone a stroke width.
    function extendEnds(lines,field){
      const {w,h,ink,ox,oy}=field,inside=(x,y)=>{const ix=Math.round(x+ox),iy=Math.round(y+oy);return ix>=0&&ix<w&&iy>=0&&iy<h&&ink[iy*w+ix]===1;};
      const span=(x,y,nx,ny)=>{let l=0,r=0;while(l<24&&inside(x-nx*l,y-ny*l))l+=.5;while(r<24&&inside(x+nx*r,y+ny*r))r+=.5;return{l,r};};
      // Two ends that already meet (a join landing on the next stroke, or one stroke of a letter running into
      // the next) are left alone: walking both on would stitch the same ink twice and tie a knot (Petit a→z).
      const ends=[];for(const l of lines)if(l.length)ends.push({line:l,x:l[0].x,y:l[0].y},{line:l,x:l[l.length-1].x,y:l[l.length-1].y});
      for(const line of lines){
        if(line.length<24||Math.hypot(line[0].x-line[line.length-1].x,line[0].y-line[line.length-1].y)<1)continue;
        for(const side of [0,1]){
          const at=i=>side?line[line.length-1-i]:line[i];
          {const e0=at(0);if(ends.some(q=>q.line!==line&&Math.hypot(q.x-e0.x,q.y-e0.y)<4))continue;}
          let own=Infinity;for(let i=6;i<=18;i+=3){const a=at(i+1),b=at(i-1),q=at(i),l=Math.hypot(b.x-a.x,b.y-a.y)||1,sp=span(q.x,q.y,-(b.y-a.y)/l,(b.x-a.x)/l);if(sp.l+sp.r>0)own=Math.min(own,sp.l+sp.r);}
          if(!isFinite(own))continue;
          const e=at(0),b=at(6);let tx=e.x-b.x,ty=e.y-b.y;const len=Math.hypot(tx,ty)||1;tx/=len;ty/=len;
          const s0=span(e.x,e.y,-ty,tx);if(s0.l+s0.r>own*1.4)continue;
          const added=[];let x=e.x,y=e.y;
          for(let step=0;step<own;step++){
            let qx=x+tx,qy=y+ty;if(!inside(qx,qy))break;
            const nx=-ty,ny=tx,sp=span(qx,qy,nx,ny);if(sp.l+sp.r>own*1.4)break;
            const c=(sp.r-sp.l)/4;qx+=nx*c;qy+=ny*c;
            let dx=qx-x,dy=qy-y;const dl=Math.hypot(dx,dy)||1;tx=tx*.7+dx/dl*.3;ty=ty*.7+dy/dl*.3;const tl=Math.hypot(tx,ty)||1;tx/=tl;ty/=tl;
            added.push({x:qx,y:qy});x=qx;y=qy;
          }
          // The pen's own width covers the last of the ink; stop a little short of the edge.
          added.splice(Math.max(0,added.length-Math.round(own*.2)));
          if(added.length<2)continue;
          if(side)line.push(...added);else line.unshift(...added.reverse());
        }
      }
    }
    // An unjoined face is thinned letter by letter, so where tight tracking runs one letter's stroke on
    // into the next (Petit's a-tail into the z's top bar) both ends are stitched along the same ink and the
    // chain doubles back into a knot. A stroke end that runs along another stroke is cut back (at most 15
    // units) to where they first meet, and snapped onto the other stroke so the two touch exactly once.
    function trimOverlaps(lines,tol){
      for(const line of lines){if(line.length<8)continue;const others=lines.filter(l=>l!==line);if(!others.length)continue;
        for(const side of [0,1]){const idx=i=>side?line.length-1-i:i;let cut=0,len=0,hit=null;
          for(let i=0;i<line.length-4;i++){const p=line[idx(i)],h=closestStrokePoint(p,others);if(h.distance>tol)break;if(i>0)len+=Math.hypot(p.x-line[idx(i-1)].x,p.y-line[idx(i-1)].y);if(len>15)break;cut=i;hit=h;}
          if(cut<1||!hit)continue;const snap={...hit.point};
          if(side){line.splice(line.length-cut);line[line.length-1]=snap;}else{line.splice(0,cut);line[0]=snap;}
        }
      }
    }
    function wordCenterlines(character,metrics){
      const key=fonts[state.font].family+'|'+character;
      if(!skeletons.has(key))skeletons.set(key,traceGlyph(character,metrics));
      return skeletons.get(key).map(line=>line.map(p=>({...p})));
    }
    function traceGlyph(character,metrics){
      const pad=24,left=Math.ceil(Math.max(0,metrics.actualBoundingBoxLeft)),right=Math.ceil(Math.max(0,metrics.actualBoundingBoxRight));
      const ascent=Math.ceil(metrics.actualBoundingBoxAscent),descent=Math.ceil(metrics.actualBoundingBoxDescent);
      const c=document.createElement('canvas');c.width=left+right+pad*2;c.height=ascent+descent+pad*2;
      const m=applyFont(c.getContext('2d',{willReadFrequently:true}));m.fillText(character,pad+left,pad+ascent);
      const w=c.width,h=c.height,data=m.getImageData(0,0,w,h).data,a=new Uint8Array(w*h),pixels=[];
      for(let p=0;p<a.length;p++)if(data[p*4+3]>100){a[p]=1;pixels.push(p);}
      // Contextual cursive shaping must be rasterized as a whole word. Close
      // only tiny enclosed pores at brush joins, which otherwise generate
      // false loops in the medial axis. Real letter counters stay open: a
      // pore is judged against the stroke, so a monoline face's small loop
      // counter (a sixth of a Pacifico stroke across) is never filled.
      const pre=Float32Array.from(a,v=>v?10000:0);
      for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){const p=y*w+x;if(a[p])pre[p]=Math.min(pre[p],pre[p-1]+1,pre[p-w]+1);}
      for(let y=h-2;y>0;y--)for(let x=w-2;x>0;x--){const p=y*w+x;if(a[p])pre[p]=Math.min(pre[p],pre[p+1]+1,pre[p+w]+1);}
      const preHalves=[];for(const p of pixels)preHalves.push(pre[p]);preHalves.sort((x,y)=>x-y);const preHalf=preHalves.length?preHalves[preHalves.length>>1]:12;
      const poreMax=Math.min(9,preHalf*.75);
      const holesSeen=new Uint8Array(a.length);
      for(let start=0;start<a.length;start++){
        if(a[start]||holesSeen[start])continue;
        const stack=[start],hole=[];holesSeen[start]=1;let border=false,x0=w,y0=h,x1=0,y1=0;
        while(stack.length){const p=stack.pop(),x=p%w,y=Math.floor(p/w);hole.push(p);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);if(!x||!y||x===w-1||y===h-1)border=true;
          for(const d of [-w,1,w,-1]){const q=p+d;if(q>=0&&q<a.length&&!a[q]&&!holesSeen[q]){holesSeen[q]=1;stack.push(q);}}
        }
        if(!border&&hole.length<110&&Math.min(x1-x0,y1-y0)<poreMax)for(const p of hole){a[p]=1;pixels.push(p);}
      }
      const marks=[],seen=new Uint8Array(a.length),offsets=[-w,-w+1,1,w+1,w,w-1,-1,-w-1];
      for(const start of pixels){
        if(seen[start])continue;const stack=[start],component=[];seen[start]=1;
        let x0=w,y0=h,x1=0,y1=0;
        while(stack.length){const p=stack.pop(),x=p%w,y=Math.floor(p/w);component.push(p);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);
          for(const d of offsets)if(a[p+d]&&!seen[p+d]){seen[p+d]=1;stack.push(p+d);}
        }
        if(x1-x0<43&&y1-y0<43&&component.length>5){
          // A hollow mark (a ring-shaped i-dot) is stitched as one loop
          // along the ring's own centreline, measured on the original ink
          // before its pore was filled; a solid dot keeps its short tick.
          const cx=Math.round((x0+x1)/2),cy=Math.round((y0+y1)/2),inked=(x,y)=>data[(y*w+x)*4+3]>100;let ring=0;
          if(!inked(cx,cy)){let ri=0,ro=0;while(cx+ri<w-1&&!inked(cx+ri,cy))ri++;ro=ri;while(cx+ro<w-1&&inked(cx+ro,cy))ro++;ring=(ri+ro)/2;}
          marks.push({x:(x0+x1)/2,y:(y0+y1)/2,radius:Math.max(2,Math.min(x1-x0,y1-y0)/2*.55),ring});component.forEach(p=>a[p]=0);
        }
      }
      const distance=Float32Array.from(a,v=>v?10000:0);
      for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){const p=y*w+x;if(a[p])distance[p]=Math.min(distance[p],distance[p-1]+1,distance[p-w]+1,distance[p-w-1]+Math.SQRT2,distance[p-w+1]+Math.SQRT2);}
      for(let y=h-2;y>0;y--)for(let x=w-2;x>0;x--){const p=y*w+x;if(a[p])distance[p]=Math.min(distance[p],distance[p+1]+1,distance[p+w]+1,distance[p+w-1]+Math.SQRT2,distance[p+w+1]+Math.SQRT2);}
      let changed=true;
      for(let iteration=0;changed&&iteration<120;iteration++){
        changed=false;
        for(let pass=0;pass<2;pass++){
          const del=[];
          for(const p of pixels){
            if(!a[p])continue;const b=offsets.map(d=>a[p+d]||0);let count=0,transitions=0;
            for(let k=0;k<8;k++){count+=b[k];if(!b[k]&&b[(k+1)%8])transitions++;}
            if(count<2||count>6||transitions!==1)continue;
            if(pass===0?(b[0]*b[2]*b[4]===0&&b[2]*b[4]*b[6]===0):(b[0]*b[2]*b[6]===0&&b[0]*b[4]*b[6]===0))del.push(p);
          }
          if(del.length)changed=true;for(const p of del)a[p]=0;
        }
      }
      const neighbors=p=>{const out=[];for(let k=0;k<8;k++){if(!a[p+offsets[k]])continue;if(k%2&&(a[p+offsets[(k+7)%8]]||a[p+offsets[(k+1)%8]]))continue;out.push(p+offsets[k]);}return out;};
      // Prune short, narrow corner branches. Keep the broad, rounded exits
      // and terminals that are part of a handwritten stroke. A short spur
      // whose two sibling branches leave the junction the same way is the
      // real bottom of their U (two legs merging into one stroke): keep it,
      // to be folded into both legs once the lines are traced.
      const remove=new Set(),folds=[];
      const halves=[];for(const p of pixels)if(a[p])halves.push(distance[p]);halves.sort((x,y)=>x-y);const half=halves.length?halves[halves.length>>1]:12;
      const heading=(from,to)=>{let previous=from,current=to;for(let s=0;s<6;s++){const ns=neighbors(current).filter(q=>q!==previous);if(ns.length!==1)break;previous=current;current=ns[0];}return[current%w-from%w,Math.floor(current/w)-Math.floor(from/w)];};
      for(const p of pixels){
        if(!a[p]||neighbors(p).length!==1)continue;const run=[p];let previous=-1,current=p,length=0;
        while(length<45){
          const ns=neighbors(current).filter(q=>q!==previous);if(ns.length!==1)break;const next=ns[0];
          if(neighbors(next).length>2){
            // A short branch is a corner sliver only if its tip is thin
            // too; a fat short one is a brush terminal rising just above a
            // join (Damion's stems above their bowls) and must be stitched.
            if((length<8||length<distance[next]*1.4+2)&&distance[p]<half*.6){
              const siblings=neighbors(next).filter(q=>q!==current).map(q=>heading(next,q));
              if(length>=2&&siblings.length===2&&siblings[0][0]*siblings[1][0]+siblings[0][1]*siblings[1][1]>0)folds.push({tip:p,node:next});
              else run.forEach(q=>remove.add(q));
            }
            break;
          }
          length+=Math.hypot(next%w-current%w,Math.floor(next/w)-Math.floor(current/w));previous=current;current=next;run.push(current);
        }
      }
      remove.forEach(p=>a[p]=0);
      const used=new Set(),lines=[],key=(p,q)=>p<q?p+':'+q:q+':'+p;
      const trace=(start,next)=>{
        const line=[start];let previous=start,current=next;used.add(key(start,next));
        for(let guard=0;guard<10000;guard++){
          line.push(current);const ns=neighbors(current);if(ns.length!==2)break;const next=ns.find(p=>p!==previous);
          if(used.has(key(current,next)))break;used.add(key(current,next));previous=current;current=next;
        }
        if(line.length>1)lines.push(line.map(p=>({x:p%w,y:Math.floor(p/w)})));
      };
      for(const p of pixels)if(a[p]&&neighbors(p).length!==2)for(const q of neighbors(p))if(!used.has(key(p,q)))trace(p,q);
      for(const p of pixels)if(a[p])for(const q of neighbors(p))if(!used.has(key(p,q)))trace(p,q);
      // Fold each kept spur into both legs that meet at its junction, so
      // the pen's turn reaches the bottom of the U instead of the branch point.
      for(const {tip,node} of folds){
        const at=(line,end,p)=>{const q=end?line[line.length-1]:line[0];return q.x===p%w&&q.y===Math.floor(p/w);};
        const si=lines.findIndex(l=>l&&((at(l,0,tip)&&at(l,1,node))||(at(l,1,tip)&&at(l,0,node))));if(si<0)continue;
        const spur=at(lines[si],0,node)?lines[si]:[...lines[si]].reverse(),legs=lines.map((l,j)=>l&&j!==si&&(at(l,0,node)||at(l,1,node))?j:-1).filter(j=>j>=0);
        if(legs.length!==2)continue;
        for(const j of legs){const l=lines[j];lines[j]=at(l,1,node)?l.concat(spur.slice(1)):[...spur].reverse().concat(l.slice(1));}
        lines[si]=null;
      }
      for(let j=lines.length-1;j>=0;j--)if(!lines[j])lines.splice(j,1);
      // A hairline meeting a much thicker stroke has to reach the junction
      // in the middle of that stroke, so thinning bends it twice: in, then
      // across. Replace its approach with one curve that keeps the
      // hairline's own direction and eases into the junction.
      const widthAt=p=>distance[Math.round(p.y)*w+Math.round(p.x)]||0;
      for(const line of lines)for(const end of [0,1]){
        const n=line.length,at=i=>line[end?n-1-i:i],node=at(0),nodeWidth=widthAt(node);
        if(n<14||neighbors(Math.round(node.y)*w+Math.round(node.x)).length<3)continue;
        const own=[];for(let i=6;i<Math.min(n-1,16);i++)own.push(widthAt(at(i)));own.sort((x,y)=>x-y);const lineWidth=own[own.length>>1]||1;
        if(nodeWidth<lineWidth*2.2)continue;
        const K=Math.min(Math.round(nodeWidth*2),(n-1)>>1);if(K<4)continue;
        const P=at(K),Q=at(K+3),tl=Math.hypot(P.x-Q.x,P.y-Q.y)||1,tx=(P.x-Q.x)/tl,ty=(P.y-Q.y)/tl,reach=Math.hypot(node.x-P.x,node.y-P.y)*.55,C={x:P.x+tx*reach,y:P.y+ty*reach};
        for(let k=0;k<=K;k++){const t=k/K,u=1-t,i=end?n-1-K+k:K-k;line[i]={x:u*u*P.x+2*u*t*C.x+t*t*node.x,y:u*u*P.y+2*u*t*C.y+t*t*node.y};}
      }
      // The thick stroke's skeleton also bows toward the bulge the hairline
      // adds. Where a three-way junction is two thick runs plus one hairline,
      // re-lay the thick stroke straight through as one tangent-continuous
      // curve and land the hairline on it.
      const incident=new Map(),keyOf=p=>Math.round(p.x)+':'+Math.round(p.y);
      lines.forEach((line,j)=>[0,1].forEach(end=>{const p=end?line[line.length-1]:line[0],k=keyOf(p);(incident.get(k)||incident.set(k,[]).get(k)).push({j,end});}));
      const lineWidthOf=(line,end)=>{const n=line.length,own=[];for(let i=6;i<Math.min(n-1,16);i++)own.push(widthAt(end?line[n-1-i]:line[i]));own.sort((x,y)=>x-y);return own[own.length>>1]||1;};
      for(const ends of incident.values()){
        if(ends.length!==3)continue;const info=ends.map(e=>({...e,width:lineWidthOf(lines[e.j],e.end)})).sort((a,b)=>a.width-b.width);
        const [thin,t1,t2]=info;if(thin.width>t1.width*.45||t1.j===t2.j||lines[t1.j].length<24||lines[t2.j].length<24)continue;
        const node=thin.end?lines[thin.j][lines[thin.j].length-1]:lines[thin.j][0],K=Math.min(Math.round(widthAt(node)*1.5),10);if(K<4)continue;
        const pick=(t,i)=>{const l=lines[t.j];return t.end?l[l.length-1-i]:l[i];};
        const P1=pick(t1,K),Q1=pick(t1,K+3),P2=pick(t2,K),Q2=pick(t2,K+3),d=Math.hypot(P2.x-P1.x,P2.y-P1.y)||1;
        const l1=Math.hypot(P1.x-Q1.x,P1.y-Q1.y)||1,l2=Math.hypot(P2.x-Q2.x,P2.y-Q2.y)||1;
        const C1={x:P1.x+(P1.x-Q1.x)/l1*d/3,y:P1.y+(P1.y-Q1.y)/l1*d/3},C2={x:P2.x+(P2.x-Q2.x)/l2*d/3,y:P2.y+(P2.y-Q2.y)/l2*d/3};
        const at=t=>{const u=1-t;return{x:u*u*u*P1.x+3*u*u*t*C1.x+3*u*t*t*C2.x+t*t*t*P2.x,y:u*u*u*P1.y+3*u*u*t*C1.y+3*u*t*t*C2.y+t*t*t*P2.y};};
        for(let k=0;k<=K;k++){const a1=at(k/(2*K)),a2=at(1-k/(2*K)),l1=lines[t1.j],l2=lines[t2.j];l1[t1.end?l1.length-1-K+k:K-k]=a1;l2[t2.end?l2.length-1-K+k:K-k]=a2;}
        const mid=at(.5),tl=lines[thin.j],m=tl.length,reach=Math.min(8,m-2),dx=mid.x-node.x,dy=mid.y-node.y;
        for(let i=0;i<=reach;i++){const t=1-i/(reach+1),wgt=t*t*(3-2*t),idx=thin.end?m-1-i:i;tl[idx]={x:tl[idx].x+dx*wgt,y:tl[idx].y+dy*wgt};}
      }
      // Thinning ends a U-turn where its two legs merge into one stroke,
      // not at the bottom of the ink, and smoothing rounds it further up.
      // So, as the last step, walk each sharp apex along its bisector to
      // the far edge and settle it half a stroke short, easing the legs
      // along. A bend whose outside runs on into another stroke (a bowl
      // meeting its stem) is left where it is.
      const inked=(x,y)=>{const ix=Math.round(x),iy=Math.round(y);return ix>=0&&ix<w&&iy>=0&&iy<h&&data[(iy*w+ix)*4+3]>100;};
      const dropApexes=()=>{
        const span=Math.max(4,Math.round(half*1.2));
        for(const line of lines){
          const n=line.length;if(n<span*2+2)continue;
          for(let i=span;i<n-span;i++){
            const a0=line[i-span],b0=line[i+span],p=line[i],ux=p.x-a0.x,uy=p.y-a0.y,vx=b0.x-p.x,vy=b0.y-p.y,lu=Math.hypot(ux,uy)||1,lv=Math.hypot(vx,vy)||1;
            if((ux*vx+uy*vy)/(lu*lv)>-.2)continue;
            const mx=p.x-(a0.x+b0.x)/2,my=p.y-(a0.y+b0.y)/2,ml=Math.hypot(mx,my);if(ml<.5)continue;const dx=mx/ml,dy=my/ml;
            let f=0;while(f<half*4&&inked(p.x+dx*f,p.y+dy*f))f+=.25;
            const descent=f-half;if(descent<.5||f>half*3)continue;const reach=Math.max(3,Math.round(half*2.5));
            for(let k=Math.max(0,i-reach);k<=Math.min(n-1,i+reach);k++){const t=1-Math.abs(k-i)/(reach+1),wgt=t*t*(3-2*t);line[k].x+=dx*descent*wgt;line[k].y+=dy*descent*wgt;}
            i+=span;
          }
        }
      };
      // Smoothing passes scale with the stroke: each pass pulls a tight turn
      // inward by about a pixel, which a fine monoline face cannot spare.
      const passes=Math.max(2,Math.min(6,Math.round(half/2))),polish=Math.max(1,Math.min(3,Math.round(half/4)));
      for(let pass=0;pass<passes;pass++)for(let j=0;j<lines.length;j++){const line=lines[j];lines[j]=line.map((p,i)=>!i||i===line.length-1?p:{x:(line[i-1].x+p.x*2+line[i+1].x)/4,y:(line[i-1].y+p.y*2+line[i+1].y)/4});}
      // Recenter each smoothed run using both sides of the original ink,
      // instead of accepting the directional bias of raster thinning.
      const inside=(x,y)=>{
        const ix=Math.round(x),iy=Math.round(y);return ix>=0&&ix<w&&iy>=0&&iy<h&&data[(iy*w+ix)*4+3]>100;
      };
      // Only where the span is this line's own stroke: where it merges
      // into a thicker one the midpoint is the bulge, not the pen.
      const ownWidths=lines.map(line=>{const d=line.map(widthAt).sort((x,y)=>x-y);return 2*(d[d.length>>1]||1);});
      for(let pass=0;pass<3;pass++)for(let j=0;j<lines.length;j++){
        const line=lines[j];if(line.length<9)continue;
        lines[j]=line.map((p,i)=>{
          if(i<3||i>line.length-4)return p;
          const lo=line[Math.max(0,i-5)],hi=line[Math.min(line.length-1,i+5)],len=Math.hypot(hi.x-lo.x,hi.y-lo.y)||1;
          const nx=-(hi.y-lo.y)/len,ny=(hi.x-lo.x)/len;
          let left=0,right=0;
          while(left<45&&inside(p.x-nx*left,p.y-ny*left))left+=.5;
          while(right<45&&inside(p.x+nx*right,p.y+ny*right))right+=.5;
          if(left>=45||right>=45||left+right>ownWidths[j]*1.5+2)return p;
          const shift=Math.max(-1.25,Math.min(1.25,(right-left)/2));
          return{x:p.x+nx*shift,y:p.y+ny*shift};
        });
      }
      for(let pass=0;pass<polish;pass++)for(let j=0;j<lines.length;j++){const line=lines[j];lines[j]=line.map((p,i)=>!i||i===line.length-1?p:{x:(line[i-1].x+p.x*2+line[i+1].x)/4,y:(line[i-1].y+p.y*2+line[i+1].y)/4});}
      dropApexes();
      // A ring dot's knot spirals out to the ring's own centreline.
      for(const mark of marks)lines.push(knot(mark.x,mark.y,mark.ring||mark.radius));
      return lines.map(line=>line.map(p=>({x:p.x-pad-left,y:p.y-pad-ascent})));
    }
    function resample(line,scale){const pts=[];let len=0;for(let i=0;i<line.length;i++){const p={x:(line[i].x-geometry.cx)*scale,y:(line[i].y-geometry.cy)*scale};if(i){len+=Math.hypot(p.x-pts[i-1].x,p.y-pts[i-1].y);}pts.push({...p,s:len});}return {pts,len};}
    function sample(path,s){const p=path.pts;if(s<=0)return p[0];if(s>=path.len)return p[p.length-1];let lo=0,hi=p.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(p[mid].s<s)lo=mid;else hi=mid;}const f=(s-p[lo].s)/(p[hi].s-p[lo].s||1);return {x:p[lo].x+(p[hi].x-p[lo].x)*f,y:p[lo].y+(p[hi].y-p[lo].y)*f};}
    // Draw a raised cord as a shadow, an occluded underside, three overlapping
    // helical plies, then narrow specular fibers.
    function cord(points,width,hex,seed){
      if(points.length<2)return;
      const stroke=(dx,dy,w,c)=>{art.beginPath();points.forEach((p,i)=>i?art.lineTo(p.x+dx,p.y+dy):art.moveTo(p.x+dx,p.y+dy));art.lineWidth=w;art.strokeStyle=c;art.stroke();};
      art.lineCap='round';art.lineJoin='round';
      // The thread sits proud of the knit, lit from the upper left: a soft, wide
      // contact shadow under a tighter cast shadow falling down and to the right.
      art.save();art.shadowColor='#2a1c2450';art.shadowBlur=width*1.25;art.shadowOffsetX=width*.045;art.shadowOffsetY=width*.33;stroke(0,.6,width+1.5,color(hex,-70,.3));art.restore();
      art.save();art.shadowColor='#261b2858';art.shadowBlur=2.45;art.shadowOffsetX=1.25;art.shadowOffsetY=2.6;stroke(0,.8,width+1,color(hex,-65,.5));art.restore();
      stroke(0,.3,width,color(hex,-37));stroke(-.35,-.4,width*.77,color(hex,-1));
      for(let ply=0;ply<3;ply++){
        art.beginPath();let dist=0;
        for(let i=0;i<points.length;i++){
          if(i)dist+=Math.hypot(points[i].x-points[i-1].x,points[i].y-points[i-1].y);
          const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],l=Math.hypot(b.x-a.x,b.y-a.y)||1;
          const nx=-(b.y-a.y)/l,ny=(b.x-a.x)/l,phase=dist/(width*.8)+ply*Math.PI*2/3,off=Math.sin(phase)*width*.25;
          const x=points[i].x+nx*off,y=points[i].y+ny*off;
          i?art.lineTo(x,y):art.moveTo(x,y);
        }
        art.lineWidth=width*.26;art.strokeStyle=color(hex,ply===1?53:ply===0?18:-17,.8);art.stroke();
      }
      stroke(-width*.17,-width*.2,width*.125,color(hex,76,.55));
    }
    // Canvas y of the lettering's optical centre: 46% of the visible height, measured when the crop is pinned top.
    function letterY(){const pinned=getComputedStyle($('scene')).objectPosition.endsWith(' 0px');if(!pinned)return H*.46;const r=$('canvaswrap').getBoundingClientRect();if(!r.width)return H*.46;
      // Aim at the card's FINAL height: while the price line is still sliding open, add what it has yet to grow, so the word lands where it will stay.
      const note=root.querySelector('.price-note');let pending=0;if(note.classList.contains('show')){const finalH=note.querySelector('.price-inner').scrollHeight+14;const curH=note.getBoundingClientRect().height+parseFloat(getComputedStyle(note).marginTop);pending=Math.max(0,finalH-curH);}const h=r.height+pending;const shownH=r.width*H/W;return (shownH>h?h*W/r.width:H)*.46;}
    function drawEmbroidery(){
      stitches=0;if(!geometry)return;
      // A thread may carry its own hand-picked yarn colour.
      const hex=threads[state.thread].yarn||yarn(threads[state.thread].hex);
      const scale=Math.min(980/Math.max(geometry.width,360),410/Math.max(geometry.height,90),2.1);
      // Thread weight and stitch length are set in font units, so the
      // stitch scales with the lettering: a long name gets a finer thread.
      const weight=state.weight*scale,length=state.length*scale;
      art.save();art.translate(W*.50,letterY());art.rotate(0);
      paths.forEach((line,idx)=>{
        const path=resample(line,scale),count=Math.max(1,Math.round(path.len/length)),step=path.len/count;
        for(let j=0;j<count;j++){
          // A hand never sews two links alike: each one is a few percent
          // longer or shorter, a little fatter or thinner, and sits a hair
          // off the line. Seeded, so the same name always sews the same.
          const h=random(idx*7919+j*104729+3),jl=(h()-.5)*.12,jw=1+(h()-.5)*.14,jo=(h()-.5)*weight*.12;
          const start=j*step,end=(j+1)*step,loop=[];
          // An actual teardrop chain link, pinched at one needle entry and
          // tucked under the next. It is not a dash or a texture-filled glyph.
          for(let k=0;k<=38;k++){
            // Each link runs a third longer than its step, so it nests
            // over the previous one the way a hand-sewn chain does.
            const t=k/38,along=start-step*(.17+jl)+step*(1.34+jl)*(.5-.5*Math.cos(t*Math.PI*2));
            const p=sample(path,along),a=sample(path,Math.max(0,along-.8)),b=sample(path,Math.min(path.len,along+.8));
            const len=Math.hypot(b.x-a.x,b.y-a.y)||1,nx=-(b.y-a.y)/len,ny=(b.x-a.x)/len;
            // Hand chain stitch: the thread is about half the link's width,
            // so the chain reads as a braid with small pockets, not rings.
            const width=weight*.62*jw*Math.sin(t*Math.PI*2)*(Math.sin(t*Math.PI)+.4)+jo*Math.sin(t*Math.PI);
            loop.push({x:p.x+nx*width,y:p.y+ny*width});
          }
          const entry=sample(path,start);
          art.fillStyle='#241c2c32';art.beginPath();art.ellipse(entry.x+.3,entry.y+1,weight*.38,weight*.26,-.4,0,Math.PI*2);art.fill();
          cord(loop,weight*.9,hex,idx*991+j*17+62);stitches++;
        }
      });art.restore();
    }
    function drawFontGuide(){
      if(!geometry)return;
      const scale=Math.min(980/Math.max(geometry.width,360),410/Math.max(geometry.height,90),2.1);
      art.save();art.translate(W*.5,letterY());art.rotate(0);art.scale(scale,scale);applyFont(art);art.fillStyle='#243e3638';if(monogram)monogram.layout.forEach(([ch,x])=>art.fillText(ch,x-geometry.cx,-geometry.cy));else art.fillText(state.text,-geometry.cx,-geometry.cy);art.letterSpacing='0px';art.restore();
    }
    $('fontGuide').addEventListener('click',()=>{state.guide=!state.guide;$('fontGuide').setAttribute('aria-pressed',String(state.guide));$('fontGuide').setAttribute('aria-label',state.guide?'Hide font guide':'Show font guide');requestRender();});
    fonts.forEach((font,i)=>{
      const b=document.createElement('button');b.className='fontstyle';b.textContent=font.name;if(font.pending){b.disabled=true;b.title='Coming soon';}else b.style.fontFamily=`"${font.family}"`;
      // `tile` only dresses the picker: a faux-bold for the light faces, a nudge for one that sits high, a size for one that runs big, a hairline stroke for a thin face.
      if(font.tile){if(font.tile.bold)b.style.fontWeight='700';if(font.tile.size)b.style.fontSize=font.tile.size+'px';if(font.tile.stroke)b.style.webkitTextStroke=font.tile.stroke+'px currentColor';if(font.tile.down)b.style.padding=`${9+font.tile.down}px 6px ${8-font.tile.down}px`;}b.setAttribute('aria-pressed',String(i===state.font));
      b.addEventListener('click',async()=>{state.font=i;updateControls();await document.fonts.load(fontSpec());makeGeometry();requestRender();});$('fontstyles').append(b);
    });
    // Resetting the width wipes the bitmap outright; Safari can leave stale
    // patches of a shadowed canvas behind after a plain clearRect.
    // Lane fabrics (Little Love hearts) scale the knit with the lettering and sit the name inside a lane.
    function letterBox(){const y=letterY();if(!geometry)return{y,h:226};const s=Math.min(980/Math.max(geometry.width,360),410/Math.max(geometry.height,90),2.1);return{y,h:Math.max(60,geometry.height*s)};}
    function renderArtwork(){if(fabrics[state.fabric].lane)drawCloth();artwork.width=W;art.drawImage(cloth,0,0);if(state.guide)drawFontGuide();drawEmbroidery();drawView();}
    function requestRender(){if(!ready)return;cancelAnimationFrame(raf);raf=requestAnimationFrame(renderArtwork);}
    // Reading a pixel back makes Safari finish the artwork before it is
    // copied; otherwise it can composite from a stale copy of the canvas.
    function drawView(){art.getImageData(0,0,1,1);ctx.save();ctx.clearRect(0,0,W,H);ctx.fillStyle=fabrics[state.fabric].hex;ctx.fillRect(0,0,W,H);ctx.translate(W/2+state.panX,H/2+state.panY);ctx.scale(state.zoom,state.zoom);ctx.drawImage(artwork,-W/2,-H/2);ctx.restore();}
    // Spaces are free: the letter limit counts letters only, and so does the price. Popcorn takes a 3-letter monogram; Sawa up to 20.
    const STITCHABLE=/[^\p{L}\p{N} .,'&-]/gu;const clean=text=>text.replace(STITCHABLE,'').replace(/ {2,}/g,' ');const letters=text=>[...clean(text).replace(/\s/g,'')].length;
    const PRICE_PER_LETTER=10;let MAX_LETTERS=parseInt(embed.max,10)||(embed.line==='popcorn'?3:20);
    // The cap shows in the hint, the field label (initials when 3 or fewer) and the counter.
    const POPCORN_TIP='The Popcorn’s thick knit is best suited for initials. For a full name, we recommend The Sawa.';
    const setMax=(n,adult=/adult/i.test(embed.title||''))=>{MAX_LETTERS=n;const v=root.querySelector('label[for=name]+.value');if(v)v.textContent='Up to '+n+' characters';const l=root.querySelector('label[for=name]');if(l)l.textContent=n<=3?'Embroidery initials':'Embroidery text';const c=root.querySelector('#charCount');if(c)c.textContent=letters(state.text)+'/'+n;const tip=root.querySelector('#lengthTip');if(tip){if(!tip.dataset.full)tip.dataset.full=tip.innerHTML;if(n<=3&&!adult)tip.textContent=POPCORN_TIP;else tip.innerHTML=tip.dataset.full;}};
    setMax(MAX_LETTERS);
    // Outside a product page the studio offers the store's embroiderable products in a dropdown; picking one
    // shows only that product's colours (the same list Swatch King shows on the store) and sets its letter cap.
    const PRODUCTS=[
      {name:'The Sawa Blanket',line:'sawa',max:20,colors:['Pink Quartz','Henna','Moon Stone','Sky Blue','Citron']},
      {name:'The Popcorn Blanket',line:'popcorn',max:3,colors:['Pink Quartz','Henna','Moon Stone','Sky Blue','Citron']},
      {name:'Adult Popcorn Blanket',line:'popcorn',max:3,colors:['Henna','Cream','Moon Stone']},
      {name:'Little Love Blanket',line:'cashmere',max:20,colors:['Cloud','Butter Cream','Hydrangea','Peony','Lavande']},
      {name:'Cashmere Cloud Gift Set',line:'cashmere',max:20,colors:['Butter Cream','Peony','Hydrangea']},
      {name:'Kid Beanie',line:'beanie',max:20,colors:['Cobalt','Charcoal','Pink Haze','Chocolate','Lavande']},
      {name:'Adult Beanie',line:'beanie',max:20,colors:['Cobalt','Charcoal','Pink Haze','Chocolate','Lavande']}
    ];
    const fabricIndex=(line,name)=>{const norm=t=>t.toLowerCase().replace(/[^a-z]/g,''),want=norm(name);const match=f=>norm(f.name)===want||(f.aka||[]).some(a=>norm(a)===want);let i=fabrics.findIndex(f=>f.line===line&&match(f));if(i<0)i=fabrics.findIndex(match);return i;};
    function applyProduct(p){
      const shown=p.colors.map(c=>fabricIndex(p.line,c)).filter(i=>i>=0);
      $('fabrics').querySelectorAll('button').forEach((b,i)=>{b.hidden=!shown.includes(i);});
      $('fabricLabel').textContent=p.line==='beanie'?'Beanie color':'Blanket color';
      setMax(p.max,/adult/i.test(p.name));if(letters(state.text)>p.max){state.text=[...clean(state.text)].slice(0,p.max).join('');$('name').value=state.text;}
      if(!shown.includes(state.fabric)&&shown.length){state.fabric=shown[0];ensureTexture(fabrics[state.fabric]).then(()=>{drawCloth();requestRender();});}
      updateControls();if(ready){makeGeometry();requestRender();}
    }
    {const sel=$('productSelect');if(sel){PRODUCTS.forEach((p,i)=>{const o=document.createElement('option');o.value=String(i);o.textContent=p.name;sel.append(o);});sel.addEventListener('change',()=>applyProduct(PRODUCTS[+sel.value]));if(embed.mode!=='product')applyProduct(PRODUCTS[0]);}}
    $('name').addEventListener('input',e=>{let v=clean(e.target.value);if(MAX_LETTERS<=3)v=v.toUpperCase();if(v!==e.target.value)e.target.value=v;if(letters(v)>MAX_LETTERS){e.target.value=state.text;return;}state.text=v;updateControls();clearTimeout(debounce);debounce=setTimeout(()=>{makeGeometry();requestRender();},40);});
    for(const key of ['weight','length'])$(key).addEventListener('input',e=>{state[key]=+e.target.value;updateControls();requestRender();});
    $('advanced').addEventListener('click',()=>{state.advanced=!state.advanced;updateControls();});
    function zoomTo(n){state.zoom=Math.max(1,Math.min(3,n));if(state.zoom===1)state.panX=state.panY=0;updateControls();drawView();}
    $('zoomIn').addEventListener('click',()=>zoomTo(state.zoom+.25));$('zoomOut').addEventListener('click',()=>zoomTo(state.zoom-.25));
    $('resetView').addEventListener('click',()=>{state.panX=state.panY=0;zoomTo(1);});
    $('canvaswrap').addEventListener('wheel',e=>{e.preventDefault();zoomTo(state.zoom+(e.deltaY<0?.15:-.15));},{passive:false});
    let drag=null;
    const touches=new Map();let pinch=null;
    $('canvaswrap').addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;touches.set(e.pointerId,e);
      if(touches.size===2){const [a,b]=[...touches.values()];drag=null;pinch={dist:Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY),zoom:state.zoom};}
      else drag={x:e.clientX,y:e.clientY,px:state.panX,py:state.panY};
      try{$('canvaswrap').setPointerCapture(e.pointerId);}catch(_){}});
    $('canvaswrap').addEventListener('pointermove',e=>{if(touches.has(e.pointerId))touches.set(e.pointerId,e);
      if(pinch&&touches.size===2){const [a,b]=[...touches.values()];zoomTo(pinch.zoom*Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)/pinch.dist);return;}
      if(!drag)return;const rect=canvas.getBoundingClientRect();state.panX=Math.max(-W*(state.zoom-1)/2,Math.min(W*(state.zoom-1)/2,drag.px+(e.clientX-drag.x)*W/rect.width));state.panY=Math.max(-H*(state.zoom-1)/2,Math.min(H*(state.zoom-1)/2,drag.py+(e.clientY-drag.y)*H/rect.height));drawView();});
    ['pointerup','pointercancel','lostpointercapture'].forEach(event=>$('canvaswrap').addEventListener(event,e=>{touches.delete(e.pointerId);drag=null;if(touches.size<2)pinch=null;}));
    // ---- Shopify cart ----
    // Only on a real product page (the theme's cart and drawer exist and this is not the studio's preview).
    const canSell=()=>embed.mode==='product'&&!previewing&&!!(window.theme&&window.theme.cart&&window.theme.drawer);
    // A click on the page's Add button never goes quiet: if the theme's cart isn't there, say so.
    const tryAdd=(btn,withEmbroidery)=>{if(canSell())addToCart(btn,withEmbroidery);else notify('Could not add to cart. Please refresh the page and try again.');};
    // "Custom Hand Embroidery" variants, one per letter count; looked up by title at run time, this list is the fallback.
    const EMBROIDERY_HANDLE='custom-embroidery';
    const EMBROIDERY_VARIANTS=['44110949548211','44110949580979','44110949613747','44110949646515','44110949679283','44110949712051','44110949744819','44110949777587','44110949810355','44110949843123','44110949875891','44110949908659','44110949941427','44110949974195','44110950006963','44110950039731','44110950072499','44110950105267','44110950138035','44110950170803'];
    const UPLOAD_URL='https://dpluspl.us/api/aubaby', IMAGE_BASE='https://do-myspace.sfo3.digitaloceanspaces.com/uploads/';
    const productJson={};const fetchProduct=h=>productJson[h]||(productJson[h]=fetch('/products/'+h+'.js',{credentials:'same-origin'}).then(r=>r.ok?r.json():null).catch(()=>null).then(j=>{if(!j)delete productJson[h];return j;}));
    const generateId=()=>Date.now().toString(36)+'-'+Math.random().toString(36).substring(2,6);
    // The unzoomed render, scaled down; zoom and pan only ever touch the on-screen copy.
    // Full width, cropped to a band centred on the lettering (720 of the 1150 canvas rows), scaled to 800×360.
    // A 2.2:1 window around the lettering: a little wider than the name, so long names fill it and short names aren't lost in knit.
    // The stitches' real pixel bounds: the embroidery is drawn alone on a cleared canvas, its alpha scanned, then the artwork redrawn.
    function inkBounds(){if(!geometry||!paths.length)return null;artwork.width=W;drawEmbroidery();const d=art.getImageData(0,0,W,H).data;let x0=W,y0=H,x1=-1,y1=-1;for(let y=0;y<H;y+=2){for(let x=0;x<W;x+=2){if(d[(y*W+x)*4+3]>40){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;}}}renderArtwork();return x1<0?null:{x0,y0,x1,y1};}
    function cropRect(){const b=inkBounds();if(!b){const ch=720;return{x:0,y:Math.max(0,Math.min(H-ch,Math.round(letterY()-ch/2))),cw:W,ch};}const bw=b.x1-b.x0,bh=b.y1-b.y0,cx=(b.x0+b.x1)/2,cy=(b.y0+b.y1)/2;let cw=Math.max(bw+Math.max(bw*.24,80),(bh+Math.max(bh*.6,60))*2.2,360);cw=Math.min(cw,W);let ch=cw/2.2;if(ch>H){ch=H;cw=ch*2.2;}return{x:Math.max(0,Math.min(W-cw,cx-cw/2)),y:Math.max(0,Math.min(H-ch,cy-ch/2)),cw,ch};}
    function cropJpeg(w,h,q){const r=cropRect(),c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(artwork,r.x,r.y,r.cw,r.ch,0,0,w,h);return c.toDataURL('image/jpeg',q);}
    function snapshotJpeg(){return cropJpeg(1000,455,.88);}
    // Resolves true when the file is up; false on failure or after 8 s, so a slow upload never blocks the sale.
    // Card thumbnail: a tight crop around the lettering (2.2:1, same as the card's image box), so the name reads at a glance.
    function thumbJpeg(){return cropJpeg(600,273,.86);}
    async function uploadSnapshot(id){const ctl=new AbortController(),timer=setTimeout(()=>ctl.abort(),8000);try{const r=await fetch(UPLOAD_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({image:snapshotJpeg(),fileName:id+'.jpg'}),signal:ctl.signal});if(!r.ok)throw new Error(r.status);return true;}catch(e){console.error('Threadwork: snapshot upload failed',e);return false;}finally{clearTimeout(timer);}}
    const cartButton=$('download');
    const setBusy=(on,btn=cartButton)=>{btn.disabled=on;btn.setAttribute('aria-busy',String(on));btn.innerHTML=on?'Adding to cart <span class="tw-spin" aria-hidden="true"></span>':(btn.dataset.idle||'Add to Cart');};
    async function addToCart(btn=cartButton,withEmbroidery=true){
      if(withEmbroidery&&!ready)return;
      const n=withEmbroidery?letters(state.text):0,text=state.text.trim();
      if(withEmbroidery&&!n){toast('Type a name first.');return;}
      setBusy(true,btn);
      try{
        // Letter-count line: match the variant titled "N Letter(s)", else the known id.
        let embroideryId=null;
        if(withEmbroidery){const emb=await fetchProduct(EMBROIDERY_HANDLE);const match=emb&&emb.variants.find(v=>v.title.startsWith(n+' Letter'));embroideryId=match?String(match.id):EMBROIDERY_VARIANTS[n-1];if(!embroideryId)throw new Error('No embroidery option for '+n+' letters');}
        // The blanket: flags from Liquid first, the product JSON as a fallback.
        const urlVariant=new URLSearchParams(location.search).get('variant');let variantId=urlVariant||embed.variant,title=embed.title,link=embed.url;
        if(!variantId||!title){const prod=await fetchProduct(embed.product);if(!prod)throw new Error('Product not found');const want=new URLSearchParams(location.search).get('variant');const v=prod.variants.find(x=>String(x.id)===want)||prod.variants.find(x=>x.available)||prod.variants[0];variantId=variantId||String(v.id);title=title||prod.title;}
        if(!link)link=location.origin+'/products/'+embed.product;else if(link.startsWith('/'))link=location.origin+link;
        const qty=parseInt(document.querySelector('.product-page--block .quantity-selector--input')?.value)||1;
        // Snapshot upload and cart add run side by side; the drawer opens once both are done, so the preview is in place.
        const body=new URLSearchParams();
        body.append('items[0][id]',variantId);body.append('items[0][quantity]',qty);
        let uploaded=Promise.resolve(true);
        if(withEmbroidery){
          const id=generateId(),image=IMAGE_BASE+id+'.jpg';
          clearTimeout(debounce);cancelAnimationFrame(raf);makeGeometry();renderArtwork();
          uploaded=uploadSnapshot(id);
          body.append('items[0][properties][_image]',image);
          body.append('items[1][id]',embroideryId);body.append('items[1][quantity]',qty);
          body.append('items[1][properties][_for]',title);body.append('items[1][properties][_link]',link);
          body.append('items[1][properties][Embroidery Text]',text);body.append('items[1][properties][Thread Color]',threads[state.thread].name);body.append('items[1][properties][Font]',fonts[state.font].name);
          body.append('items[1][properties][_image]',image);body.append('items[1][properties][_flow]',FLOW);
        }
        const addUrl=(window.theme.urls&&window.theme.urls.cart_add?window.theme.urls.cart_add:'/cart/add')+'.js';
        const res=await fetch(addUrl,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()});
        if(!res.ok){let msg=res.statusText;try{const j=await res.json();msg=j.description||j.message||msg;}catch(e){}throw new Error(msg);}
        // Sold. Whatever happens below, the lines are in the cart.
        try{await uploaded;await window.theme.cart.fetchTotals();await window.theme.cart.updateAllHtml(true);}catch(e){console.error('Threadwork: cart refresh after add failed',e);}
        closeModal();
        {const t=document.querySelector('[data-threadwork-open]');if(t)t.dataset.quiet='1';}
        saved=null;renderSummary();announce('added',withEmbroidery?{letters:n,font:fonts[state.font].name,thread:threads[state.thread].name}:{letters:0});
        try{window.theme.drawer.open('right','cart-drawer',document.querySelector('[data-threadwork-open]'));}catch(e){location.href='/cart';}
      }catch(e){console.error('Threadwork: add to cart failed',e);notify('Could not add to cart: '+(e&&e.message||'please try again'));}
      finally{setBusy(false,btn);}
    }
    // ---- Save embroidery → summary card on the product page (Option B) ----
    const summaryHost=()=>document.getElementById('threadwork-summary');
    const SUMMARY_CSS='#threadwork-summary:empty{display:none}.tw-card{border:1px solid #dddcd3;border-radius:10px;padding:14px;display:grid;grid-template-columns:1fr auto;gap:12px 14px;align-items:center;background:#faf9f5;margin-bottom:12px;text-transform:none}.tw-thumb{grid-column:1/-1;width:100%;height:auto;aspect-ratio:800/360;border-radius:6px;object-fit:cover;display:block;cursor:pointer}.tw-thumb--loading{cursor:default;background:#e9e7e0;display:flex;align-items:center;justify-content:center}.tw-thumb--loading .tw-spin{margin:0;width:22px;height:22px;border-width:2.5px;border-color:rgba(0,0,0,.1);border-top-color:#8c9386}.tw-card--loading .tw-meta{color:#8c9386}.tw-add[disabled]{opacity:.55;cursor:default}.tw-meta{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px;font-size:13px;line-height:1.35;color:#5a6358}.tw-meta b{font-weight:600;color:#293d35;font-size:13px}.tw-meta strong{color:#222;font-weight:600}.tw-head{display:flex;flex-wrap:wrap;column-gap:6px;row-gap:2px;align-items:baseline}.tw-amt{margin-left:2px}.tw-links{grid-column:2;display:flex;flex-direction:column;gap:6px;align-items:flex-end;justify-content:center}.tw-links button{background:none;border:0;padding:0;font:inherit;font-size:12px;text-decoration:underline;text-underline-offset:3px;cursor:pointer;color:#293d35;min-height:0;line-height:1.4}.tw-links .tw-remove{color:#8c9386}.tw-add{width:100%;height:62px;border:0;border-radius:5px;background:#aa7a73;color:#fff;font:17px "Gopher Bold",Georgia,serif;text-transform:uppercase;letter-spacing:1px;cursor:pointer}.tw-add[disabled]{opacity:.7;cursor:default}.tw-spin{display:inline-block;width:15px;height:15px;margin-left:5px;vertical-align:-2px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:tw-spin .8s linear infinite}@keyframes tw-spin{to{transform:rotate(360deg)}}.tw-error{margin:8px 0 12px;text-align:center;font-size:12px;color:#9c2a2c;text-transform:none}[data-threadwork-open][hidden]{display:none!important}[data-threadwork-open]:not([hidden]){animation:tw-wiggle 30s ease-in-out 8s infinite;transform-origin:50% 50%}[data-threadwork-open][data-quiet]{animation:none!important}@keyframes tw-wiggle{0%,5%,100%{transform:none}1%{transform:rotate(-1.5deg) scale(1.015)}2%{transform:rotate(1.5deg) scale(1.015)}3%{transform:rotate(-.9deg) scale(1.008)}4%{transform:rotate(.45deg)}}.tw-add .tw-price{font-size:1.08em;line-height:1}.tw-add{margin-bottom:12px}.tw-hint{margin:6px 0 12px;text-align:center;font-size:11px;color:#8c9386;text-transform:none}';
    if(embed.mode==='product'){
      cartButton.textContent=FLOW==='direct'?'Add to Cart':'Save embroidery';cartButton.dataset.idle=cartButton.textContent;
      if(!document.getElementById('threadwork-summary-css')){const st=document.createElement('style');st.id='threadwork-summary-css';st.textContent=SUMMARY_CSS;document.head.append(st);}
      // A cart link (?tw_text=…) restores an embroidery once the fonts and knit are in. Until then the card's place is held by a loading card with the details read straight from the URL, and the trigger stays hidden.
      const pendingUrl=(()=>{const q=new URLSearchParams(location.search);let text=clean((q.get('tw_text')||'').trim());if(MAX_LETTERS<=3)text=text.toUpperCase();if(!text||letters(text)>MAX_LETTERS)return null;const norm=t=>String(t).toLowerCase().replace(/[^a-z]/g,'');const f=fonts.find(f=>norm(f.name)===norm(q.get('tw_font')||'')),t=threads.find(t=>norm(t.name)===norm(q.get('tw_thread')||''));return{text,font:f?f.name:(q.get('tw_font')||''),thread:t?t.name:(q.get('tw_thread')||''),n:letters(text)};})();
      if(pendingUrl&&summaryHost()){{const tb=document.querySelector('.product-buy-buttons--root');if(tb&&canSell())tb.style.display='none';}const p=pendingUrl,extra=p.n*PRICE_PER_LETTER,base=parseInt(embed.price,10),total=isNaN(base)?null:base/100+extra;const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));summaryHost().innerHTML='<div class="tw-card tw-card--loading" aria-busy="true"><div class="tw-thumb tw-thumb--loading"><span class="tw-spin" aria-hidden="true"></span></div><div class="tw-meta"><span class="tw-head"><b>Hand Embroidery</b><strong>+<span class="tw-amt">'+money(extra)+'</span></strong></span><span class="tw-what">'+p.n+(p.n===1?' letter':' letters')+' · '+esc([p.text,p.font,p.thread].filter(Boolean).join(' · '))+'</span></div><div class="tw-links"><button type="button" class="tw-modify">Modify</button><button type="button" class="tw-remove">Remove</button></div></div><button type="button" class="tw-add" disabled>'+(total==null?'Add to cart with embroidery':'Add to cart · <span class="tw-price">'+money(total).replace(/.00$/,'')+'</span>')+'</button>';summaryHost().querySelector('.tw-remove').addEventListener('click',()=>{urlRestore.cancelled=true;renderSummary();});summaryHost().querySelector('.tw-modify').addEventListener('click',()=>{urlRestore.openWhenReady=true;});}
      else{{const t=document.querySelector('[data-threadwork-open]');if(t){t.hidden=false;syncQuiet();}}renderSummary();}
    }
    function notify(msg){const host=summaryHost();if(!shell.hidden||!host){toast(msg);return;}let n=host.querySelector('.tw-error');if(!n){n=document.createElement('p');n.className='tw-error';host.append(n);}n.textContent=msg;}
    const escapeHtml=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    function renderSummary(){
      const host=summaryHost();if(!host)return;
      const trigger=document.querySelector('[data-threadwork-open]'),themeBtn=document.querySelector('.product-buy-buttons--root');
      // The theme's own button is only replaced when the studio can actually sell; otherwise it stays and sells the blanket alone.
      const sellable=canSell();if(themeBtn)themeBtn.style.display=sellable?'none':'';
      if(!saved){if(!sellable){host.innerHTML='';if(trigger)trigger.hidden=false;return;}host.innerHTML='<button type="button" class="tw-add" data-idle="Add to Cart">Add to Cart</button>';host.querySelector('.tw-add').addEventListener('click',e=>tryAdd(e.currentTarget,false));if(trigger)trigger.hidden=false;return;}
      const extra=saved.n*PRICE_PER_LETTER,base=parseInt(embed.price,10),total=isNaN(base)?null:base/100+extra;const totalLabel=total==null?'Add to cart with embroidery':'Add to cart · '+money(total).replace(/\.00$/,'');
      host.innerHTML='<div class="tw-card"><img class="tw-thumb" role="button" tabindex="0" aria-label="Modify embroidery" alt="" src="'+saved.thumb+'"><div class="tw-meta"><span class="tw-head"><b>Hand Embroidery</b><strong>+<span class="tw-amt">'+money(extra)+'</span></strong></span><span class="tw-what">'+saved.n+(saved.n===1?' letter':' letters')+' · '+escapeHtml(saved.text)+' · '+escapeHtml(fonts[saved.font].name)+' · '+escapeHtml(threads[saved.thread].name)+'</span></div><div class="tw-links"><button type="button" class="tw-modify">Modify</button><button type="button" class="tw-remove">Remove</button></div></div>'+
        '<button type="button" class="tw-add" data-idle="'+(total==null?totalLabel:'Add to cart · <span class=&quot;tw-price&quot;>'+money(total).replace(/\.00$/,'')+'</span>')+'">'+(total==null?totalLabel:'Add to cart · <span class="tw-price">'+money(total).replace(/\.00$/,'')+'</span>')+'</button>';
      host.querySelector('.tw-modify').addEventListener('click',()=>openModal());
      {const th=host.querySelector('.tw-thumb');th.addEventListener('click',()=>openModal());th.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal();}});}
      host.querySelector('.tw-remove').addEventListener('click',()=>{saved=null;renderSummary();});
      host.querySelector('.tw-add').addEventListener('click',e=>tryAdd(e.currentTarget,true));
      if(trigger)trigger.hidden=true;
    }
    function saveEmbroidery(){
      if(!ready)return;const n=letters(state.text);if(!n){toast('Type a name first.');return;}
      clearTimeout(debounce);cancelAnimationFrame(raf);makeGeometry();renderArtwork();
      saved={text:state.text.trim(),font:state.font,thread:state.thread,fabric:state.fabric,n,thumb:thumbJpeg()};
      saving=true;closeModal();saving=false;renderSummary();announce('saved',{letters:n});
    }
    // Closing without saving puts the modal back to what the card shows.
    function restoreSaved(){if(!saved)return;state.text=saved.text;$('name').value=saved.text;state.font=saved.font;state.thread=saved.thread;updateControls();makeGeometry();}
    // A cart thumbnail links back here with ?tw_text=&tw_font=&tw_thread=: rebuild the saved embroidery and show its card.
    function restoreFromUrl(){if(embed.mode!=='product'||urlRestore.cancelled)return;const q=new URLSearchParams(location.search);let text=clean((q.get('tw_text')||'').trim());if(MAX_LETTERS<=3)text=text.toUpperCase();if(!text||letters(text)>MAX_LETTERS)return;const norm=t=>String(t).toLowerCase().replace(/[^a-z]/g,'');const fi=fonts.findIndex(f=>norm(f.name)===norm(q.get('tw_font')||'')),ti=threads.findIndex(t=>norm(t.name)===norm(q.get('tw_thread')||''));state.text=text;$('name').value=text;if(fi>=0)state.font=fi;if(ti>=0)state.thread=ti;updateControls();makeGeometry();renderArtwork();saved={text,font:state.font,thread:state.thread,fabric:state.fabric,n:letters(text),thumb:thumbJpeg()};renderSummary();if(urlRestore.openWhenReady)openModal();}
    cartButton.addEventListener('click',()=>{if(embed.mode==='product'&&!previewing&&FLOW==='save')saveEmbroidery();else if(canSell())addToCart();});
    // A knit texture is pushed to the blanket's catalogue colour (per-channel gain on its
    // average), then cropped to the size at which its right edge best continues its left edge
    // (and bottom its top), so the lattice lines up across the repeat.
    const loadTexture=f=>new Promise((ok,fail)=>{const img=new Image();img.crossOrigin='anonymous';img.onload=()=>{
      const cr=f.crop||[0,0,1,1],sx=Math.round(img.width*cr[0]),sy=Math.round(img.height*cr[1]),w=Math.round(img.width*cr[2]),h=Math.round(img.height*cr[3]),c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');g.drawImage(img,sx,sy,w,h,0,0,w,h);if(f.sharpen){const id=g.getImageData(0,0,w,h),p=id.data,src=new Uint8ClampedArray(p),k=f.sharpen;for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){const i=(y*w+x)*4;for(let ch=0;ch<3;ch++){const v=src[i+ch],blur=(src[i-4+ch]+src[i+4+ch]+src[i-w*4+ch]+src[i+w*4+ch])/4;p[i+ch]=Math.max(0,Math.min(255,v+(v-blur)*k));}}g.putImageData(id,0,0);}if(f.photo){f.photoCanvas=c;ok();return;}
      const d=g.getImageData(0,0,w,h),px=d.data,n=px.length/4,lum=i=>.299*px[i]+.587*px[i+1]+.114*px[i+2];
      // A `neutral` texture is greyed first so it can be tinted to any blanket colour (Moon Stone borrows the pink tile).
      if(f.neutral)for(let i=0;i<px.length;i+=4)px[i]=px[i+1]=px[i+2]=lum(i);
      // Shadows are lifted toward the midtone: the knit's texture stays, but its dark pits stop competing with the thread.
      {let m=0;for(let i=0;i<px.length;i+=4)m+=lum(i);m/=n;const lift=f.lift??.28;
        for(let i=0;i<px.length;i+=4){const l=lum(i);if(l<m){const k=Math.max(0,l+(m-l)*lift)/Math.max(l,1);px[i]=Math.min(255,px[i]*k);px[i+1]=Math.min(255,px[i+1]*k);px[i+2]=Math.min(255,px[i+2]*k);}}}
      const sum=[0,0,0];for(let i=0;i<px.length;i+=4){sum[0]+=px[i];sum[1]+=px[i+1];sum[2]+=px[i+2];}
      const want=rgb(f.hex),gain=want.map((v,k)=>v/(sum[k]/n));
      for(let i=0;i<px.length;i+=4){px[i]=Math.min(255,px[i]*gain[0]);px[i+1]=Math.min(255,px[i+1]*gain[1]);px[i+2]=Math.min(255,px[i+2]*gain[2]);}
      g.putImageData(d,0,0);
      // A tinted texture shows its own colour in the swatch rather than the original photo's.
      
      // Tile size: the offset at which row 0 best matches the row after the last (and column likewise),
      // leaving a band B beyond it to crossfade across, so the wrap never shows a hard seam.
      const B=Math.round(w*.04),at=(x,y)=>(y*w+x)*4,seam=(size,axis)=>{let best=size-B,bv=Infinity;for(let n=size-B-90;n<=size-B;n++){let sum=0;const len=axis?w:h;for(let i=0;i<len;i+=2){const a=axis?at(i,0):at(0,i),b=axis?at(i,n):at(n,i);sum+=Math.abs(px[a]-px[b])+Math.abs(px[a+1]-px[b+1])+Math.abs(px[a+2]-px[b+2]);}if(sum<bv){bv=sum;best=n;}}return best;};
      // A `pure` tile is supplied seamless at its full size, so it is used whole: no seam search, no crossfade.
      const whole=f.pure||f.whole,cw=whole?w:seam(w,0),ch=whole?h:seam(h,1),one=document.createElement('canvas');one.width=cw;one.height=ch;const og=one.getContext('2d');og.drawImage(c,0,0);
      if(!whole){for(let i=0;i<B;i++){og.globalAlpha=1-i/B;og.drawImage(c,cw+i,0,1,ch,i,0,1,ch);}
      for(let j=0;j<B;j++){og.globalAlpha=1-j/B;og.drawImage(c,0,ch+j,cw,1,0,j,cw,1);}}
      og.globalAlpha=1;
      // Softened slightly, so the knit sits behind the thread instead of competing with it.
      // The blur runs over a 3x3 repeat and keeps the middle tile, so the tile edges blur into their neighbours rather than into nothing.
      const small=document.createElement('canvas');small.width=cw*2.4;small.height=ch*2.4;const sg=small.getContext('2d');sg.scale(.8,.8);sg.fillStyle=sg.createPattern(one,'repeat');sg.fillRect(0,0,cw*3,ch*3);
      const m=document.createElement('canvas');m.width=cw;m.height=ch;if(f.pure)m.getContext('2d').drawImage(one,0,0);else m.getContext('2d').drawImage(small,cw*.8,ch*.8,cw*.8,ch*.8,0,0,cw,ch);
      // A marled yarn (`marl`) mottles the tile at the stitch scale: a soft blotch across a stitch and a
      // half, a per-stitch flicker and half-stitch streaks, all periodic in the tile so the repeat stays seamless.
      if(f.marl){const mg=m.getContext('2d'),md=mg.getImageData(0,0,cw,ch),mp=md.data,r=random(4242);
        const grid=(nx,ny)=>{const v=new Float32Array(nx*ny);for(let i=0;i<v.length;i++)v[i]=r();return(x,y)=>{const gx=x/cw*nx,gy=y/ch*ny,x0=Math.floor(gx),y0=Math.floor(gy),fx=gx-x0,fy=gy-y0,a=(xx,yy)=>v[((yy%ny)+ny)%ny*nx+((xx%nx)+nx)%nx];return(a(x0,y0)*(1-fx)+a(x0+1,y0)*fx)*(1-fy)+(a(x0,y0+1)*(1-fx)+a(x0+1,y0+1)*fx)*fy;};};
        const coarse=grid(Math.round(cw/45),Math.round(ch/45)),fine=grid(Math.round(cw/22),Math.round(ch/22)),streak=grid(Math.round(cw/11),Math.round(ch/11));
        for(let y=0;y<ch;y++)for(let x=0;x<cw;x++){const i=(y*cw+x)*4,k=1+f.marl*((coarse(x,y)-.5)*.6+(fine(x,y)-.5)+(streak(x,y)-.5)*.7);mp[i]=Math.min(255,mp[i]*k);mp[i+1]=Math.min(255,mp[i+1]*k);mp[i+2]=Math.min(255,mp[i+2]*k);}
        mg.putImageData(md,0,0);}
      f.tileCanvas=m;f.pattern=clothCtx.createPattern(m,'repeat');ok();};img.onerror=fail;img.src=/^data:/.test(f.texture)?f.texture:f.texture+(f.texture.includes('?')?'&':'?')+'v='+TEXTURE_VERSION;});
    const ensureTexture=f=>f&&f.texture&&!f.pattern?loadTexture(f).catch(e=>{console.warn('Threadwork: texture failed, using plain stitches',f.name,e);f.texture=null;}):Promise.resolve();
    async function init(){
      for(const f of fonts)if(f.kit&&!f.pending){const l=document.createElement('link');l.rel='stylesheet';l.href=f.kit;document.head.append(l);}
      try{await Promise.all([...fonts.filter(f=>!f.pending).map(f=>document.fonts.load(`180px "${f.family}"`)),ensureTexture(fabrics[state.fabric])]);if(!(await document.fonts.load(fontSpec())).length)throw new Error('Font unavailable');drawCloth();makeGeometry();ready=true;updateControls();requestRender();$('loading').classList.add('done');centerCard();restoreFromUrl();}
      catch(error){$('loading').textContent='The lettering could not load. Refresh to try again.';console.error(error);if(embed.mode==='product'&&summaryHost()&&summaryHost().querySelector('.tw-card--loading'))renderSummary();}
    }
    init();
window.Threadwork={mode:embed.mode,product:embed.product,flow:typeof FLOW==='undefined'?'':FLOW,root:SHADOW,open:openModal,close:closeModal,debug:()=>({monogram,paths,strokeWidth,state,fonts,fabrics,ensureTexture,connectStrokes,closestStrokePoint,makeFontField,applyFont,wordCenterlines})};
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
