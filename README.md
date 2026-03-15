# 🏥 Prime Skin Clinic — Official Website

A fully responsive, multi-page clinic website built for a dermatologist's online presence — featuring treatment showcases, patient-facing content, and a Calendly-integrated appointment booking system.


**Portfolio / Showcase Note:** This repository contains the **demo version** of the delivered project. Certain features (form submissions, newsletter, live database integrations) are intentionally non-functional in this version as the fully operational build has been handed off to the client.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Pages](#-live-pages)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Appointment Booking](#-appointment-booking--calendly-integration)
- [Pages Breakdown](#-pages-breakdown)
- [Known Non-Working Features](#-known-non-working-features-demo-version)
- [Screenshots](#-screenshots)
- [Client Deliverable](#-client-deliverable)
- [Author](#-author)

---

## 🌟 Overview

**Prime Skin Clinic** is a professional dermatology clinic website commissioned by a dermatologist to establish a strong online presence. The project was built as a **custom, hand-coded static website** — no CMS, no page builders — offering the clinic:

- A polished, trust-building digital storefront
- A clear showcase of all skin treatments and services offered
- An online appointment booking experience powered by **Calendly**
- A fully responsive layout optimized for mobile, tablet, and desktop
- Section-by-section storytelling — from hero banners to testimonials to contact

This repo serves as a **portfolio showcase** of the delivered client project.

---

## 🗂️ Live Pages

| Website Live Link](https://www.primeskincaremd.com/)

| Page | File | Description |
|------|------|-------------|
| 🏠 Home | `index.html` | Hero slider, services preview, about snapshot, CTA sections |
| 💆 Services | `services.html` | Full listing of all dermatology treatments offered |
| 👨‍⚕️ About | `about.html` | Doctor's profile, clinic story, credentials |
| 📞 Contact | `contact.html` | Contact form, location info, map |
| ✅ Form Success | `form_submit.html` | Confirmation page after contact form submission |
| 📧 Newsletter Success | `news_letter_submit.html` | Confirmation page after newsletter signup |
| 📅 Booking Popup | `popup.html` | Calendly-powered appointment booking modal/overlay |

---

## ✨ Features

### 🎨 Design & UI
- Fully **responsive design** — mobile-first, tested across screen sizes
- Custom **hero image slider** with multiple full-screen slides
- Smooth **scroll animations** and section transitions
- Professional medical aesthetic with a clean, trustworthy color palette
- Custom **favicon**, branded logo in header and footer

### 🏥 Clinical Content
- Dedicated **Services page** with 11 treatment categories, each with imagery
- Visual **icon-based feature sections** across multiple pages (Sections 6 & 7)
- Client/partner logo showcase section
- Before/after treatment imagery in gallery sections

### 📅 Appointment Booking
- **Calendly integration** — patients can book appointments directly through the website
- Booking accessible via a dedicated popup/overlay page (`popup.html`)
- No backend required for booking — handled entirely through Calendly's platform

### 📬 Communication
- **Contact form** with success redirect page
- **Newsletter signup** form with dedicated success page
- Footer with clinic contact details and social links

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Custom styling, animations, responsive layouts |
| **Vanilla JavaScript** | Interactivity, slider, scroll effects, form handling |
| **Calendly Embed** | Online appointment booking system |
| **Google Fonts** | Typography |
| **SVG Icons** | Scalable UI icons across service sections |

> No frameworks. No libraries. No CMS. Pure hand-coded HTML/CSS/JS — fully lightweight and fast.

---

## 📁 Project Structure

```
Prime_Skin_Clinic_Website/
│
├── index.html                  # Homepage
├── about.html                  # About the clinic & doctor
├── services.html               # All treatments & services
├── contact.html                # Contact page
├── popup.html                  # Calendly booking popup
├── form_submit.html            # Contact form success page
├── news_letter_submit.html     # Newsletter signup success page
│
├── CSS/
│   ├── index.css               # Homepage styles
│   ├── about.css               # About page styles
│   ├── services.css            # Services page styles
│   └── contact.css             # Contact page styles
│
├── JS/
│   ├── index.js                # Homepage scripts (slider, animations)
│   ├── about.js                # About page scripts
│   ├── services.js             # Services page scripts
│   └── contact.js              # Contact page scripts
│
└── img/
    ├── header-logo.png         # Clinic logo (header)
    ├── footer-logo.png         # Clinic logo (footer)
    ├── fav-icon.png            # Browser favicon
    ├── sec-1-bg.jpg            # Hero section background
    ├── slider-img-1..7.png     # Hero slider images
    ├── service-1..11.jpg       # Service/treatment images
    ├── sec-2-icon-1..4.svg     # Feature icons
    ├── sec-6-icon-1..6.svg     # Treatment icons (row 1)
    ├── sec-7-icon-1..6.svg     # Treatment icons (row 2)
    ├── sec-6-container-img.jpg # Section 6 background image
    ├── sec-7-container-img.jpg # Section 7 background image
    ├── contact-page-img.jpg    # Contact page visual
    ├── customer-logo.png       # Client/partner logos
    └── ...                     # Additional imagery assets
```

---

## 📅 Appointment Booking — Calendly Integration

The booking system is built on top of **Calendly's embed** platform, requiring zero backend infrastructure for scheduling:

- The **"Book Appointment"** CTA buttons across the site trigger a booking popup
- `popup.html` houses the embedded Calendly widget
- Patients select their preferred date, time, and treatment type
- Confirmation and reminders are handled automatically by Calendly
- The clinic owner manages availability entirely through their Calendly dashboard

> In the live client version, the Calendly link is connected to the doctor's real clinic calendar with configured availability windows, buffer times, and appointment types.

---

## 📄 Pages Breakdown

### 🏠 `index.html` — Homepage
The homepage is the main entry point and is structured into multiple content sections:

- **Section 1 — Hero Banner:** Full-screen background with a rotating image slider (7 slides), headline text, and a primary CTA button
- **Section 2 — Why Choose Us:** 4 icon-based feature highlights (e.g., certified dermatologist, advanced equipment)
- **Section 3 — Services Preview:** Grid of treatment cards with imagery linking to the full services page
- **Section 4 — About Snapshot:** Brief introduction to the doctor with a professional photo
- **Section 5 — Statistics/Trust Banner:** Key clinic numbers (patients treated, years of experience, etc.)
- **Section 6 — Treatments Showcase (Part 1):** 6 treatment icons with descriptions in a visual container
- **Section 7 — Treatments Showcase (Part 2):** 6 more treatment highlights
- **Newsletter Section:** Email signup form
- **Footer:** Logo, navigation links, contact info, social icons

### 💆 `services.html` — Services
Full-detail listing of all **11 dermatology treatments** offered by the clinic, each with:
- High-quality treatment image generated using AI
- Service name and description
- "Book Now" CTA

### 👨‍⚕️ `about.html` — About
- Doctor's professional biography and qualifications
- Clinic mission and values
- Trust-building credentials and certifications

### 📞 `contact.html` — Contact
- Contact form (Name, Email, Phone, Message)
- Clinic address and operating hours
- Embedded map or location reference
- Direct phone/email contact info

---

## ⚠️ Known Non-Working Features (Demo Version)

The following features are **intentionally disabled** in this repository as the fully functional version has been delivered to the client:

| Feature | Status | Reason |
|---------|--------|--------|
| Contact Form Submission | ❌ Non-functional | Backend/email handler not included in demo |
| Newsletter Signup | ❌ Non-functional | Mailing list integration removed for demo |
| Calendly Booking Widget | ⚠️ Placeholder | Client's live Calendly link not exposed publicly |
| Form Success Redirects | ⚠️ Static only | No server-side processing in demo |

> All features work correctly in the **live production version** delivered to the client.

---

## 📦 Client Deliverable

This website was developed as a **freelance client project** with the following deliverables:

- ✅ Complete multi-page static website (7 pages)
- ✅ Fully responsive across all devices
- ✅ Calendly appointment booking integration
- ✅ Optimized images and assets
- ✅ Clean, maintainable code with separated CSS and JS per page
- ✅ Cross-browser compatible
- ✅ Handed off as a ready-to-deploy package

---

## 👨‍💻 Author

**Developed by:** Ammar Waheed
**Type:** Freelance Client Project
**Client:** Dermatologist — Prime Skin Clinic
**Year:** 2025

---


**If you found this project useful or inspiring, consider giving it a ⭐**

*Built with care for a real medical professional's online presence.*
