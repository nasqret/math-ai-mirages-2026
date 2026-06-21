(() => {
  "use strict";

  if (!["auto", "light", "dark"].includes(document.documentElement.dataset.mode)) {
    document.documentElement.dataset.mode = "auto";
  }

  const addReturnLink = () => {
    if (document.querySelector(".slides-return")) return;

    const link = document.createElement("a");
    link.className = "slides-return";
    link.href = "https://nasqret.github.io/math-ai-mirages-2026/";
    link.textContent = "← Slides";
    link.setAttribute("aria-label", "Return to the browser presentation");

    const logoItem = document.querySelector(".navbar-brand")?.closest(".sidebar-primary-item");
    if (logoItem) {
      const item = document.createElement("div");
      item.className = "sidebar-primary-item slides-return-item";
      item.append(link);
      logoItem.after(item);
    } else {
      document.body.prepend(link);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addReturnLink, { once: true });
  } else {
    addReturnLink();
  }
})();
