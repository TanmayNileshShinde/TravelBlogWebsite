# 🌍 Wanderlust Chronicles - Travel Blog Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://tanmaynileshshinde.github.io/TravelBlogWebsite/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5 & CSS3](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-orange)](#tech-stack)

> **Practice Question 1**: Create a simple travel blog webpage featuring three tourist destinations with images, descriptions, and travel information. Deploy it using GitHub Pages.

---

## 🚀 Live Demo
🔗 **[https://tanmaynileshshinde.github.io/TravelBlogWebsite/](https://tanmaynileshshinde.github.io/TravelBlogWebsite/)**

---

## 📌 Featured Tourist Destinations

| Destination | Category | Highlights & Travel Information | Prime Season |
| :--- | :--- | :--- | :--- |
| **Kyoto, Japan** | Cultural Heritage | 1,600+ Buddhist temples, Fushimi Inari Torii gates, Arashiyama Bamboo Grove, Kinkaku-ji, Kaiseki dining, and Uji Matcha. Shinkansen bullet train transit (2h 15m from Tokyo). | March–May & Oct–Nov |
| **Santorini, Greece** | Coastal & Islands | Whitewashed cliffside villages, blue-domed churches, Oia sunset viewpoints, 10km Caldera cliff hike, Red Beach, and Assyrtiko wine tasting. Ferry & air transit from Athens. | May–June & Sept–Oct |
| **Banff National Park, Canada** | Mountains & Nature | Glacial turquoise waters of Lake Louise & Moraine Lake, Icefields Parkway drive, Sulphur Mountain Gondola, Rocky Mountain wildlife, and hot springs. 90m drive from Calgary. | June–Aug & Dec–Mar |

---

## ✨ Features

- 📸 **High-Definition Imagery**: Dynamic, responsive photography sourced via Unsplash CDN with crisp presentation across all device resolutions.
- 🗺️ **Comprehensive Travel Intelligence**: Each destination card features:
  - Best time to visit
  - Transit & access advice
  - Must-try culinary specialties
  - Currency & language information
  - Daily budget estimates
  - Key attractions checklist
- 📅 **Detailed 3-Day Itineraries**: Interactive modal dialog for each destination showcasing day-by-day itineraries and insider travel recommendations.
- 🧮 **Interactive Travel Budget Estimator**: Dynamic client-side calculator computing estimated trip expenses (lodging, dining, transit) based on chosen destination, length of stay, and travel style (Backpacker, Moderate, Luxury).
- 🔍 **Real-Time Search & Category Filters**: Search instantly across titles, countries, and keywords, or filter by *Cultural Heritage*, *Coastal & Islands*, and *Mountains & Nature*.
- 🌓 **Dark & Light Mode**: Accessible theme switcher with automatic `localStorage` persistence.
- 💖 **Wishlist / Bookmarking**: Interactive destination favoriting with dynamic badge counter and local state storage.
- 📱 **Fully Responsive Layout**: Built mobile-first using modern CSS Grid and Flexbox for seamless browsing on phones, tablets, and wide monitors.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<figure>`, `<footer>`) with ARIA accessibility labels.
- **CSS3**: Custom properties (CSS variables), glassmorphism effects, fluid clamp typography, CSS Grid & Flexbox, smooth transitions.
- **Vanilla JavaScript (ES6+)**: Zero external JS dependencies; handles modal lifecycle, real-time filtering, theme switching, budget calculations, and toast notifications.
- **Iconography & Fonts**: Font Awesome 6 CDN & Google Fonts (*Playfair Display* and *Plus Jakarta Sans*).
- **Hosting & CI/CD**: GitHub Pages.

---

## 📂 Project Structure

```text
TravelBlogWebsite/
├── index.html        # Main landing page markup
├── css/
│   └── style.css     # Design system, themes & responsive layouts
├── js/
│   └── script.js     # Interactivity, itineraries & budget calculator
└── README.md         # Documentation & deployment guide
```

---

## 🚀 Local Development Setup

To run or inspect this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/TanmayNileshShinde/TravelBlogWebsite.git
   cd TravelBlogWebsite
   ```
2. Open `index.html` in any web browser:
   - Double click `index.html`, or
   - Using VS Code Live Server / Python HTTP server:
     ```bash
     python -m http.server 8000
     ```
   - Navigate to `http://localhost:8000`.

---

## 🎓 Academic Details

- **Course:** Web Technology-2 (WT-2) Laboratory
- **Exercise:** Practice Question 1 - Travel Blog Website
- **Student Name:** Tanmay Nilesh Shinde
- **Institution:** Shah & Anchor Kutchhi Engineering College (SAKEC)
- **Deployment Platform:** GitHub Pages
