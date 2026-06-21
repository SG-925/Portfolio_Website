// ==========================================
// EDIT YOUR PROJECTS HERE
// ==========================================
// Simply add or remove project objects to this array
// Make sure to follow the same structure as the examples below

const projects = [
  {
    title: "Macropad - PCB Design & Programming",
    description: "Designed a custom PCB and programmed a fully functional macropad from scratch. Learned PCB design principles and brought the hardware project from concept to completion.",
    tags: ["PCB Design", "Programming", "Hardware Design"],
    category: "Robotics",
    status: "Completed",
    year: "2024"
  },
  {
    title: "Financial Statement Analysis - Chipotle",
    description: "Completed comprehensive financial statement analysis for Chipotle as part of FBLA competition. Won FBLA competitions with this project, demonstrating financial analysis, data interpretation, and presentation skills.",
    tags: ["Financial Analysis", "Data Analysis", "Presentations"],
    category: "Business",
    status: "Completed",
    year: "2024"
  },
  {
    title: "FRC Robot Design Contribution",
    description: "Helped design and contribute to the mechanical and strategic design of FRC team #1683's competition robot. Involved in design decisions and bringing designs to life for competitions.",
    tags: ["CAD", "Mechanical Design", "Strategy"],
    category: "Robotics",
    status: "Completed",
    year: "2026"
  },
  {
    title: "Development Board - KiCad PCB",
    description: "Currently designing and building a custom development board completely from scratch using KiCad. Learning advanced PCB design techniques and planning for prototype testing and iteration.",
    tags: ["KiCad", "PCB Design", "Electronics"],
    category: "Robotics",
    status: "In Progress",
    year: "2026"
  },
  {
    title: "3D Printing Design Projects",
    description: "Designing various components and projects for 3D printing including prototypes, mechanical parts, and functional items. Iterating designs and learning optimization for 3D print quality.",
    tags: ["3D Printing", "CAD", "Design"],
    category: "Robotics",
    status: "In Progress",
    year: "2026"
  },
  {
    title: "PCB Design Studies",
    description: "Deepening knowledge of PCB design through various projects and self-directed learning. Exploring component selection, layout optimization, and manufacturing considerations.",
    tags: ["PCB Design", "Electronics", "Technical Learning"],
    category: "Robotics",
    status: "In Progress",
    year: "2026"
  },
  {
    title: "FBLA Financial Modeling",
    description: "Developing financial modeling and analysis skills through FBLA competitions and projects. Working on real-world financial data analysis and creating compelling presentations.",
    tags: ["Financial Modeling", "Analysis", "Business"],
    category: "Business",
    status: "In Progress",
    year: "2026"
  },
  {
    title: "AI Club Tutoring Initiatives",
    description: "Volunteer tutoring members of the AI club, helping peers understand AI concepts, applications, and implementations. Contributing to club learning and community building.",
    tags: ["AI", "Tutoring", "Community"],
    category: "CS",
    status: "In Progress",
    year: "2026"
  }
];

// ==========================================
// PROJECT FILTERING & RENDERING
// ==========================================

const projectGrid = document.querySelector("#projectGrid");
const filters = document.querySelectorAll(".filter");

function renderProjects(category) {
  const visible = category === "All" ? projects : projects.filter((project) => project.category === category);
  projectGrid.innerHTML = visible.map((project) => `
    <article class="card" data-category="${project.category}">
      <div class="project-top">
        <div class="tags">
          <span class="tag">${project.category}</span>
          ${project.status === "In Progress" ? '<span class="status">In Progress</span>' : ""}
        </div>
        <span class="muted" style="font-size: 0.75rem;">${project.year}</span>
      </div>
      <h3 style="margin-top: 14px;">${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-bottom">
        <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="project-actions"><a href="#" aria-label="${project.title} GitHub">GH</a><a href="#" aria-label="${project.title} external link">-&gt;</a></div>
      </div>
    </article>
  `).join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects("All");

// ==========================================
// NAVIGATION HIGHLIGHTING
// ==========================================

const links = document.querySelectorAll(".nav-links a");
const sections = [...links].map((link) => document.querySelector(link.getAttribute("href")));

function updateActiveLink() {
  const current = sections.findLast((section) => section && section.offsetTop - 120 <= window.scrollY);
  if (!current) return;
  links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`));
}

window.addEventListener("scroll", updateActiveLink, { passive: true });

// ==========================================
// CONTACT FORM
// ==========================================

const form = document.querySelector("#contactForm");
const success = document.querySelector("#successMessage");
const sendAnother = document.querySelector("#sendAnother");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("hidden");
  success.classList.add("visible");
});

sendAnother.addEventListener("click", () => {
  form.reset();
  success.classList.remove("visible");
  form.classList.remove("hidden");
});
