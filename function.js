// mobile menu
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// cookie close
const cookieClose = document.getElementById('cookieClose');
const cookieBar = document.querySelector('.cookie-bar');
if (cookieClose && cookieBar) {
  cookieClose.addEventListener('click', () => {
    cookieBar.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const selectedLang = document.getElementById('selectedLang');
  const langDropdown = document.getElementById('langDropdown');

  if (!selectedLang || !langDropdown) {
    console.warn('Language elements not found');
    return;
  }

  // click on dropdown items
  langDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const langCode = link.getAttribute('data-lang');
      const flagUrl = link.getAttribute('data-flag');

      // update main button
      selectedLang.innerHTML = `<img src="${flagUrl}" alt="${langCode}"> ${langCode}`;

      // save so it stays on refresh
      localStorage.setItem('mx_lang', JSON.stringify({ langCode, flagUrl }));
    });
  });

  // load saved selection
  const saved = localStorage.getItem('mx_lang');
  if (saved) {
    const { langCode, flagUrl } = JSON.parse(saved);
    selectedLang.innerHTML = `<img src="${flagUrl}" alt="${langCode}"> ${langCode}`;
  }
});

// Smooth scroll for How it works button
document.querySelector('.btn.ghost')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#evaluation-process').scrollIntoView({ behavior: 'smooth' });
});

balanceInput.addEventListener("input", () => {
  if (balanceInput.value && balanceInput.value > 0) {
    balanceInput.classList.add("valid");
  } else {
    balanceInput.classList.remove("valid");
  }
  updateSummary();
});

document.querySelectorAll(".pricing-tabs .tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".pricing-tabs .tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".pricing-grid").forEach(grid => grid.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// PRICING TABS SWITCHER
document.querySelectorAll(".pricing-tabs .tab").forEach(tab => {
    tab.addEventListener("click", function () {

        // Remove active class from all tabs
        document.querySelectorAll(".pricing-tabs .tab")
            .forEach(t => t.classList.remove("active"));

        // Add active to clicked tab
        this.classList.add("active");

        const target = this.getAttribute("data-target");

        // Hide all pricing grids
        document.querySelectorAll(".pricing-grid")
            .forEach(grid => grid.classList.remove("active"));

        // Show selected pricing grid
        document.getElementById(target).classList.add("active");

        // Scroll into view smoothly (optional)
        document.getElementById(target).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
