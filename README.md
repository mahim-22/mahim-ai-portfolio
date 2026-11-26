[README.md](https://github.com/user-attachments/files/35446794/README.md)
# mahim-ai-portfolio
Premium AI Automation Portfolio of Mahim Ansar
# Mahim Ansar | AI Automation Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-00d4ff)

A modern, responsive personal portfolio website for **Mahim Ansar**, a Computer Science & Artificial Intelligence student focused on AI chatbots, voice agents, workflow automation and prompt engineering.

The site has a dark "glassmorphism" look with animated particles, a typing effect, a working contact form and a live AI chat widget.

**Live demo:** https://YOUR_USERNAME.github.io/REPO_NAME/

---

## Table of Contents

- [Features](#features)
- [Sections](#sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deploy on GitHub Pages](#deploy-on-github-pages)
- [Bonus: Daraz Store Demos](#bonus-daraz-store-demos)
- [Contact](#contact)

---

## Features

- **Dark premium UI** with glass-style cards, gradient accents and Poppins typography
- **Animated particle background** (Particles.js)
- **Typing effect** in the hero section (Typed.js) cycling through roles
- **3D tilt and glare** on skill, service and project cards (Vanilla Tilt)
- **Scroll animations** using AOS and the Intersection Observer API
- **Loading animation**, custom cursor and scroll-to-top button
- **Sticky navbar** with active-link highlighting and a mobile hamburger menu
- **Working contact form** powered by EmailJS (no backend needed)
- **AI chat widget** powered by Voiceflow (text and voice)
- **Downloadable CV** straight from the About section
- **Fully responsive** on desktop, tablet and mobile

## Sections

| Section | What it shows |
|---|---|
| **Home** | Intro, animated role titles, "View Projects" and "Hire Me" buttons |
| **About** | Short bio and CV download |
| **Skills** | AI Chatbots, Voice AI Agents, Web Development, AI Automation, Video Editing, Prompt Engineering |
| **Services** | Chatbot development, voice agents, workflow automation, AI website development, business growth automation, prompt engineering |
| **Projects** | AI Clinic Assistant, Restaurant AI Chatbot, Voice Booking Agent, CRM Automation |
| **Why Choose Me** | Creative solutions, reliable support, fast delivery |
| **Contact** | Email, location and a message form |

## Tech Stack

**Core:** HTML5, CSS3 (custom properties, flexbox, grid), vanilla JavaScript

**Libraries and services (loaded from CDN):**

| Tool | Purpose |
|---|---|
| [Particles.js](https://github.com/VincentGarreau/particles.js) | Animated background |
| [Typed.js](https://github.com/mattboldt/typed.js) | Typing effect |
| [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/) | 3D card tilt |
| [AOS](https://michalsnik.github.io/aos/) | Scroll animations |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins) | Typography |
| [EmailJS](https://www.emailjs.com/) | Contact form emails |
| [Voiceflow](https://www.voiceflow.com/) | AI chat widget |

## Project Structure

```
portfolio/
├── index.html            # Main portfolio page
├── style.css             # All styles
├── script.js             # Navbar, scroll effects, contact form (EmailJS)
├── particle-config.js    # Particle background settings
├── daraz.html            # Demo: product cards with add-to-cart
├── darazz.html           # Demo: flash-sale store with product modal
├── images/
│   ├── profile.png       # Hero image
│   ├── about.jpg         # About section image
│   ├── project1.png      # Project thumbnails
│   ├── project2.png
│   └── project3.png
├── assets/
│   └── mahim-CV.pdf      # Downloadable CV
└── README.md
```

> **Note:** `index.html` expects the images inside an `images/` folder and the CV inside an `assets/` folder, as shown above.

## Getting Started

No build tools or installation are needed.

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
```

**2. Open the site**

Double-click `index.html`, or run a small local server (recommended):
```bash
# Python
python -m http.server 8000
```
Then visit `http://localhost:8000`.

With VS Code you can also use the **Live Server** extension and click "Go Live".

An internet connection is needed for the CDN libraries, fonts, contact form and chat widget.

## Configuration

### Contact form (EmailJS)
The form is handled in `script.js` and initialised at the bottom of `index.html`. To use your own account:
1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an email service and a template. The template should use the form fields `name`, `email`, `title` and `message`.
3. In `index.html`, set your **public key** in `emailjs.init({ publicKey: "..." })`.
4. In `script.js`, set your **service ID** and **template ID** in `emailjs.sendForm(...)`.

### AI chat widget (Voiceflow)
The widget is loaded at the bottom of `index.html`. Replace the `projectID` with your own Voiceflow project to connect your chatbot.

### Colours and theme
All colours live in the `:root` block of `style.css`:
```css
--bg: #07111f;
--primary: #00d4ff;
--secondary: #7c4dff;
```
Change these to restyle the whole site.

### Your own content
- Replace the images in `images/` and the CV in `assets/`.
- Update the text in `index.html` (hero, about, skills, services, projects).
- Update the role titles in the `Typed` setup near the bottom of `index.html`.
- Replace the `#` links on the project buttons and social icons with your real URLs.

## Deploy on GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

The file that opens first must be named `index.html`, which it already is.

## Bonus: Daraz Store Demos

Two standalone front-end practice pages are included. Each is a single self-contained HTML file, and both use plain JavaScript:

- **`daraz.html`** shows a Daraz-style header with search, a horizontally scrolling row of product cards, a cart counter and add-to-cart alerts.
- **`darazz.html`** is a "Flash Sale" store with discount badges, ratings, a product details modal and an add-to-cart button.

Open either file directly in a browser to try them.

## Contact

- **Email:** aireceptionpro99@gmail.com
- **LinkedIn:** [linkedin.com/in/mahim-shakir-05b387423](https://www.linkedin.com/in/mahim-shakir-05b387423)
- **Location:** Pakistan

Feel free to reach out for AI chatbot, voice agent or automation projects, or open an issue if you spot a bug.

---

<p align="center">Built by Mahim Ansar</p>
