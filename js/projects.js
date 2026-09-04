const filterButtons = document.querySelectorAll(
  ".project-filter"
);

const projectCards = document.querySelectorAll(
  ".project-gallery-card"
);

const projectResults = document.querySelector(
  "#projectResults"
);

function filterProjects(category) {
  let visibleProjects = 0;

  projectCards.forEach((card) => {
    const matchesCategory =
      category === "all" ||
      card.dataset.category === category;

    card.hidden = !matchesCategory;

    if (matchesCategory) {
      visibleProjects += 1;
    }
  });

  if (projectResults) {
    const categoryName =
      category === "all" ? "all categories" : category;

    projectResults.textContent =
      `${visibleProjects} projects shown for ${categoryName}.`;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((currentButton) => {
      currentButton.classList.remove("is-active");
      currentButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");

    filterProjects(button.dataset.filter);
  });
});

filterProjects("all");