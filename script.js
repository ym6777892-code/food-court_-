/* ==========================================================
   FOOD COURT – Zamalek Promenade
   ==========================================================
   EDIT HERE: all site settings live in CONFIG below.
   Images sit in the repository ROOT (next to index.html), no folder.
   If an image has a different extension (png/jpg/jpeg/webp), the page
   tries the other common extensions automatically, but it is best to
   set the exact filename in "image".
   ========================================================== */
const CONFIG = {
  // Main FOOD COURT logo (hero, watermark, favicon). If this exact file is missing,
  // the page automatically tries logo.png / logo.jpg / logo.jpeg / logo.webp.
  logo: "food_court_logo.jpg",

  instagramUrl: "https://www.instagram.com/foodcourt.zamalek?exln=MXZrZWxxeTUwZHdmNA==",

  restaurants: [
    {
      id: "e3genha",
      name: { ar: "اعجنها", en: "E3GENHA" },
      url: "https://ym6777892-code.github.io/e3genha/",
      image: "e3genha_logo_.jpg",
      bg: "#65350f",
      desc: { ar: "استكشف منيو اعجنها.", en: "Explore the E3GENHA menu." }
    },
    {
      id: "mabhara",
      name: { ar: "مبهرة", en: "MABHARA" },
      url: "https://ym6777892-code.github.io/mabhara/",
      image: "mubhara_logo.jpg",
      bg: "#ffffff",
      desc: { ar: "اكتشف منيو مبهرة.", en: "Discover the MABHARA menu." }
    },
    {
      id: "go-crispy",
      name: { ar: "GO CRISPY", en: "GO CRISPY" },
      url: "https://ym6777892-code.github.io/go-crispy-/",
      image: "go_crispy_logo_.jpg",
      bg: "#ffffff",
      desc: { ar: "استكشف منيو GO CRISPY.", en: "Explore the GO CRISPY menu." }
    },
    {
      id: "batatsaya",
      name: { ar: "بطاطسايه", en: "BATATSAYA" },
      url: "https://ym6777892-code.github.io/-batasay/",
      image: "batatsay_logo.jpg",
      bg: "#fdf0dc",
      desc: { ar: "اكتشف منيو بطاطسايه.", en: "Discover the BATATSAYA menu." }
    },
    {
      id: "5-burger",
      name: { ar: "5 BURGER", en: "5 BURGER" },
      url: "https://ym6777892-code.github.io/5-burger-/#top",
      image: "5-burger_logo.jpg",
      bg: "#f4ebe4",
      desc: { ar: "استكشف منيو 5 BURGER.", en: "Explore the 5 BURGER menu." }
    }
  ]
};

/* ---------- Interface text (edit wording here) ---------- */
const I18N = {
  ar: {
    skip: "تخطَّ إلى المطاعم",
    langBtn: "English",
    langAria: "Switch language to English",
    instagramAria: "حساب FOOD COURT الرسمي على إنستجرام (يفتح في نافذة جديدة)",
    instagramText: "تابعنا على إنستجرام",
    logoAlt: "شعار FOOD COURT ممشى الزمالك",
    heroHeadline: "اكتشف مطعمك المفضل في مكان واحد.",
    heroDesc: "استكشف مجموعة متنوعة من المطاعم في مكان واحد مع FOOD COURT – ممشى الزمالك.",
    cta: "اكتشف المطاعم",
    sectionTitle: "مطاعمنا",
    cardAction: "استكشف المنيو",
    opensNewTab: "يفتح في نافذة جديدة",
    footer: "FOOD COURT – ممشى الزمالك",
    title: "FOOD COURT | ممشى الزمالك"
  },
  en: {
    skip: "Skip to restaurants",
    langBtn: "العربية",
    langAria: "التبديل إلى اللغة العربية",
    instagramAria: "FOOD COURT official Instagram (opens in a new tab)",
    instagramText: "Follow us on Instagram",
    logoAlt: "FOOD COURT Zamalek Promenade logo",
    heroHeadline: "Discover Your Next Favorite Restaurant.",
    heroDesc: "Explore a variety of restaurant experiences, all in one place at FOOD COURT, Zamalek Promenade.",
    cta: "Explore Restaurants",
    sectionTitle: "Our Restaurants",
    cardAction: "Explore Menu",
    opensNewTab: "opens in a new tab",
    footer: "FOOD COURT – Zamalek Promenade",
    title: "FOOD COURT | Zamalek Promenade"
  }
};

const STORAGE_KEY = "foodcourt-lang";
const EXTS = ["jpg", "jpeg", "png", "webp"];
let lang = "ar";

/* ---------- Safe storage ---------- */
function readLang() {
  try { const v = localStorage.getItem(STORAGE_KEY); return v === "en" || v === "ar" ? v : "ar"; }
  catch (e) { return "ar"; }
}
function saveLang(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* storage unavailable */ } }

/* ---------- Image extension fallback ---------- */
function attachFallback(img, file) {
  const base = file.replace(/\.[^.]+$/, "");
  const tried = new Set([file.split(".").pop().toLowerCase()]);
  img.addEventListener("error", function onErr() {
    const next = EXTS.find(function (e) { return !tried.has(e); });
    if (!next) { img.removeEventListener("error", onErr); img.alt = ""; return; }
    tried.add(next);
    img.src = base + "." + next;
  });
}

/* ---------- Logo (tries fallbacks if the exact file name is missing) ---------- */
function resolveLogo() {
  const list = [CONFIG.logo, "logo.png", "logo.jpg", "logo.jpeg", "logo.webp", "food_court_logo.png", "food-court-logo.png", "food-court-logo.jpg"];
  let i = 0;
  (function next() {
    if (i >= list.length) return;
    const f = list[i++];
    const probe = new Image();
    probe.onload = function () {
      const hero = document.querySelector(".hero__logo");
      if (hero) hero.src = f;
      document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach(function (l) { l.href = f; });
      const wm = document.querySelector(".watermark");
      if (wm) wm.style.setProperty("--logo-url", 'url("' + f + '")');
    };
    probe.onerror = next;
    probe.src = f;
  })();
}

/* ---------- Build the cards once ---------- */
function buildCards() {
  const wrap = document.getElementById("cards");
  CONFIG.restaurants.forEach(function (r, i) {
    const a = document.createElement("a");
    a.className = "card";
    a.href = r.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.setProperty("--i", i);
    a.dataset.id = r.id;

    const imgBox = document.createElement("div");
    imgBox.className = "card__img";
    imgBox.style.setProperty("--bg-img", r.bg);
    const img = document.createElement("img");
    img.src = r.image;
    img.width = 800; img.height = 600;
    img.decoding = "async";
    img.loading = i < 2 ? "eager" : "lazy";
    attachFallback(img, r.image);
    imgBox.appendChild(img);

    const body = document.createElement("div");
    body.className = "card__body";
    body.innerHTML =
      '<div class="card__text">' +
        '<h3 class="card__name"></h3>' +
        '<p class="card__desc"></p>' +
        '<span class="card__action"></span>' +
      '</div>' +
      '<span class="card__go" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
      '</span>';

    a.appendChild(imgBox);
    a.appendChild(body);
    wrap.appendChild(a);
  });
}

/* ---------- Apply a language ---------- */
function applyLang(next, animate) {
  lang = next;
  const t = I18N[lang];
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t.title;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t[el.dataset.i18n];
    if (animate) { el.classList.remove("fade"); void el.offsetWidth; el.classList.add("fade"); }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    el.setAttribute("aria-label", t[el.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    el.alt = t[el.dataset.i18nAlt];
  });

  CONFIG.restaurants.forEach(function (r) {
    const card = document.querySelector('.card[data-id="' + r.id + '"]');
    if (!card) return;
    card.querySelector(".card__name").textContent = r.name[lang];
    card.querySelector(".card__desc").textContent = r.desc[lang];
    card.querySelector(".card__action").textContent = t.cardAction;
    card.querySelector("img").alt = r.name[lang] + " – " + (lang === "ar" ? "شعار المطعم" : "restaurant logo");
    card.setAttribute("aria-label", r.name[lang] + " – " + t.cardAction + " (" + t.opensNewTab + ")");
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("instagram-link").href = CONFIG.instagramUrl;
  document.getElementById("instagram-footer").href = CONFIG.instagramUrl;

  resolveLogo();
  buildCards();
  applyLang(readLang(), false);

  document.getElementById("lang-toggle").addEventListener("click", function () {
    const next = lang === "ar" ? "en" : "ar";
    saveLang(next);
    applyLang(next, true);
  });
});
