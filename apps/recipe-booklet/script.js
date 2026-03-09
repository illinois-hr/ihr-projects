const PER_PAGE = 15;

let currentPage = 1;
let searchTerm = "";
let activeCategory = "All";
let lastFocusedButton = null;

const grid = document.getElementById("recipe-grid");
const filtersEl = document.getElementById("filters");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("recipe-search");
const statusEl = document.getElementById("results-status");

const overlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

/* ---------- Categories ---------- */

const categories = ["All", ...new Set(RECIPES.map((r) => r.category))];

categories.forEach((cat) => {
  const btn = document.createElement("button");

  btn.className = "filter-btn";
  btn.textContent = cat;

  btn.setAttribute("aria-pressed", cat === "All");

  btn.onclick = () => {
    activeCategory = cat;
    currentPage = 1;

    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.setAttribute("aria-pressed", false));

    btn.setAttribute("aria-pressed", true);

    render();
  };

  filtersEl.appendChild(btn);
});

/* ---------- Search ---------- */

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value.toLowerCase();
  currentPage = 1;

  render();
});

/* ---------- Filtering ---------- */

function getFiltered() {
  return RECIPES.filter((recipe) => {
    const matchSearch = recipe.title.toLowerCase().includes(searchTerm);

    const matchCategory =
      activeCategory === "All" || recipe.category === activeCategory;

    return matchSearch && matchCategory;
  });
}

/* ---------- Render ---------- */

function render() {
  const filtered = getFiltered();

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  currentPage = Math.min(currentPage, totalPages);

  const start = (currentPage - 1) * PER_PAGE;

  const slice = filtered.slice(start, start + PER_PAGE);

  grid.innerHTML = "";

  slice.forEach((recipe) => {
    const li = document.createElement("li");

    li.className = "card";

    li.innerHTML = `


<h3>${recipe.title}</h3>

<p class="card-meta">
Serves ${recipe.servings}
</p>

<p class="card-meta">
Calories ${recipe.nutrition.Calories}
</p>

<button
class="card-btn"
aria-label="View full recipe for ${recipe.title}"
>
View recipe
</button>
`;

    const btn = li.querySelector("button");

    btn.onclick = () => {
      lastFocusedButton = btn;
      openModal(recipe);
    };

    grid.appendChild(li);
  });

  statusEl.textContent = `Showing ${slice.length} of ${filtered.length} recipes`;

  renderPagination(totalPages);
}

/* ---------- Pagination ---------- */

function renderPagination(totalPages) {
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");

    btn.className = "page-btn";
    btn.textContent = i;

    if (i === currentPage) {
      btn.setAttribute("aria-current", "page");
    }

    btn.onclick = () => {
      currentPage = i;
      render();
    };

    pagination.appendChild(btn);
  }
}

/* ---------- Modal ---------- */

function openModal(recipe) {
  const nutritionRows = Object.entries(recipe.nutrition)
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");

  modalContent.innerHTML = `

<h2 id="modal-title">${recipe.title}</h2>

<p><strong>Servings:</strong> ${recipe.servings}</p>

<h3>Ingredients</h3>

<ul>
${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
</ul>

<h3>Nutrition</h3>

<table>
<tbody>
${nutritionRows}
</tbody>
</table>

<h3>Instructions</h3>

<ol>
${recipe.instructions.map((i) => `<li>${i}</li>`).join("")}
</ol>

`;

  overlay.hidden = false;

  modalClose.focus();
}

/* ---------- Close Modal ---------- */

function closeModal() {
  overlay.hidden = true;

  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
}

modalClose.onclick = closeModal;

overlay.onclick = (e) => {
  if (e.target === overlay) {
    closeModal();
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) {
    closeModal();
  }
});

/* ---------- Start ---------- */

render();
