const courseGrid = document.querySelector(".course-grid");
const searchInput = document.querySelector(".search-input");
const filterButtons = document.querySelectorAll(".search-container button");

//Function to Render the Courses from data.js
function renderCourses(filteredCourses) {
  courseGrid.innerHTML = "";

  if (filteredCourses.length === 0) {
    courseGrid.innerHTML = "<p>No courses found.</p>";
    return;
  }

  filteredCourses.forEach(course => {
    const article = document.createElement("article");
    article.className = "course-card";

    article.innerHTML = `
      <img src="${course.image}" alt="${course.alt}" class="course-image" />
      <div class="course-content">
        <h2 class="course-title">${course.title}</h2>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
          <div class="meta-item">
            <span>Audience: ${course.audience}</span></time>
            <time datetime="${course.duration}">${course.durationText}</time>
          </div>
        </div>
        <a href="${course.link}" class="course-btn">View details</a>
      </div>
    `;

    courseGrid.appendChild(article);
  });
}

renderCourses(courses);

//Search Functionality
searchInput.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();

  const filtered = courses.filter(course =>
    course.title.toLowerCase().includes(query) ||
    course.description.toLowerCase().includes(query)
  );

  renderCourses(filtered);
});

// Filter Buttons Functionality
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.textContent.trim();

    let filtered =
      category === "All"
        ? courses
        : courses.filter(course => course.category.includes(category));

    renderCourses(filtered);
  });
});
