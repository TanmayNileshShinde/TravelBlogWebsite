// Comprehensive Destination Data for Details & Itineraries
const destinationData = {
  kyoto: {
    title: "Kyoto, Japan",
    subtitle: "Ancient Temples, Serene Bamboo Groves & Zen Traditions",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    description: "Kyoto served as Japan's imperial capital for over a millennium. With more than 1,600 historic Buddhist temples, 400 Shinto shrines, and 17 UNESCO World Heritage sites, it offers an unparalleled window into traditional Japanese culture, architecture, and spiritual aesthetics.",
    itinerary: [
      {
        day: "Day 1: Imperial Legacy & Sacred Shrines",
        title: "Fushimi Inari-Taisha & Kiyomizu-dera",
        desc: "Begin at dawn hiking through the 10,000 vibrant vermilion torii gates at Fushimi Inari. Savor fresh matcha along Sannenzaka slope and explore Kiyomizu-dera's legendary wooden stage overlooking the city."
      },
      {
        day: "Day 2: Zen Serenity & Golden Reflection",
        title: "Arashiyama Bamboo Grove & Kinkaku-ji",
        desc: "Walk beneath towering stalks in Arashiyama Bamboo Grove, visit Tenryu-ji's zen landscaped pond, and travel to Kinkaku-ji (The Golden Pavilion) whose top two floors are coated in pure gold leaf."
      },
      {
        day: "Day 3: Historic Geisha Quarters & Culinary Wonders",
        title: "Gion District, Nishiki Market & Tea Ceremony",
        desc: "Immerse your senses in Nishiki Market's street food stalls (tasting dashi tamagoyaki and yakitori), experience an authentic Uji tea ceremony, and stroll through historic Gion's lantern-lit machiya alleys."
      }
    ],
    transitTip: "Use the Kyoto City Bus 1-Day Pass (700 JPY) or ICOCA transit card. The Tokaido Shinkansen bullet train connects Tokyo to Kyoto in just 2 hours 15 minutes.",
    bestSeasons: "March to May (Sakura season) and October to November (vivid Japanese momiji red maples)."
  },
  santorini: {
    title: "Santorini (Thira), Greece",
    subtitle: "Whitewashed Cliffside Villages & Aegean Caldera Panoramas",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    description: "Santorini is the jewel of the Cyclades, formed by one of the largest volcanic eruptions in recorded history. Rising dramatically hundreds of meters above the cobalt-blue caldera, its cliffside towns of Fira, Imerovigli, and Oia boast iconic whitewashed cubic architecture, blue domes, and world-renowned sunsets.",
    itinerary: [
      {
        day: "Day 1: Cliffside Panoramas & Sunsets of Oia",
        title: "Oia Village Exploration & Byzantine Castle",
        desc: "Arrive in Santorini and wander the winding cobblestone footpaths of Oia. Admire the iconic blue-domed churches of St. Spyridon, visit maritime museums, and secure a spot at the Byzantine Castle ruins for sunset."
      },
      {
        day: "Day 2: Caldera Trail & Historic Akrotiri",
        title: "Fira to Oia Caldera Hike & Prehistoric Ruins",
        desc: "Trek the breathtaking 10 km cliff trail along the rim of the volcano from Fira through Firostefani and Imerovigli. In the afternoon, explore the preserved Bronze Age ruins of prehistoric Akrotiri."
      },
      {
        day: "Day 3: Volcanic Beaches & Wine Tasting",
        title: "Red Beach, Perissa Black Sand & Assyrtiko Vineyards",
        desc: "Relax on the dramatic crimson cliffs of Red Beach and the volcanic black sands of Perissa. Finish your day at Santo Wines or Venetsanos Winery sampling mineral-rich indigenous Assyrtiko white wines."
      }
    ],
    transitTip: "Rent an ATV/quad bike or utilize the budget-friendly KTEL public bus hub in Fira. High-speed ferries operate daily from Athens Piraeus (4.5 hrs) or fly directly to JTR Airport.",
    bestSeasons: "May to June and September to October offer pleasant temperatures (23–27°C), warm sea water, and far fewer crowds than July–August."
  },
  banff: {
    title: "Banff National Park, Alberta, Canada",
    subtitle: "Glacial Turquoise Lakes, Rugged Peaks & Alpine Wildlife",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    description: "Established in 1885 as Canada's first national park, Banff spans 6,641 square kilometers of rugged Canadian Rockies wilderness. Famous for crystalline turquoise glacial lakes fed by melting glaciers, soaring limestone summits, and scenic drives like the Icefields Parkway.",
    itinerary: [
      {
        day: "Day 1: Glacial Icons of the Rockies",
        title: "Lake Louise & Moraine Lake Exploration",
        desc: "Witness the sunrise over the Valley of the Ten Peaks at Moraine Lake. Hike up to the Lake Agnes Teahouse above Lake Louise for panoramic views and homemade alpine pastries."
      },
      {
        day: "Day 2: Icefields Parkway & High Alpine Passes",
        title: "Peyto Lake, Bow Lake & Athabasca Glacier",
        desc: "Drive the world-famous Icefields Parkway (Highway 93N). Stop at wolf-head shaped Peyto Lake overlook, marvel at Bow Glacier Falls, and take a guided walk along the ancient ice of the Columbia Icefield."
      },
      {
        day: "Day 3: Banff Townsite & Sulphur Mountain",
        title: "Banff Gondola, Upper Hot Springs & Cave and Basin",
        desc: "Ride the Banff Gondola to the summit of Sulphur Mountain for a 360-degree view of six mountain ranges. Unwind in the mineral waters of Banff Upper Hot Springs, and spot elk and bighorn sheep in Bow Valley."
      }
    ],
    transitTip: "Fly into Calgary (YYC) and drive 90 minutes west along Highway 1. Parks Canada shuttles or Roam Transit Route 8X are required for Moraine Lake parking during summer.",
    bestSeasons: "Late June to early September for vibrant turquoise lakes and wildflower hiking; December to March for powdery skiing and ice-skating on frozen Lake Louise."
  }
};

// DOM Elements
const themeToggleBtn = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const destinationCards = document.querySelectorAll('.destination-card');
const bookmarkBadge = document.getElementById('bookmarkCount');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Modal Elements
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDesc');
const modalTimeline = document.getElementById('modalTimeline');
const modalTransit = document.getElementById('modalTransit');
const modalSeason = document.getElementById('modalSeason');

// Calculator Elements
const calcDestination = document.getElementById('calcDestination');
const calcDays = document.getElementById('calcDays');
const calcStyle = document.getElementById('calcStyle');
const calcTotal = document.getElementById('calcTotal');
const calcBreakdown = document.getElementById('calcBreakdown');

// Newsletter Elements
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');

// --- THEME SWITCHER ---
function initTheme() {
  const savedTheme = localStorage.getItem('travel_blog_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('travel_blog_theme', newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme} mode`);
}

function updateThemeIcon(theme) {
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === 'dark' 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
    themeToggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// --- MOBILE NAVIGATION ---
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// --- BOOKMARK / SAVED GUIDES ---
let savedBookmarks = JSON.parse(localStorage.getItem('travel_blog_bookmarks') || '[]');

function updateBookmarkCount() {
  if (bookmarkBadge) {
    bookmarkBadge.textContent = savedBookmarks.length;
  }
  document.querySelectorAll('.card-save-btn').forEach(btn => {
    const id = btn.getAttribute('data-id');
    if (savedBookmarks.includes(id)) {
      btn.classList.add('saved');
      btn.innerHTML = '<i class="fas fa-heart"></i>';
      btn.setAttribute('title', 'Remove from saved');
    } else {
      btn.classList.remove('saved');
      btn.innerHTML = '<i class="far fa-heart"></i>';
      btn.setAttribute('title', 'Save destination');
    }
  });
}

document.querySelectorAll('.card-save-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = btn.getAttribute('data-id');
    if (savedBookmarks.includes(id)) {
      savedBookmarks = savedBookmarks.filter(item => item !== id);
      showToast('Removed from saved destinations');
    } else {
      savedBookmarks.push(id);
      showToast('Added to your travel wishlist!');
    }
    localStorage.setItem('travel_blog_bookmarks', JSON.stringify(savedBookmarks));
    updateBookmarkCount();
  });
});

// --- FILTERING & SEARCH ---
function applyFilters() {
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const selectedCategory = activeFilterBtn ? activeFilterBtn.getAttribute('data-category') : 'all';
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  let visibleCount = 0;

  destinationCards.forEach(card => {
    const category = card.getAttribute('data-category');
    const name = (card.getAttribute('data-name') || '').toLowerCase();
    const text = card.textContent.toLowerCase();

    const matchesCategory = (selectedCategory === 'all' || category === selectedCategory);
    const matchesSearch = (!query || name.includes(query) || text.includes(query));

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const emptyMsg = document.getElementById('noResultsMsg');
  if (emptyMsg) {
    emptyMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', applyFilters);
}

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    applyFilters();
    const target = document.getElementById('destinations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// --- ITINERARY MODAL ---
function openModal(destKey) {
  const data = destinationData[destKey];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalSubtitle.textContent = data.subtitle;
  modalImage.src = data.image;
  modalImage.alt = data.title;
  modalDesc.textContent = data.description;

  // Build Timeline HTML
  modalTimeline.innerHTML = data.itinerary.map(item => `
    <div class="timeline-step">
      <div class="timeline-day">${item.day}</div>
      <h4 class="timeline-title">${item.title}</h4>
      <p class="timeline-desc">${item.desc}</p>
    </div>
  `).join('');

  modalTransit.innerHTML = `<strong><i class="fas fa-train"></i> Transit Advice:</strong> ${data.transitTip}`;
  modalSeason.innerHTML = `<strong><i class="fas fa-calendar-check"></i> Prime Season:</strong> ${data.bestSeasons}`;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const dest = btn.getAttribute('data-dest');
    openModal(dest);
  });
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
    closeModal();
  }
});

// --- BUDGET CALCULATOR ---
const dailyRates = {
  kyoto: { backpacker: 65, moderate: 120, luxury: 290, currency: "USD", symbol: "$" },
  santorini: { backpacker: 80, moderate: 155, luxury: 380, currency: "USD", symbol: "$" },
  banff: { backpacker: 75, moderate: 140, luxury: 340, currency: "USD", symbol: "$" }
};

function calculateBudget() {
  if (!calcDestination || !calcDays || !calcStyle || !calcTotal) return;

  const dest = calcDestination.value;
  const days = Math.max(1, parseInt(calcDays.value) || 1);
  const style = calcStyle.value;

  const rate = dailyRates[dest][style];
  const total = rate * days;

  calcTotal.textContent = `$${total.toLocaleString()} USD`;

  const lodging = Math.round(total * 0.45);
  const dining = Math.round(total * 0.30);
  const transitAndActivities = Math.round(total * 0.25);

  calcBreakdown.textContent = `Includes approx. $${lodging} lodging, $${dining} food & dining, and $${transitAndActivities} local transit & entrance fees.`;
}

if (calcDestination && calcDays && calcStyle) {
  calcDestination.addEventListener('change', calculateBudget);
  calcDays.addEventListener('input', calculateBudget);
  calcStyle.addEventListener('change', calculateBudget);
}

// --- NEWSLETTER FORM ---
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail ? newsletterEmail.value.trim() : '';
    if (email) {
      showToast(`Thank you! Subscription confirmed for ${email}`);
      newsletterForm.reset();
    }
  });
}

// --- TOAST NOTIFICATIONS ---
let toastTimeout;
function showToast(message) {
  if (!toast || !toastMessage) return;
  toastMessage.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateBookmarkCount();
  calculateBudget();
});
