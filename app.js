(() => {
  "use strict";

  const deck = document.querySelector(".deck");
  const slides = [...document.querySelectorAll(".slide")];
  const progress = document.querySelector("[data-progress]");
  const counter = document.querySelector("[data-counter]");
  const clock = document.querySelector("[data-clock]");
  const panel = document.querySelector("[data-speaker-panel]");
  const noteTitle = document.querySelector("[data-note-title]");
  const noteBody = document.querySelector("[data-note-body]");
  const slideTime = document.querySelector("[data-slide-time]");
  const totalTime = document.querySelector("[data-total-time]");

  let index = 0;
  let overview = false;
  let startedAt = null;
  let timer = null;
  let touchStart = null;

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const rest = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
  };

  const totalSeconds = slides.reduce(
    (sum, slide) => sum + Number(slide.dataset.duration || 0),
    0
  );

  const fragments = () => [...slides[index].querySelectorAll(".fragment")];

  const updateNotes = () => {
    const slide = slides[index];
    const notes = slide.querySelector(".notes");
    noteTitle.textContent = slide.dataset.title || `Slide ${index + 1}`;
    noteBody.innerHTML = notes ? notes.innerHTML : "No notes.";
    slideTime.textContent = formatTime(Number(slide.dataset.duration || 0));
    totalTime.textContent = formatTime(totalSeconds);
  };

  const updateUrl = () => {
    const url = new URL(window.location.href);
    url.hash = slides[index].id;
    history.replaceState(null, "", url);
  };

  const render = () => {
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active && !overview));
      if (!active) {
        slide.querySelectorAll(".fragment").forEach((fragment) => {
          fragment.classList.remove("is-visible");
        });
      }
    });

    counter.textContent = `${String(index + 1).padStart(2, "0")} / ${slides.length}`;
    progress.style.width = `${slides.length > 1 ? (index / (slides.length - 1)) * 100 : 100}%`;
    updateNotes();
    updateUrl();
  };

  const startClock = () => {
    if (startedAt) return;
    startedAt = Date.now();
    timer = window.setInterval(() => {
      clock.textContent = formatTime((Date.now() - startedAt) / 1000);
    }, 1000);
  };

  const revealNext = () => {
    const hidden = fragments().find((fragment) => !fragment.classList.contains("is-visible"));
    if (!hidden) return false;
    hidden.classList.add("is-visible");
    return true;
  };

  const hidePrevious = () => {
    const visible = fragments().filter((fragment) => fragment.classList.contains("is-visible"));
    const last = visible.at(-1);
    if (!last) return false;
    last.classList.remove("is-visible");
    return true;
  };

  const go = (nextIndex, revealAll = false) => {
    index = Math.max(0, Math.min(slides.length - 1, nextIndex));
    render();
    if (revealAll) fragments().forEach((fragment) => fragment.classList.add("is-visible"));
  };

  const next = () => {
    startClock();
    if (!revealNext()) go(index + 1);
  };

  const previous = () => {
    startClock();
    if (!hidePrevious()) go(index - 1, true);
  };

  const toggleNotes = (force) => {
    const open = typeof force === "boolean" ? force : !panel.classList.contains("is-open");
    panel.classList.toggle("is-open", open);
    panel.setAttribute("aria-hidden", String(!open));
  };

  const toggleOverview = (force) => {
    overview = typeof force === "boolean" ? force : !overview;
    deck.classList.toggle("is-overview", overview);
    slides.forEach((slide) => slide.setAttribute("aria-hidden", String(!overview)));
    if (!overview) render();
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  };

  document.addEventListener("keydown", (event) => {
    const tag = event.target?.tagName;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;

    if (["ArrowRight", "ArrowDown", " ", "Enter", "PageDown"].includes(event.key)) {
      event.preventDefault();
      if (!overview) next();
    } else if (["ArrowLeft", "ArrowUp", "Backspace", "PageUp"].includes(event.key)) {
      event.preventDefault();
      if (!overview) previous();
    } else if (event.key.toLowerCase() === "n") {
      toggleNotes();
    } else if (event.key.toLowerCase() === "o") {
      toggleOverview();
    } else if (event.key.toLowerCase() === "f") {
      toggleFullscreen();
    } else if (event.key === "Home") {
      go(0);
    } else if (event.key === "End") {
      go(slides.length - 1);
    } else if (event.key === "Escape") {
      toggleNotes(false);
      if (overview) toggleOverview(false);
    }
  });

  document.querySelector("[data-prev]").addEventListener("click", previous);
  document.querySelector("[data-next]").addEventListener("click", next);
  document.querySelector("[data-notes-toggle]").addEventListener("click", () => toggleNotes());
  document.querySelector("[data-notes-close]").addEventListener("click", () => toggleNotes(false));
  document.querySelector("[data-overview-toggle]").addEventListener("click", () => toggleOverview());
  document.querySelector("[data-fullscreen-toggle]").addEventListener("click", toggleFullscreen);

  slides.forEach((slide, slideIndex) => {
    slide.addEventListener("click", (event) => {
      if (!overview || event.target.closest("a, button")) return;
      index = slideIndex;
      toggleOverview(false);
    });
  });

  document.addEventListener("touchstart", (event) => {
    touchStart = event.changedTouches[0].clientX;
  }, { passive: true });

  document.addEventListener("touchend", (event) => {
    if (touchStart === null || overview) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 60) delta < 0 ? next() : previous();
    touchStart = null;
  }, { passive: true });

  const hash = window.location.hash.slice(1);
  const hashIndex = slides.findIndex((slide) => slide.id === hash);
  if (hashIndex >= 0) index = hashIndex;
  render();

  window.addEventListener("hashchange", () => {
    const nextHash = window.location.hash.slice(1);
    const nextIndex = slides.findIndex((slide) => slide.id === nextHash);
    if (nextIndex >= 0 && nextIndex !== index) go(nextIndex);
  });

  window.addEventListener("beforeunload", () => {
    if (timer) window.clearInterval(timer);
  });
})();
