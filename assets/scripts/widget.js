if("undefined"!=typeof window&&void 0===window.beholdWidgets&&"noModule"in HTMLScriptElement.prototype){async function e(e){const{default:t}=await function(e){switch(e){case"./widgets/classic/classic.js":return import("./classic-d4bf10fe.js");case"./widgets/classic/defaultSettings.js":return import("./defaultSettings-64b1ddda.js");case"./widgets/error/error.js":return import("./error-453bc5cc.js");case"./widgets/galleryWall/defaultSettings.js":return import("./defaultSettings-eda50da6.js");case"./widgets/galleryWall/galleryWall.js":return import("./galleryWall-f6d331ca.js");default:return new Promise((function(t,s){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./widgets/${e}/${e}.js`);return t}function t(e,t){return fetch(`https://feeds.behold.so/${e}`).then((e=>e.json())).then((e=>{e.status,t(e)})).catch((e=>{console.log(e)}))}function s(){const s=document.querySelectorAll("[data-behold-id]");if(!s.length)return{status:"error",message:"No widget containers found"};window.beholdWidgets.a11yEnabled||(window.beholdWidgets.a11yEnabled=!0,document.addEventListener("keydown",(e=>{"Tab"===e.key&&document.body.classList.add("behold-keyboard-nav")})),document.addEventListener("mousedown",(e=>{0===e.clientX&&0===e.clientY||document.body.classList.remove("behold-keyboard-nav")})),document.addEventListener("mousemove",(e=>{e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||0===e.movementX||0===e.movementY||document.body.classList.remove("behold-keyboard-nav")})));for(const n of s){t(n.getAttribute("data-behold-id"),(async t=>{if("error"===t.status)e("error").then((e=>new e(n,t.message)));else{let s=window.ResizeObserver,o=window.IntersectionObserver;if(!s){const{default:e}=await import("./ResizeObserver.es-d777539c.js");s=e}o||await import("./intersection-observer-044a6fec.js");e(t.widgetSettings.type||"classic").then((e=>new e(n,t,s)))}}))}return"Successfully initialized Behold widgets"}window.beholdWidgets={initialize:s,a11yEnabled:!1},s()}