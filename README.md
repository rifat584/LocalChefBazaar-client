# LocalChefBazaar

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-yellowgreen)](https://expressjs.com/)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

**LocalChefBazaar** is a full-stack food marketplace where users can browse meals, order from local chefs, and leave reviews. Chefs can manage their meals, track orders, and view platform analytics through an admin dashboard.

This project demonstrates modern web development practices using React, Tailwind CSS, React Query, Node.js, Express, MongoDB, and Stripe for payment integration.

---

## Features

### User Features

- Browse daily meals and search by chef or food name
- View meal details with ingredients, chef info, estimated delivery time, and reviews
- Submit reviews and add meals to favorites
- Place orders with Stripe payment integration
- Paginated meal listings with sorting options
- Profile management and order tracking

### Chef Features

- Add, update, and delete meals
- View order requests and update order statuses
- Track revenue and sales via charts

### Admin Features

- Dashboard with key metrics: total users, total revenue, orders pending/delivered
- Recharts visualization for revenue and order statistics
- Manage users, roles, and review moderation

---

## Tech Stack

- **Frontend:** React 18, Tailwind CSS, React Router, Framer Motion, React Swiper, React Query, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas or local)
- **Authentication:** Firebase Auth (JWT)
- **Payment:** Stripe
- **Visualization:** Recharts
- **Others:** Vite, dotenv, CORS

---

## Installation

### Prerequisites

- Node.js >= 18
- npm or yarn
- MongoDB Atlas account or local MongoDB
- Firebase project (for authentication)
- Stripe account (for payments)

### Frontend

```bash
cd frontend
npm install
```
