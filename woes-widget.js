(function () {
  if (window.__calbudgetWoesDocsWidgetInstalled) return;
  window.__calbudgetWoesDocsWidgetInstalled = true;

  window.Woes =
    window.Woes ||
    function () {
      (window.Woes.q = window.Woes.q || []).push(
        Array.prototype.slice.call(arguments),
      );
    };

  var script = document.createElement("script");
  script.src = "https://woes.dev/widget.js";
  script.async = true;
  script.setAttribute(
    "data-public-key",
    "trovw_agent_0569335271704cd594b3900a5448cc43",
  );

  document.head.appendChild(script);
})();
