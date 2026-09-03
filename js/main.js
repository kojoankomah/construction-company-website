const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#mainNavigation");
const siteHeader = document.querySelector("#siteHeader");
const currentYear = document.querySelector("#currentYear");

const desktopBreakpoint = 960;

function setMenuState(open) {
  if (!menuButton || !navigation) {
    return;
  }

  navigation.classList.toggle("is-open", open);
  menuButton.classList.toggle("is-open", open);
  document.body.classList.toggle("navigation-open", open);

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation"
  );
}

if (menuButton && navigation) {
  const navigationLinks = navigation.querySelectorAll("a");

  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    setMenuState(!isOpen);
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("click", (event) => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    const clickedInsideNavigation =
      navigation.contains(event.target);

    const clickedMenuButton =
      menuButton.contains(event.target);

    if (
      isOpen &&
      !clickedInsideNavigation &&
      !clickedMenuButton
    ) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
      setMenuState(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= desktopBreakpoint) {
      setMenuState(false);
    }
  });
}

function updateHeaderAppearance() {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle(
    "is-scrolled",
    window.scrollY > 20
  );
}

updateHeaderAppearance();

window.addEventListener(
  "scroll",
  updateHeaderAppearance,
  { passive: true }
);

function updateActiveNavigation() {
  if (!navigation) {
    return;
  }

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  const navigationLinks =
    navigation.querySelectorAll('a[href$=".html"]');

  navigationLinks.forEach((link) => {
    const linkPage =
      link.getAttribute("href").split("#")[0];

    if (linkPage === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

updateActiveNavigation();

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}