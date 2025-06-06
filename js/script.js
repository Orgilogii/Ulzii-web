document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on index page
  const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  
  // Initialize variables
  const dropdowns = document.querySelectorAll(".dropdown");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const languageToggle = document.querySelector(".language-toggle");
  const currentFlag = document.getElementById("currentFlag");
  let isMobile = window.innerWidth <= 768;
  let currentLanguage = "mn";

  // Handle window resize
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
      dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    }
  });

  // Mobile menu toggle
  if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Handle dropdowns
  dropdowns.forEach((dropdown) => {
    if (!isMobile) {
      // Desktop hover
      dropdown.addEventListener("mouseenter", function () {
        dropdowns.forEach((d) => d.classList.remove("active"));
        this.classList.add("active");
      });

      dropdown.addEventListener("mouseleave", function () {
        this.classList.remove("active");
      });
    }

    // Mobile click
    dropdown.addEventListener("click", function (e) {
      if (isMobile) {
        e.preventDefault();
        e.stopPropagation();

        const wasActive = this.classList.contains("active");
        dropdowns.forEach((d) => d.classList.remove("active"));

        if (!wasActive) {
          this.classList.add("active");
        }
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (isMobile && !e.target.closest(".nav-menu") && !e.target.closest(".mobile-menu")) {
      navMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });

  // Language switcher
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "mn" ? "en" : "mn";
      if (currentFlag) {
        currentFlag.src = `images/flag-${currentLanguage}.png`;
      }
      updateContent();
    });
  }

  function updateContent() {
    const elements = document.querySelectorAll("[data-mn][data-en]");
    elements.forEach((element) => {
      const mnText = element.dataset.mn;
      const enText = element.dataset.en;
      element.innerHTML = currentLanguage === "mn" ? mnText : enText;
    });
  }

  // Only load header and footer for non-index pages
  if (!isIndexPage) {
    loadHeaderAndFooter();
  }
});

// Modal functionality
function openModal(modalId) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  if (!modal || !modalImage || !modalTitle || !modalDescription) {
    console.error("Modal elements not found");
    return;
  }

  const modalData = {
    modal1: {
      image: "images/cargo-transport.jpg",
      title: "Fleet Vehicles",
      description: "Our modern fleet of vehicles ensures reliable transportation services.",
    },
    modal2: {
      image: "images/logistics.jpg",
      title: "Cargo Trucks",
      description: "Heavy-duty cargo trucks for efficient freight transportation.",
    },
    modal3: {
      image: "images/our-team.jpg",
      title: "Our Team",
      description: "Professional and experienced team members dedicated to excellence.",
    },
    modal4: {
      image: "images/model4.jpg",
      title: "Road Transport",
      description: "Comprehensive road transportation solutions for all your needs.",
    },
    modal5: {
      image: "images/model5.jpg",
      title: "Logistics Center",
      description: "State-of-the-art logistics center for efficient operations.",
    },
    modal6: {
      image: "images/model6.jpg",
      title: "Fleet Formation",
      description: "Organized fleet formation for optimal transportation efficiency.",
    },
    modal7: {
      image: "images/model7.jpg",
      title: "Driver Team",
      description: "Skilled and certified drivers ensuring safe transportation.",
    },
    modal8: {
      image: "images/model8.jpg",
      title: "Company Event",
      description: "Team building and company events fostering unity and growth.",
    },
  };

  const data = modalData[modalId];
  if (data) {
    modalImage.src = data.image;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("imageModal");
  if (modal && event.target === modal) {
    closeModal();
  }
});

// Load header and footer for non-index pages
function loadHeaderAndFooter() {
  const headerHTML = `
      <!-- Header -->
      <header class="header">
          <div class="container">
              <div class="header-content">
                  <!-- Logo -->
                  <a href="index.html" class="logo-link">
                      <img src="images/logo (2).png" alt="Buyan Ulzii Khur Trans" class="logo-image">
                  </a>

                  <!-- Navigation -->
                  <nav class="nav-menu">
                      <div class="nav-item dropdown">
                          <span class="nav-text" data-mn="Бидний тухай" data-en="About Us">Бидний тухай</span>
                          <div class="dropdown-arrow"></div>
                          <div class="dropdown-content">
                              <a href="ceo-message.html" data-mn="Захирлын мэндчилгээ" data-en="CEO Message">Захирлын мэндчилгээ</a>
                              <a href="company-introduction.html" data-mn="Компанийн танилцуулга" data-en="Company Introduction">Компанийн танилцуулга</a>
                              <a href="mission-values.html" data-mn="Эрхэм зорилго, үнэт зүйлс" data-en="Mission & Values">Эрхэм зорилго, үнэт зүйлс</a>
                              <a href="history.html" data-mn="Түүхэн замнал" data-en="History">Түүхэн замнал</a>
                              <a href="competitive-advantages.html" data-mn="Өрсөлдөөний давуу тал" data-en="Competitive Advantages">Өрсөлдөөний давуу тал</a>
                          </div>
                      </div>
                      
                      <div class="nav-item dropdown">
                          <span class="nav-text" data-mn="Үйл ажиллагаа" data-en="Services">Үйл ажиллагаа</span>
                          <div class="dropdown-arrow"></div>
                          <div class="dropdown-content">
                              <a href="international-cargo.html" data-mn="Үйс хоорондын байнгын ачаа тээвэр" data-en="International Cargo Transport">Үйс хоорондын байнгын ачаа тээвэр</a>
                              <a href="domestic-transport.html" data-mn="Дотоодын тээвэр" data-en="Domestic Transport">Дотоодын тээвэр</a>
                              <a href="maintenance-services.html" data-mn="Засвар үйлчилгээ" data-en="Maintenance Services">Засвар үйлчилгээ</a>
                          </div>
                      </div>
                      
                      <div class="nav-item dropdown">
                          <span class="nav-text" data-mn="Хүний нөөц" data-en="Human Resources">Хүний нөөц</span>
                          <div class="dropdown-arrow"></div>
                          <div class="dropdown-content">
                              <a href="human-rights.html" data-mn="Хүний эрх, эрх чөлөө" data-en="Human Rights">Хүний эрх, эрх чөлөө</a>
                              <a href="hr-policy.html" data-mn="Хүний нөөцийн бодлого" data-en="HR Policy">Хүний нөөцийн бодлого</a>
                              <a href="selection-process.html" data-mn="Сонгон шалгаруулалтын үе шат" data-en="Selection Process">Сонгон шалгаруулалтын үе шат</a>
                              <a href="open-positions.html" data-mn="Нээлттэй ажлын байр" data-en="Open Positions">Нээлттэй ажлын байр</a>
                          </div>
                      </div>
                      
                      <div class="nav-item dropdown">
                          <span class="nav-text" data-mn="Мэдээ" data-en="News">Мэдээ</span>
                          <div class="dropdown-arrow"></div>
                      </div>
                      
                      <div class="nav-item dropdown">
                          <span class="nav-text" data-mn="Холбоо барих" data-en="Contact">Холбоо барих</span>
                          <div class="dropdown-arrow"></div>
                      </div>
                      
                      <div class="language-switcher">
                          <div class="language-toggle">
                              <img src="images/flag-mn.png" alt="Language" class="flag-icon" id="currentFlag">
                          </div>
                      </div>
                  </nav>

                  <!-- Mobile Menu -->
                  <div class="mobile-menu">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>
      </header>
  `;

  const footerHTML = `
      <!-- Footer -->
      <footer class="footer">
          <div class="container">
              <div class="footer-content">
                  <div class="footer-section">
                      <h3 data-mn="Learn More" data-en="Learn More">Learn More</h3>
                      <ul>
                          <li><a href="#" data-mn="Бидний тухай" data-en="About Us">Бидний тухай</a></li>
                          <li><a href="#" data-mn="Үйл ажиллагаа" data-en="Services">Үйл ажиллагаа</a></li>
                          <li><a href="#" data-mn="Хүний нөөц" data-en="Human Resources">Хүний нөөц</a></li>
                          <li><a href="#" data-mn="Мэдээ" data-en="News">Мэдээ</a></li>
                          <li><a href="#" data-mn="Холбоо барих" data-en="Contact">Холбоо барих</a></li>
                      </ul>
                  </div>

                  <div class="footer-section">
                      <h3 data-mn="Tickets & Booking" data-en="Tickets & Booking">Tickets & Booking</h3>
                      <ul>
                          <li><a href="#" data-mn="Lift Tickets" data-en="Lift Tickets">Lift Tickets</a></li>
                          <li><a href="#" data-mn="Season Passes" data-en="Season Passes">Season Passes</a></li>
                          <li><a href="#" data-mn="Vacation Packages" data-en="Vacation Packages">Vacation Packages</a></li>
                      </ul>
                  </div>

                  <div class="footer-section">
                      <h3 data-mn="Contact Us" data-en="Contact Us">Contact Us</h3>
                      <ul>
                          <li data-mn="Hotel Reservation:" data-en="Hotel Reservation:">Hotel Reservation: <strong>123-456-7890</strong></li>
                          <li data-mn="Ticket Office:" data-en="Ticket Office:">Ticket Office: <strong>123-456-7890</strong></li>
                      </ul>
                  </div>

                  <div class="footer-section">
                      <h3 data-mn="Social" data-en="Social">Social</h3>
                      <div class="social-links">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                          <a href="#"><i class="fab fa-twitter"></i></a>
                          <a href="#"><i class="fab fa-youtube"></i></a>
                      </div>
                  </div>
              </div>
              <div class="footer-bottom">
                  <p>&copy; 2025 Nymka Media | All Rights Reserved</p>
              </div>
          </div>
      </footer>
  `;

  // Insert header at the beginning of the body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Insert footer at the end of the body
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Re-initialize event listeners for the newly added elements
  const newDropdowns = document.querySelectorAll(".dropdown");
  const newMobileMenu = document.querySelector(".mobile-menu");
  const newNavMenu = document.querySelector(".nav-menu");
  const newLanguageToggle = document.querySelector(".language-toggle");
  let isMobile = window.innerWidth <= 768;

  // Mobile menu toggle
  if (newMobileMenu) {
    newMobileMenu.addEventListener("click", function () {
      this.classList.toggle("active");
      newNavMenu.classList.toggle("active");
    });
  }

  // Handle dropdowns
  newDropdowns.forEach((dropdown) => {
    if (!isMobile) {
      // Desktop hover
      dropdown.addEventListener("mouseenter", function () {
        newDropdowns.forEach((d) => d.classList.remove("active"));
        this.classList.add("active");
      });

      dropdown.addEventListener("mouseleave", function () {
        this.classList.remove("active");
      });
    }

    // Mobile click
    dropdown.addEventListener("click", function (e) {
      if (isMobile) {
        e.preventDefault();
        e.stopPropagation();

        const wasActive = this.classList.contains("active");
        newDropdowns.forEach((d) => d.classList.remove("active"));

        if (!wasActive) {
          this.classList.add("active");
        }
      }
    });
  });
}

// Global mobile menu toggle function for inline HTML onclick
window.toggleMobileMenu = function() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  
  if (mobileMenu && navMenu) {
    mobileMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
};

// Global language toggle function for inline HTML onclick
window.toggleLanguage = function() {
  const currentFlag = document.getElementById("currentFlag");
  let currentLanguage = currentFlag.src.includes("flag-mn.png") ? "mn" : "en";
  
  // Toggle language
  currentLanguage = currentLanguage === "mn" ? "en" : "mn";
  
  // Update flag
  if (currentFlag) {
    currentFlag.src = `images/flag-${currentLanguage}.png`;
  }
  
  // Update content
  const elements = document.querySelectorAll("[data-mn][data-en]");
  elements.forEach((element) => {
    const mnText = element.dataset.mn;
    const enText = element.dataset.en;
    element.innerHTML = currentLanguage === "mn" ? mnText : enText;
  });
};