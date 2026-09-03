// proto-config.js — what THIS prototype puts in the shared prototype toolbar
// (toolbar/prototype-bar.js, a git subtree of effectory-ux/prototype-toolbar).
// Host-specific by design; the toolbar itself knows nothing about this page.
// One page for now: the bar names the prototype and hands out its live link.
// Add `versions`, `screens`, `edgeCases` or `variants` here as the prototype
// grows — each menu appears as soon as it has entries.
window.PROTO_TOOLBAR = {
  key: "rd-5x8n",              // the ?<key>-toolbar-active gate of the live site
  prefix: "rd",                // localStorage namespace
  name: "Results dashboard",
  live: "https://effectory-ux.github.io/results-dashboard/"
};
