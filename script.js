// ====== DATA — edit konten di sini ======
const splashScreen = document.querySelector("#splash-screen");
document.body.classList.add("splash-active");
let splashDismissed = false;
const dismissSplash = () => {
  if (splashDismissed) return;
  splashDismissed = true;
  splashScreen.classList.add("is-hidden");
  splashScreen.setAttribute("aria-hidden", "true");
  document.body.classList.remove("splash-active");
  window.setTimeout(() => { splashScreen.hidden = true; }, 700);
};
const splashDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 1200;
window.addEventListener("load", () => window.setTimeout(dismissSplash, splashDelay), { once: true });
window.setTimeout(dismissSplash, 5000);

const WA = "6285219426211";
const data = {
  skills: [["HTML/CSS", 95], ["JavaScript", 90], ["React/Next.js", 85], ["Node.js", 80], ["PHP/Laravel", 75], ["Python", 70]],
  // Temporary showcase cards for the carousel; replace these with actual project data later.
  projects: [
    { id: "portfolio", year: "2026", color: "portfolio", tags: ["HTML", "CSS", "JavaScript"] },
    { id: "mobile", year: "2026", color: "mobile", tags: ["Mobile App", "UI/UX", "Prototype"] },
    { id: "dashboard", year: "2026", color: "dashboard", tags: ["Dashboard", "Web App", "UI/UX"] },
    { id: "commerce", year: "2026", color: "commerce", tags: ["E-Commerce", "Web Design", "UI/UX"] },
    { id: "creative", year: "2026", color: "creative", tags: ["Creative", "Animation", "Web Design"] },
  ],
};
const localizedContent = {
  id: {
    ticker: ["Pengembangan Web", "Aplikasi Mobile", "Desain UI/UX", "Full Stack", "React & Next.js", "REST API", "E-Commerce"],
    services: [
      ["🌐", "Website Development", "Company profile, landing page, dan portal web yang modern dan responsif."],
      ["📱", "Mobile App Development", "Aplikasi lintas platform Flutter/React Native untuk Android dan iOS."],
      ["🎨", "UI/UX Design", "Dari wireframe hingga prototype high-fidelity yang intuitif."],
      ["🛒", "E-Commerce", "Toko online lengkap dengan payment gateway dan dashboard admin."],
      ["⚙️", "Custom Web App", "Sistem informasi, dashboard analytics, dan CRM sesuai kebutuhan bisnis."],
      ["🔗", "API & Backend", "REST API, integrasi layanan pihak ketiga, dan desain database yang skalabel."],
    ],
    plans: [
      { name: "Starter", ico: "🌱", price: "Rp 500K", desc: "Untuk bisnis yang baru mulai online", items: ["Landing page 1 halaman", "Desain responsif", "Formulir kontak", "Revisi 2 kali"] },
      { name: "Professional", ico: "🚀", price: "Rp 1,5Jt", desc: "Tampil profesional dengan fitur lengkap", pop: true, items: ["Website 5 halaman", "Desain premium kustom", "CMS / panel admin", "SEO on-page dasar", "Dukungan 2 minggu"] },
      { name: "Enterprise", ico: "🏆", price: "Rp 3,5Jt+", desc: "Solusi lengkap untuk skala besar", items: ["Web app kustom penuh", "Backend + database", "Payment gateway", "Revisi tanpa batas"] },
    ],
    reviews: [
      ["Profesional dan responsif. Website modern dan sangat cepat. Direkomendasikan!", "Ahmad R.", "CEO, TechStartup"],
      ["Aplikasinya sesuai kebutuhan dan kodenya rapi. Pasti kerja sama lagi!", "Sarah P.", "Product Manager"],
      ["Fitur e-commerce lengkap dan desainnya premium. Omzet naik setelah pakai website baru.", "Dian R.", "Owner, FashionBrand"],
    ],
    projects: {
      portfolio: { category: "Konsep Website", title: "Portfolio UI", description: "Eksplorasi konsep portofolio personal dengan tata letak modern dan responsif.", visual: "WEB" },
      mobile: { category: "Konsep Aplikasi Mobile", title: "Mobile App Concept", description: "Eksplorasi antarmuka aplikasi mobile dengan fokus pada pengalaman pengguna.", visual: "APP" },
      dashboard: { category: "Konsep Web App", title: "Dashboard UI", description: "Eksplorasi dashboard analitik dengan visualisasi data dan navigasi sederhana.", visual: "DATA" },
      commerce: { category: "Konsep E-Commerce", title: "Commerce UI", description: "Eksplorasi konsep toko online dengan tampilan produk yang bersih dan navigasi mudah.", visual: "SHOP" },
      creative: { category: "Konsep Website Kreatif", title: "Creative Studio", description: "Eksplorasi landing page studio kreatif dengan komposisi tebal dan gerakan visual.", visual: "PLAY" },
    },
    popular: "⭐ Paling Populer", perProject: "/ proyek", selectPlan: "Pilih Paket →", emptyProjects: "Proyek akan ditambahkan.",
    demoLabel: "KONSEP DEMO · BUKAN PROYEK ASLI", openDemo: "Konsep demo", previousProject: "Proyek sebelumnya", nextProject: "Proyek berikutnya",
    demoNote: "damn gk bro?.",
    inquiry: "Halo, saya tertarik dengan paket ",
  },
  en: {
    ticker: ["Web Development", "Mobile Apps", "UI/UX Design", "Full Stack", "React & Next.js", "REST API", "E-Commerce"],
    services: [
      ["🌐", "Website Development", "Modern, responsive company websites, landing pages, and web portals."],
      ["📱", "Mobile App Development", "Cross-platform Flutter/React Native apps for Android and iOS."],
      ["🎨", "UI/UX Design", "From wireframes to intuitive high-fidelity prototypes."],
      ["🛒", "E-Commerce", "Complete online stores with payment gateways and admin dashboards."],
      ["⚙️", "Custom Web App", "Information systems, analytics dashboards, and CRMs tailored to your business."],
      ["🔗", "API & Backend", "REST APIs, third-party integrations, and scalable database design."],
    ],
    plans: [
      { name: "Starter", ico: "🌱", price: "Rp 500K", desc: "For businesses just getting online", items: ["1-page landing page", "Responsive design", "Contact form", "2 revisions"] },
      { name: "Professional", ico: "🚀", price: "Rp 1,5Jt", desc: "A professional look with complete features", pop: true, items: ["5-page website", "Premium custom design", "CMS / admin panel", "Basic on-page SEO", "2 weeks of support"] },
      { name: "Enterprise", ico: "🏆", price: "Rp 3,5Jt+", desc: "A complete solution for large-scale needs", items: ["Fully custom web app", "Backend + database", "Payment gateway", "Unlimited revisions"] },
    ],
    reviews: [
      ["Professional and responsive. The website is modern and very fast. Recommended!", "Ahmad R.", "CEO, TechStartup"],
      ["The app meets our needs and the code is clean. We will definitely work together again!", "Sarah P.", "Product Manager"],
      ["Complete e-commerce features and premium design. Sales increased after launching the new website.", "Dian R.", "Owner, FashionBrand"],
    ],
    projects: {
      portfolio: { category: "Website Concept", title: "Portfolio UI", description: "A personal portfolio concept with a modern, responsive layout.", visual: "WEB" },
      mobile: { category: "Mobile App Concept", title: "Mobile App Concept", description: "A mobile app interface concept focused on user experience.", visual: "APP" },
      dashboard: { category: "Web App Concept", title: "Dashboard UI", description: "An analytics dashboard concept with data visualization and simple navigation.", visual: "DATA" },
      commerce: { category: "E-Commerce Concept", title: "Commerce UI", description: "An online store concept with a clean product layout and easy navigation.", visual: "SHOP" },
      creative: { category: "Creative Website Concept", title: "Creative Studio", description: "A creative studio landing page concept with bold composition and visual motion.", visual: "PLAY" },
    },
    popular: "⭐ Most Popular", perProject: "/ project", selectPlan: "Choose Plan →", emptyProjects: "Projects will be added soon.",
    demoLabel: "DEMO CONCEPT · NOT A REAL PROJECT", openDemo: "Demo concept", previousProject: "Previous project", nextProject: "Next project",
    demoNote: "These cards are visual examples, not real portfolio projects.",
    inquiry: "Hello, I'm interested in the ",
  },
};
const translations = {
  id: {
    navAbout: "Tentang saya", navResume: "Resume", navWork: "Karya", navPricing: "Harga", navContact: "Hubungi saya", bottomContact: "Kontak",
    previousProject: "Proyek sebelumnya", nextProject: "Proyek berikutnya",
    heroKicker: "FAREL JAFLEAN · AMBON, INDONESIA", heroTitleFirst: "Selamat datang di", heroTitleAccent: "portofolio saya.",
    heroWorkCta: "Lihat karya saya ↓", heroContactCta: "Hubungi sekarang ↗",
    heroLead: "Saya suka membangun hal-hal yang hidup di internet. Saya menyelesaikan masalah dengan cara rasional dan pragmatis, lalu membuat solusi yang paling sederhana dan fungsional.",
    aboutTitle: "Halo, saya Farel!", aboutDescription: "Saya Web Developer & App Developer berbasis di Ambon, Indonesia. Berpengalaman membangun website, aplikasi mobile, dan desain UI/UX modern dengan fokus pada kualitas, performa, dan pengalaman pengguna.",
    education: "Pendidikan", experience: "Pengalaman", freelancer: "Pekerja lepas", skillsTitle: "Keahlian Teknis",
    servicesTitle: "Layanan", pricingEyebrow: "Investasi Terbaik", pricingTitle: "Harga Jasa", projectsTitle: "Proyek Terbaru",
    projectsDone: "Proyek Selesai", happyClients: "Klien Puas", yearsExperience: "Tahun Pengalaman", satisfaction: "% Kepuasan",
    reviewsTitle: "Kata Klien", contactTitle: "Mari bangun sesuatu yang hebat bersama ✦",
    contactDescription: "Punya proyek atau ide? Hubungi saya, siap bantu wujudkan website dan aplikasi impianmu.", sendMessage: "Kirim Pesan →",
    footerDescription: "Berbasis di Ambon, Indonesia.", footerNavigation: "Navigasi", footerConnect: "Sosial",
    rightsReserved: "Hak cipta dilindungi.", backToTop: "Kembali ke atas ↑", homeLabel: "Kembali ke beranda", mainNavigation: "Navigasi utama",
    splashTitle: "Selamat datang di portofolio saya", splashCaption: "FAREL JAFLEAN · AMBON, INDONESIA",
    title: "Farel Jaflean — Web & App Developer", description: "Portofolio Farel Jaflean, berbasis di Ambon, Indonesia.",
  },
  en: {
    navAbout: "About me", navResume: "Resume", navWork: "Work", navPricing: "Pricing", navContact: "Get in touch", bottomContact: "Contact",
    previousProject: "Previous project", nextProject: "Next project",
    heroKicker: "FAREL JAFLEAN · AMBON, INDONESIA", heroTitleFirst: "Welcome to my", heroTitleAccent: "portfolio.",
    heroWorkCta: "View my work ↓", heroContactCta: "Get in touch ↗",
    heroLead: "I love building things that live on the internet. I solve problems rationally and pragmatically, then create the simplest, most functional solution.",
    aboutTitle: "Hello, I'm Farel!", aboutDescription: "I'm a Web & App Developer based in Ambon, Indonesia. I build websites, mobile apps, and modern UI/UX designs focused on quality, performance, and user experience.",
    education: "Education", experience: "Experience", freelancer: "Freelancer", skillsTitle: "Technical Skills",
    servicesTitle: "Services", pricingEyebrow: "The Best Investment", pricingTitle: "Service Pricing", projectsTitle: "Latest Work",
    projectsDone: "Projects Done", happyClients: "Happy Clients", yearsExperience: "Years Experience", satisfaction: "% Satisfaction",
    reviewsTitle: "What Clients Say", contactTitle: "Let's build something great together ✦",
    contactDescription: "Have a project or an idea? Get in touch—I'm ready to help bring your dream website or app to life.", sendMessage: "Send Message →",
    footerDescription: "Based in Ambon, Indonesia.", footerNavigation: "Navigation", footerConnect: "Connect",
    rightsReserved: "All rights reserved.", backToTop: "Back to top ↑", homeLabel: "Back to home", mainNavigation: "Main navigation",
    splashTitle: "Welcome to my Portfolio Website", splashCaption: "FAREL JAFLEAN · AMBON, INDONESIA",
    title: "Farel Jaflean — Web & App Developer", description: "Portfolio of Farel Jaflean, based in Ambon, Indonesia.",
  },
};

// ====== RENDER ======
const $ = (s) => document.querySelector(s);
const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
let currentLanguage = "en";
let activeProjectIndex = 0;
const projectCarousel = $("#work");
const projectAutoplayDelay = 4500;
let projectAutoplayTimer;
let projectCarouselVisible = false;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const stopProjectAutoplay = () => window.clearInterval(projectAutoplayTimer);
const startProjectAutoplay = () => {
  stopProjectAutoplay();
  if (reducedMotion.matches || document.hidden || !projectCarouselVisible || projectCarousel.matches(":hover") || projectCarousel.contains(document.activeElement)) return;
  projectAutoplayTimer = window.setInterval(() => moveProjectCoverflow(1), projectAutoplayDelay);
};

const updateProjectCoverflow = () => {
  const cards = [...projectCarousel.querySelectorAll(".project-card")];
  if (!cards.length) return;
  cards.forEach((card, index) => {
    const offset = (index - activeProjectIndex + cards.length) % cards.length;
    const position = offset === 0 ? "active" : offset === 1 ? "next" : offset === cards.length - 1 ? "previous" : "hidden";
    card.dataset.position = position;
    card.setAttribute("aria-hidden", position === "hidden" ? "true" : "false");
  });
  const counter = projectCarousel.querySelector(".project-carousel__count");
  counter.textContent = `${String(activeProjectIndex + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
};

const moveProjectCoverflow = (step) => {
  const count = projectCarousel.querySelectorAll(".project-card").length;
  if (count < 2) return;
  activeProjectIndex = (activeProjectIndex + step + count) % count;
  updateProjectCoverflow();
};

const renderLanguage = (language) => {
  currentLanguage = language;
  const text = translations[language];
  const content = localizedContent[language];
  document.documentElement.lang = language;
  document.title = text.title;
  $('meta[name="description"]').content = text.description;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nAriaLabel]);
  });

  const languageToggle = $("#language-toggle");
  const nextLanguage = language === "id" ? "en" : "id";
  languageToggle.textContent = nextLanguage.toUpperCase();
  languageToggle.lang = nextLanguage;
  languageToggle.setAttribute("aria-label", language === "id" ? "Change language to English" : "Ganti bahasa ke Bahasa Indonesia");

  $("#ticker").dataset.text = content.ticker.join(" ✦ ") + " ✦ ";
  $("#skills").innerHTML = data.skills.map(([name, percent]) =>
    `<div class="bar reveal" style="--w:${percent}%"><div><span>${name}</span><span>${percent}%</span></div><i></i></div>`).join("");
  $("#services-list").innerHTML = content.services.map(([icon, title, description], index) =>
    `<article class="card reveal"><small class="tag">0${index + 1}</small><div class="ico">${icon}</div><h3>${title}</h3><p>${description}</p></article>`).join("");
  $("#plans").innerHTML = content.plans.map((plan) =>
    `<article class="card reveal ${plan.pop ? "pop" : ""}">${plan.pop ? `<span class="badge">${content.popular}</span>` : ""}
     <div class="ico">${plan.ico}</div><h3>${plan.name}</h3><div class="price">${plan.price}<small> ${content.perProject}</small></div><p>${plan.desc}</p>
     <ul>${plan.items.map((item) => `<li>${item}</li>`).join("")}</ul>
     <a class="btn sm" href="${wa(content.inquiry + plan.name)}" target="_blank" rel="noopener">${content.selectPlan}</a></article>`).join("");
  projectCarousel.classList.toggle("project-carousel", data.projects.length > 0);
  projectCarousel.innerHTML = data.projects.length ? `
    <div class="project-carousel__stage" aria-label="${language === "id" ? "Carousel proyek demo" : "Demo project carousel"}">
      ${data.projects.map((project, index) => {
        const details = content.projects[project.id];
        return `<article class="project-card" data-index="${index}" data-position="hidden" aria-hidden="true">
          <div class="project-card__visual project-card__visual--${project.color}">
            <span class="project-card__demo">${content.demoLabel}</span>
            <span class="project-card__visual-title">${details.visual}</span>
            <span class="project-card__visual-mark" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            <span class="project-card__open">${content.openDemo} <span aria-hidden="true">↗</span></span>
          </div>
          <div class="project-card__meta"><span class="tag">${details.category}</span><span>${project.year}</span></div>
          <h3>${details.title}</h3>
          <p>${details.description}</p>
          <div class="project-card__tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>`;
      }).join("")}
    </div>
    <div class="project-carousel__controls">
      <button type="button" class="project-carousel__arrow" data-carousel-step="-1" aria-label="${content.previousProject}">←</button>
      <span class="project-carousel__count" aria-live="polite"></span>
      <button type="button" class="project-carousel__arrow" data-carousel-step="1" aria-label="${content.nextProject}">→</button>
    </div>
    <p class="project-carousel__note">${content.demoNote}</p>
  ` : `<p class="project-empty">${content.emptyProjects}</p>`;
  if (data.projects.length) {
    activeProjectIndex %= data.projects.length;
    updateProjectCoverflow();
  }
  $("#reviews").innerHTML = content.reviews.map(([quote, name, role]) =>
    `<article class="card reveal"><div class="stars">★★★★★</div><p>"${quote}"</p><div class="who">${name}<small>${role}</small></div></article>`).join("");

  document.querySelectorAll(".track").forEach((track) => {
    const textContent = (track.dataset.text || "").repeat(6);
    track.innerHTML = `<span>${textContent}</span><span>${textContent}</span>`;
  });
};

renderLanguage(currentLanguage);
$("#language-toggle").addEventListener("click", () => {
  renderLanguage(currentLanguage === "id" ? "en" : "id");
  document.querySelectorAll(".reveal").forEach((element) => io.observe(element));
});

projectCarousel.addEventListener("click", (event) => {
  const arrow = event.target.closest("[data-carousel-step]");
  if (arrow) {
    moveProjectCoverflow(Number(arrow.dataset.carouselStep));
    startProjectAutoplay();
    return;
  }
  const card = event.target.closest(".project-card");
  if (card && card.dataset.position !== "active") {
    activeProjectIndex = Number(card.dataset.index);
    updateProjectCoverflow();
    startProjectAutoplay();
  }
});
projectCarousel.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  moveProjectCoverflow(event.key === "ArrowRight" ? 1 : -1);
  startProjectAutoplay();
});
projectCarousel.addEventListener("pointerenter", stopProjectAutoplay);
projectCarousel.addEventListener("pointerleave", startProjectAutoplay);
projectCarousel.addEventListener("focusin", stopProjectAutoplay);
projectCarousel.addEventListener("focusout", (event) => {
  if (!projectCarousel.contains(event.relatedTarget)) startProjectAutoplay();
});
document.addEventListener("visibilitychange", startProjectAutoplay);
reducedMotion.addEventListener("change", startProjectAutoplay);
const projectCarouselObserver = new IntersectionObserver(([entry]) => {
  projectCarouselVisible = entry.isIntersecting;
  if (projectCarouselVisible) startProjectAutoplay();
  else stopProjectAutoplay();
}, { threshold: 0.25 });
projectCarouselObserver.observe(projectCarousel);
let carouselPointerStart = null;
projectCarousel.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch") carouselPointerStart = event.clientX;
});
projectCarousel.addEventListener("pointerup", (event) => {
  if (carouselPointerStart === null) return;
  const distance = event.clientX - carouselPointerStart;
  carouselPointerStart = null;
  if (Math.abs(distance) > 45) moveProjectCoverflow(distance < 0 ? 1 : -1);
});

// Marquee: isi teks lalu gandakan agar loop mulus
document.querySelectorAll(".track").forEach((t) => {
  const txt = (t.dataset.text || "").repeat(6);
  t.innerHTML = `<span>${txt}</span><span>${txt}</span>`;
});

// ====== INTERAKSI ======
const menu = $("#menu");
$(".burger").addEventListener("click", () => menu.classList.toggle("open"));
menu.addEventListener("click", (e) => e.target.tagName === "A" && menu.classList.remove("open"));

const bottomNav = $("#bottom-nav");
const bottomNavLinks = [...bottomNav.querySelectorAll(".bottom-nav__item")];
const setActiveBottomLink = (hash) => {
  bottomNavLinks.forEach((link) => {
    const active = link.hash === hash;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
};
bottomNav.addEventListener("click", (e) => {
  const link = e.target.closest(".bottom-nav__item");
  if (!link) return;
  setActiveBottomLink(link.hash);
  if (link.hash === "#home") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) setActiveBottomLink(`#${entry.target.id}`);
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
bottomNavLinks.forEach((link) => {
  const section = document.querySelector(link.hash);
  if (section) sectionObserver.observe(section);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Counter angka statistik
const counter = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / 1500, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counter.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach((el) => counter.observe(el));
