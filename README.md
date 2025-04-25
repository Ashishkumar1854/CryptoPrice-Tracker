# CryptoPrice-Tracker
💹 A real-time Crypto Price Tracker built with React and public APIs. Stay updated with live cryptocurrency prices, charts, and market data.

 📸 Preview<img width="1366" alt="Screenshot 2025-04-25 at 15 23 51" src="https://github.com/user-attachments/assets/aa948a6d-1bc4-4718-baad-1551c31a30f9" />

## 🚀 Features

- Live display of top cryptocurrencies
- Clean UI with Tailwind CSS
- Responsive design with centered layout
- Visual performance indicators (green/red percentages)
- Embedded 7-day charts for each token

---

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Assets**: Local `/images` folder (custom logos + charts)
- **Deployment**: (Optional) Vercel / Netlify / GitHub Pages

# 🪙 Crypto Price Tracker

A visually engaging and responsive **Crypto Price Tracker** web app built with React.js and Tailwind CSS. It displays key data of major cryptocurrencies including current price, market cap, volume, supply, and 7-day performance using charts and percentage indicators.

> ✨ This project focuses on strong UI/UX practices, frontend logic, and clean responsive layout—ideal for showcasing during internship or job applications.

---

## 👨‍💻 Project Overview

This project simulates a simplified crypto price tracking dashboard, useful for both learning and showcasing:
- Real-world tabular data presentation
- Conditional styling (green/red for %)
- Responsive design layout using Tailwind CSS
- Clean code separation and reusable structure

---

## 🧠 Step-by-Step Logic & Methodology

### 1. **Project Setup**
- Initialized using `create-react-app` or Vite (your choice).
- Tailwind CSS installed and configured for styling.

### 2. **Data Handling**
- Created a static `cryptoData` array inside the `CryptoTable.js` component.
- Each object contains key data like logo, name, price, % changes, chart, etc.

### 3. **Component Design**
- `CryptoTable` is a functional component.
- Rendered a `<table>` with headers and rows.
- Data is looped using `.map()` to dynamically create each row.

### 4. **Dynamic Styling**
- Conditional rendering:
  ```js
  className={coin.change1h > 0 ? "text-green-500" : "text-red-500"}


## 🧱 Project Architecture
## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker

2. Install Dependencies
npm install
3. Start Development Server
npm start
4. Build for Production
npm run build
