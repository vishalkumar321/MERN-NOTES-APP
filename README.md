# 📝 MERN Notes Backend (JWT Auth + Notes CRUD + MongoDB)

A production-ready backend for a Notes Management App with secure authentication, CORS protection, and REST APIs.
Built using **Node.js, Express.js, JWT, MongoDB, bcryptjs**, and deployed on **Render**.

---

## 🌟 Features

### Authentication

- Email & Password authentication
- Secure password hashing using bcrypt
- JWT-based authentication
- Authorization middleware for protected routes

### Notes Management

- Create, Read, Update, Delete notes
- Notes linked to logged-in user only

### Security & Production

- CORS whitelisting
- JWT stored in `localStorage`
- Environment-based configuration
- MongoDB Atlas connection
- Error handling middleware

---

## 🛠 Tech Stack

| Layer      | Technology                      |
| ---------- | ------------------------------- |
| Server     | Node.js + Express.js            |
| Auth       | JWT (`jsonwebtoken`) + bcryptjs |
| Database   | MongoDB Atlas + Mongoose        |
| Deployment | Render                          |
| API Test   | Postman, Thunder Client         |

---

## 📁 Directory Structure

```
backend/
├── controllers/ # logic
├── models/ # Mongo schemas
├── routes/ # API routes
├── middleware/ # auth & error handling
└── index.js # server entry point
```

---

## Create .env file

```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri_here
JWT_SECRET=your_secret_key_here
CLIENT_URL=https://mern-notes-frontend-dls0.onrender.com
```

## 📦 Installation & Setup

### 1️⃣ Clone & install dependencies

```bash
git clone https://github.com/vishalkumar321/MERN-NOTES-APP.git
cd backend
npm install
```
