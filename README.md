# PopX React Assignment

A React.js implementation of the PopX mobile application UI based on the provided Adobe XD design.

The application recreates the onboarding flow and account screens while maintaining a pixel-perfect mobile interface centered on the webpage.

## Live Demo

**Hosted URL: https://pop-x-educase-nine.vercel.app**

---

## Features

* Landing page
* Login page
* Create Account page
* Profile page
* React Router navigation
* Reusable Button component
* Reusable InputField component
* Local Storage integration
* Mobile-first UI layout
* Pixel-perfect implementation based on the provided design

---

## Tech Stack

* React
* Vite
* React Router DOM
* CSS

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Button/
│   ├── InputField/
│   └── Layout/
├── pages/
│   ├── LandingScreen.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   └── ProfilePage.jsx
├── App.jsx
└── main.jsx
```

---

## Screens

### Landing Page

* Welcome screen
* Create Account navigation
* Login navigation

### Login Page

* Email field
* Password field
* Login button

### Create Account Page

* Full Name
* Phone Number
* Email Address
* Password
* Company Name
* Agency selection
* Create Account action

### Profile Page

* User profile information
* Profile avatar section
* Account details
* Information section

---

## Local Storage

User information entered during registration is stored in browser local storage and displayed on the Profile page.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd educase-india
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Design Reference

Adobe XD design provided as part of the assignment requirements.

---

## Author

Aditya Yewale
