// ====== DATA — edit konten di sini ======
const WA = "628123456789";
const data = {
  ticker: ["Web Development", "Mobile Apps", "UI/UX Design", "Full Stack", "React & Next.js", "REST API", "E-Commerce"],
  skills: [["HTML/CSS", 95], ["JavaScript", 90], ["React/Next.js", 85], ["Node.js", 80], ["PHP/Laravel", 75], ["Python", 70]],
  services: [
    ["🌐", "Website Development", "Company profile, landing page, dan portal web yang modern dan responsive."],
    ["📱", "Mobile App Development", "Aplikasi cross-platform Flutter/React Native untuk Android dan iOS."],
    ["🎨", "UI/UX Design", "Dari wireframe hingga high-fidelity prototype yang intuitif."],
    ["🛒", "E-Commerce", "Toko online lengkap dengan payment gateway dan dashboard admin."],
    ["⚙️", "Custom Web App", "Sistem informasi, dashboard analytics, dan CRM sesuai kebutuhan bisnis."],
    ["🔗", "API & Backend", "REST API, integrasi third-party, dan database design yang scalable."],
  ],
  plans: [
    { name: "Starter", ico: "🌱", price: "Rp 500K", desc: "Untuk bisnis yang baru mulai online", items: ["Landing page 1 halaman", "Responsive design", "Contact form", "Revisi 2x"] },
    { name: "Professional", ico: "🚀", price: "Rp 1,5Jt", desc: "Tampil profesional dengan fitur lengkap", pop: true, items: ["Website 5 halaman", "Custom design premium", "CMS / Admin panel", "SEO on-page dasar", "Support 2 minggu"] },
    { name: "Enterprise", ico: "🏆", price: "Rp 3,5Jt+", desc: "Solusi penuh untuk skala besar", items: ["Full custom web app", "Backend + Database", "Payment gateway", "Revisi unlimited"] },
  ],
  projects: [
    ["E-Commerce", "Project Satu", "Toko online fashion dengan micro-interactions.", "#ff5a1f"],
    ["Landing Page", "Project Dua", "Landing page restoran dengan menu interaktif.", "#1f7aff"],
    ["Web App", "Project Tiga", "Aplikasi presensi dengan GPS dan QR code.", "#14a37f"],
    ["Booking System", "Project Empat", "Sistem reservasi dengan kalkulator tarif dinamis.", "#8a3ffc"],
    ["Creative", "Project Lima", "Showcase studio dengan animasi scroll.", "#d6336c"],
    ["Dashboard", "Project Enam", "Dashboard monitoring real-time dan grafik.", "#f59f00"],
  ],
  reviews: [
    ["Profesional dan responsif. Website modern dan sangat cepat. Recommended!", "Ahmad R.", "CEO, TechStartup"],
    ["Aplikasinya sesuai kebutuhan dan kodenya clean. Pasti kerja sama lagi!", "Sarah P.", "Product Manager"],
    ["Fitur e-commerce lengkap dan desainnya premium. Omset naik setelah pakai website baru.", "Dian R.", "Owner, FashionBrand"],
  ],
};

// ====== RENDER ======
const $ = (s) => document.querySelector(s);
const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

$("#ticker").dataset.text = data.ticker.join(" ✦ ") + " ✦ ";

$("#skills").innerHTML = data.skills.map(([n, p]) =>
  `<div class="bar reveal" style="--w:${p}%"><div><span>${n}</span><span>${p}%</span></div><i></i></div>`).join("");

$("#services-list").innerHTML = data.services.map(([i, t, d], n) =>
  `<article class="card reveal"><small class="tag">0${n + 1}</small><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></article>`).join("");

$("#plans").innerHTML = data.plans.map((p) =>
  `<article class="card reveal ${p.pop ? "pop" : ""}">${p.pop ? '<span class="badge">⭐ Paling Populer</span>' : ""}
   <div class="ico">${p.ico}</div><h3>${p.name}</h3><div class="price">${p.price}<small> / project</small></div><p>${p.desc}</p>
   <ul>${p.items.map((x) => `<li>${x}</li>`).join("")}</ul>
   <a class="btn sm" href="${wa("Halo, saya tertarik dengan paket " + p.name)}" target="_blank" rel="noopener">Pilih Paket →</a></article>`).join("");

$("#work").innerHTML = data.projects.map(([tag, t, d, c]) =>
  `<a href="#" class="card work reveal"><div class="thumb" style="background:${c}">${t.split(" ")[1] ? t.split(" ")[0][0] + t.split(" ")[1][0] : t[0]}</div>
   <span class="tag">${tag}</span><h3>${t}</h3><p>${d}</p></a>`).join("");

$("#reviews").innerHTML = data.reviews.map(([q, n, r]) =>
  `<article class="card reveal"><div class="stars">★★★★★</div><p>"${q}"</p><div class="who">${n}<small>${r}</small></div></article>`).join("");

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
  if (link) setActiveBottomLink(link.hash);
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
