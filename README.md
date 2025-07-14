# 🌍 Smart Travel Dashboard (React + Web APIs)

This project is a **React-based smart travel dashboard** that integrates multiple modern **Web APIs** to deliver location-aware functionality:

- 📍 Map with user’s current location using **Leaflet**
- 🌤️ Real-time weather using the **OpenWeatherMap API**
- 📶 Network monitoring using the **Network Information API**
- 🗺️ User movement path rendered with the **Canvas API**
- 📡 Location tracking via the **Geolocation API**

---

## 🚀 Features

| Feature                  | Technology Used                         |
|--------------------------|------------------------------------------|
| Live map with marker     | Leaflet + Geolocation API                |
| Weather at your location | OpenWeatherMap API + Fetch              |
| Draw user's path         | Canvas API + watchPosition              |
| Show connection type     | Network Information API                 |
| Modern UI with React     | React (Vite-based project)              |

---

## 📦 Project Structure
src/
├── components/
│ ├── MapView.jsx # Leaflet map centered on user's geolocation
│ ├── WeatherCard.jsx # Fetches weather using OpenWeatherMap API
│ ├── UserPath.jsx # Tracks & draws user's path on a canvas
│ └── NetworkStatus.jsx # Displays network type and online status
│
├── App.jsx # Main application layout
├── index.css # Styling for map, weather, canvas, etc.
└── main.jsx # React root rendering (Vite)


---

## 🚀 Features

- 📍 Displays user location on a Leaflet map
- 🌦️ Shows current weather at user's location
- 🗺️ Tracks and draws live movement path using Canvas
- 🌐 Displays online/offline status and connection type
- 🔁 Real-time updates via Geolocation & Network APIs

---

## 🧠 Web APIs & Libraries Used

| Feature                        | Technology                |
|-------------------------------|---------------------------|
| Location tracking             | **Geolocation API**       |
| Weather data                  | **OpenWeatherMap API**    |
| Movement path visualization   | **Canvas API**            |
| Map display                   | **Leaflet + OpenStreetMap** |
| Network info                  | **Network Information API** |
| React rendering               | **React + Vite**          |

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/smart-travel-dashboard.git
cd smart-travel-dashboard
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start Deployment Server
```bash
npm run dev
```
## API Key Required
To display weather data, you need an API key from OpenWeatherMap.

Create an account and get your free API key.

Replace the placeholder in WeatherCard.jsx:

```js
const API_KEY = 'YOUR_API_KEY_HERE';
```
