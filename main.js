document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.querySelector(".topbar");
  if (topbar) {
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
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    const statusEl = contactForm.querySelector("[data-form-status]");
    const submitBtn = contactForm.querySelector("button[type='submit']");

    const setStatus = (message, isError = false) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.classList.toggle("is-error", isError);
    };

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const company = String(formData.get("company") || "");
      const subject = String(formData.get("subject") || "").trim();

      if (!name || !email || !message) {
        setStatus("Completa nombre, email y mensaje.", true);
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = "Enviando...";
      }

      try {
        const formAction = contactForm.getAttribute("action") || "";
        const endpoint = formAction || "/api/contact";
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            company,
          }),
        });

        let payload = null;
        try {
          payload = await response.json();
        } catch {
          payload = null;
        }

        if (!response.ok) {
          const errorMessage = payload && payload.error ? payload.error : "Error enviando el mensaje. Prueba de nuevo.";
          setStatus(errorMessage, true);
          return;
        }

        contactForm.reset();
        setStatus("Mensaje enviado. Te responderemos pronto.");
        setTimeout(() => {
          window.location.reload();
        }, 400);
      } catch {
        setStatus("Error enviando el mensaje. Prueba de nuevo.", true);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.originalText || "Enviar mensaje";
        }
      }
    });
  }
});
