document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  let isTop = null;
  let ticking = false;
  const enterTop = 20;
  const exitTop = 60;

  const applyState = () => {
    const y = window.scrollY;
    const next = isTop === null ? y < enterTop : (isTop ? y < exitTop : y < enterTop);
    if (next !== isTop) {
      topbar.classList.toggle("is-top", next);
      isTop = next;
    }
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(applyState);
  };

  applyState();
  window.addEventListener("scroll", onScroll, { passive: true });
});
