/* ─── 1. ACCESSIBILITY DROPDOWN ─────────────────────────────── */
let animationsEnabled = true;

const trigger = document.getElementById("a11y-trigger");
const dropdown = document.getElementById("a11y-dropdown");
const toggleBtn = document.getElementById("animation-toggle");
const toggleLabel = document.getElementById("toggle-label");

if (trigger && dropdown) {
  trigger.addEventListener("click", () => {
    const isOpen = !dropdown.hidden;
    dropdown.hidden = isOpen;
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });
  document.addEventListener("click", (e) => {
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dropdown.hidden) {
      dropdown.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  });
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    animationsEnabled = !animationsEnabled;
    toggleBtn.setAttribute("aria-checked", String(animationsEnabled));
    toggleLabel.textContent = animationsEnabled
      ? "Turn Off Animations"
      : "Turn On Animations";
  });
}

/* ─── 2. COUNT-UP ANIMATIONS ────────────────────────────────── */
function formatNumber(value, decimals, prefix, suffix) {
  const num =
    decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
  return (prefix || "") + num + (suffix || "");
}

/**
 * Animate a number from 0 to its target.
 * @param {HTMLElement} container - element with data-value (may be the number
 *   element itself OR a parent card that contains a .mcard-num / .stat-num child)
 */
function animateCard(container) {
  const target = parseFloat(container.dataset.value);
  const decimals = parseInt(container.dataset.decimals || "0", 10);
  const prefix = container.dataset.prefix || "";
  const suffix = container.dataset.suffix || "";
  if (isNaN(target)) return;

  // Find the display element: prefer a child .mcard-num or .stat-num,
  // fall back to the container itself (for legacy big-stat elements)
  const displayEl =
    container.querySelector(
      ".mcard-num, .stat-num, .big-stat, .ttf-num, .ivp-stat-num, .expo-stat-val, .retire-num, .ats-big",
    ) || container;

  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    displayEl.textContent = formatNumber(current, decimals, prefix, suffix);
  }, duration / steps);
}

function initCountUp() {
  const els = document.querySelectorAll("[data-value]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          if (animationsEnabled) {
            animateCard(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  els.forEach((el) => observer.observe(el));
}

/* ─── 3. SCROLL REVEAL ──────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  els.forEach((el) => observer.observe(el));
}

/* ─── INIT ──────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initCountUp();
  initReveal();
});
