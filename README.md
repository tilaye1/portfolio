# Tilaye Merera — Systems Architect Portfolio

[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-blue)](https://tilaye1.github.io/portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red)](https://github.com/tilaye1/portfolio)

> **A world‑class interactive portfolio that proves your engineering capability — not just describes it.**

![Portfolio Screenshot](https://via.placeholder.com/800x400?text=Portfolio+Preview+%E2%80%94+Live+Demo+Available)

---

## ✨ Overview

This is a **single‑page, fully self‑contained portfolio** for Tilaye Merera Dinka — a Senior Full‑Stack Engineer, Industrial Automation Expert, and Security Infrastructure Specialist. It is designed to:

- Showcase **8+ years of multidisciplinary engineering experience**
- Demonstrate **real projects** (industrial controllers, surveillance networks, aviation audits, autonomous USV, etc.)
- Engage visitors with **interactive games** (Commission the Controller, Network Architect)
- Provide an **AI‑powered assistant** (local, zero‑API, built on a knowledge base of your work)
- Target **EU/Schengen employers** with clear value propositions

The entire portfolio is a **single HTML file** — no build tools, no dependencies, no server required. Host it anywhere.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| **3D Particle Hero** | Three.js interactive background with mouse‑repelling particles |
| **Dual‑Role Story** | Side‑by‑side comparison of government (INSA) and commercial (Wing Life) experience |
| **Project Showcase** | 8+ detailed projects with badges, tech tags, and measurable results |
| **Interactive Games** | *Commission the Controller* (drag‑and‑drop) and *Network Architect* (budget/capacity planning) |
| **AI Chatbot** | Local, no‑API‑key assistant that answers questions about Tilaye’s work, skills, EU readiness, and more |
| **Skill Bars** | Animated proficiency bars across 4 domains |
| **Why EU** | 10 compelling reasons for European employers |
| **Terminal Contact** | Command‑line style interface for quick contact information |
| **Fully Responsive** | Mobile‑first design, works on all screen sizes |

---

## 🛠️ Tech Stack

The portfolio uses only:

- **HTML5** – semantic structure
- **CSS3** – custom properties, flexbox, grid, animations
- **Vanilla JavaScript** – all interactivity, games, and AI logic
- **Three.js** – for the hero particle network (loaded via CDN)
- **GSAP** – for scroll‑triggered animations (loaded via CDN)
- **Font Awesome** – icons (loaded via CDN)

No frameworks, no build systems, no compilation. Edit the single file and deploy.

---

## 🧠 AI Chatbot — Knowledge Base

The chatbot is **completely local** and does not send any data to external services. It works by matching user input against a JavaScript `KNOWLEDGE_BASE` object inside the HTML.

### How to Customize

1. Open `index.html` (or `personal_portfolio.html`) in a text editor.
2. Scroll to the `<script>` section near the bottom.
3. Find the `KNOWLEDGE_BASE` object.
4. Add, remove, or modify any property. Each property maps to a response string.
5. The matching logic (in `getLocalResponse()`) checks for keywords using regular expressions.
6. Add new keywords and map them to a knowledge base entry.

**Example:**
```javascript
// Add a new entry
my_new_topic: `This is a detailed response about my new project. It can include **markdown** like bold text.`,

// Add a regex in getLocalResponse()
if (/new topic|my project/.test(text)) {
  return KNOWLEDGE_BASE.my_new_topic;
}
```

---

## 📁 File Structure

```
portfolio/
├── index.html          # The complete portfolio (self‑contained)
├── README.md           # This file
└── LICENSE             # MIT License (optional)
```

No other files are required. All assets (fonts, icons, Three.js, GSAP) are loaded from CDNs.

---

## 🖥️ Local Development

1. Clone or download the repository:
   ```bash
   git clone https://github.com/tilaye1/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in any modern browser:
   - Double‑click the file, or
   - Use a local server (e.g., VS Code Live Server, Python `http.server`) for the best experience.

3. Make edits and refresh the browser.

**No dependencies to install** — it’s just HTML/CSS/JS.

---

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Push the repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and save.
4. Your site will be live at `https://<username>.github.io/<repository-name>`.

### Netlify / Vercel / Cloudflare Pages

Just drag‑and‑drop the `index.html` file, or connect your Git repository.

### Any Web Server

Upload the `index.html` to any static hosting service (S3, Apache, Nginx, etc.).

---

## 🎮 Games Overview

### 1. Commission the Controller
- **Goal:** Drag the 5 components (Temp Sensor, VFD Modbus, Relay Board, WiFi Module, Safety Watchdog) to their correct connection points on the ESP32.
- **Score:** +200 points per successful connection. Full boot when all 5 are connected.
- **Educational:** Teaches basic ESP32 system architecture.

### 2. Network Architect
- **Goal:** Place routers, switches, cameras, and storage on a grid to cover all 8 coverage zones within a $50K budget.
- **Real‑time stats:** Budget, coverage percentage, latency, and score.
- **Validation:** Click "VALIDATE" to check if all zones are covered.

---

## ✏️ Customization

### Change the Name / Title
Search for `TILAYE MERERA DINKA` and replace with your own.

### Update Projects
Each project is a `<div class="project-card">`. Edit the title, tech tags, description, and results.

### Modify the AI Chatbot
As described in the [AI Chatbot](#ai-chatbot-knowledge-base) section.

### Change the Color Scheme
The CSS variables at the top of the `<style>` block control all colors. For example:
```css
:root {
  --primary: #F59E0B;        /* Amber */
  --bg-deep: #0B0F19;        /* Dark background */
}
```

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it for your own portfolio.

---

## 🙏 Credits

- **Three.js** – for 3D graphics
- **GSAP + ScrollTrigger** – for animations
- **Font Awesome** – for icons
- **xAI Grok** – inspiration for the AI chatbot (though this implementation is entirely local)

---

## 📬 Contact

For questions, suggestions, or collaboration:

- **Email:** til_mer@yahoo.com
- **LinkedIn:** [linkedin.com/in/tilaye-merera-219470338](https://www.linkedin.com/in/tilaye-merera-219470338)
- **GitHub:** [github.com/tilaye1](https://github.com/tilaye1)
- **Website:** [www.winglife.net](https://www.winglife.net)

---

**Built with ❤️ and raw determination.**  
*“I build the systems that run nations.”*
