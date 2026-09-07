(function () {
  var btn = document.getElementById("site-menu-btn");
  var panel = document.getElementById("site-nav-panel");
  if (!btn || !panel) return;
  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  }
  btn.addEventListener("click", function () {
    setOpen(!document.body.classList.contains("nav-open"));
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();
