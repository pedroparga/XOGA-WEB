document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  const nav = document.getElementById("main-nav") || document.querySelector(".nav");
  const menuToggle = document.querySelector(".menu-toggle");

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

  if (menuToggle && nav) {
    const closeMenu = () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      topbar.classList.remove("menu-open");
      nav.style.display = "";
    };

    const toggleMenu = () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      topbar.classList.toggle("menu-open", isOpen);
      nav.style.display = isOpen ? "flex" : "";
    };

    menuToggle.addEventListener("click", toggleMenu);
    menuToggle.addEventListener(
      "touchstart",
      (e) => {
        if (e.cancelable) e.preventDefault();
        toggleMenu();
      },
      { passive: false }
    );

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 600) closeMenu();
    });
  }
});
