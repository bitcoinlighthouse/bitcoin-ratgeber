// Fügt oben rechts in die Menüleiste einen Sprachumschalter ein.
(function () {
  var langs = [
    { code: "de", label: "DE", url: "/" },
    { code: "en", label: "EN", url: "/en/" },
    { code: "es", label: "ES", url: "/es/" },
  ];
  var current = (document.documentElement.lang || "de").slice(0, 2);
  var bar = document.querySelector(".right-buttons");
  if (!bar) return;
  var wrap = document.createElement("div");
  wrap.className = "language-picker";
  wrap.style.display = "inline-flex";
  wrap.style.gap = "0.5em";
  wrap.style.alignItems = "center";
  wrap.style.marginLeft = "0.6em";
  langs.forEach(function (l) {
    var a = document.createElement("a");
    a.href = l.url;
    a.textContent = l.label;
    a.setAttribute("aria-label", l.code);
    a.style.fontSize = "0.85em";
    a.style.textDecoration = "none";
    a.style.opacity = l.code === current ? "1" : "0.55";
    a.style.fontWeight = l.code === current ? "700" : "400";
    wrap.appendChild(a);
  });
  bar.appendChild(wrap);
})();
