# AI Priority CRM 🚀

AI Priority CRM is a full-stack AI-powered Customer Relationship Management system designed to intelligently analyze and prioritize customer support tickets using Artificial Intelligence.

This project demonstrates how AI can be practically integrated into real-world business applications.

---

## 🔥 Why This Project?

In real customer support systems:
- Thousands of tickets arrive daily
- Critical issues are often delayed
- Manual prioritization causes inefficiency

AI Priority CRM solves this by automatically analyzing customer issues and assigning priorities like **High, Medium, Low** using AI.

---

## 🧠 Key Features

- AI-based ticket priority detection
- Smart issue analysis (urgency & sentiment)
- Secure login & signup system
- JWT authentication
- Role-based access (Admin / Agent)
- Admin dashboard & user management
- Customer management module
- Ticket lifecycle management
- Protected routes & secure APIs
- Clean MVC backend architecture
- Modern responsive UI with Tailwind CSS

---

## 🤖 How AI Works in This Project

- User submits a support ticket
- Ticket issue text is sent to AI
- AI analyzes urgency & intent
- Priority is automatically assigned
- Support team handles critical tickets first

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- AI API integration
- MVC architecture

---

## 📂 Project Structure

ai-priority-crm/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── AuthContext.jsx
│ │ └── main.jsx
│ └── index.html
│
└── README.md

## 🚀 How to Run Locally

### Backend
cd backend
npm install
npm start

Create .env file:
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
AI_API_KEY=your_ai_key

Frontend
cd frontend
npm install
npm run dev
