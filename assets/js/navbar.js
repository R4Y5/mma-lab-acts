(function () {
  /* ── Detect if we're at the repo root or one level deep ── */
  const path   = window.location.pathname;
  const isRoot = /\/mma-lab-acts\/?(?:index\.html)?$/.test(path);
  const base   = isRoot ? "./" : "../";

  /* ── Nav links config ── */
  const links = [
    { href: `${base}index.html`,          label: "Home"     },
    { href: `${base}projects/index.html`, label: "Projects" },
    { href: `${base}about/index.html`,    label: "About"    },
  ];

  /* ── Determine active link by current path ── */
  function isActive(label) {
    if (label === "Home")     return isRoot;
    if (label === "Projects") return path.includes("/projects/");
    if (label === "About")    return path.includes("/about/");
    return false;
  }

  /* ── Build desktop nav links ── */
  const desktopLinks = links.map(({ href, label }) => `
    <li>
      <a href="${href}" class="nav-link${isActive(label) ? " active" : ""}">
        ${label}
        <span class="nav-underline"></span>
      </a>
    </li>`).join("");

  /* ── Build mobile nav links ── */
  const mobileLinks = links.map(({ href, label }) => `
    <li>
      <a href="${href}" class="mobile-link${isActive(label) ? " active" : ""}">
        ${label}
      </a>
    </li>`).join("");

  /* ── Inject full navbar HTML ── */
  const navHTML = `
    <nav class="navbar">

      <a class="nav-logo" href="${base}index.html">
        <img
          src="${base}assets/img/sun.png" width="40"
          alt="Site logo"
          class="nav-logo-img"
        />
      </a>

      <ul class="nav-links">
        ${desktopLinks}
      </ul>

      <!-- Hamburger toggle (visible on mobile) -->
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile dropdown -->
      <div class="mobile-menu">
        <ul>${mobileLinks}</ul>
      </div>

    </nav>`;

  const placeholder = document.getElementById("navbar");
  if (placeholder) placeholder.outerHTML = navHTML;

  /* ── Scroll shadow ── */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });

  /* ── Mobile hamburger toggle ── */
  const toggle = document.querySelector(".nav-toggle");

  toggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  /* ── Close mobile menu when a link is clicked ── */
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

})();