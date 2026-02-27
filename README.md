# 🚀 Prepverse  
### AI-Powered Interview Preparation SaaS Platform

Prepverse is a full-stack SaaS-style AI platform that helps users prepare for technical and HR interviews using intelligent resume analysis, AI-generated questions, real-time feedback, and a credit-based access system.

Built with real-world SaaS architecture, authentication, payment integration, and production deployment practices.

---

## 🌟 Features

### 📄 Resume-Based AI Question Generation
- Upload Resume (PDF)
- AI extracts skills & experience
- Generates tailored Technical & HR questions

### 🎯 Practice Interview Rounds
- Technical Round
- HR Round
- Skill-based questioning
- Real-time AI feedback

### 🧠 Intelligent Feedback System
- Performance evaluation
- Improvement suggestions
- Answer quality scoring

### 💳 Credit-Based Access System
- Users receive limited free credits
- Credit deduction per interview session
- SaaS-style monetization logic

### 💰 Razorpay Payment Integration
- Secure credit purchases
- Real-time payment verification
- Order tracking & transaction logging

### 🔐 Authentication
- Firebase Google Authentication
- Secure login system
- Protected routes

### 🎨 Modern UI
- Framer Motion animations
- Clean SaaS-style dashboard
- Smooth user experience

### 🚀 Production Deployment
- Full-stack deployment on Render
- Backend API hosting
- MongoDB Atlas integration

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Framer Motion
- Firebase Authentication

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Payments
- Razorpay Integration

### Deployment
- Render (Frontend + Backend)

---

## 🔄 Application Flow

1. User logs in using Google Authentication.
2. User uploads resume (PDF).
3. Backend processes resume and extracts content.
4. AI generates interview questions.
5. User answers questions.
6. AI evaluates and provides feedback.
7. Credits are deducted.
8. User can purchase additional credits via Razorpay.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/prepverse.git
cd prepverse
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend
- `PORT`
- `MONGO_URI`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `JWT_SECRET`

### Frontend
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`

---

## 📊 Database Models

- User  
- Credits  
- InterviewSession  
- PaymentTransaction  

---

## 🔒 Security Practices

- Secure API routes  
- Token-based authentication  
- Payment signature verification  
- Input validation  
- Environment variable protection  

---

## 🚀 Deployment

Prepverse is deployed using:

- Render (Backend API)
- Render Static Hosting (Frontend)
- MongoDB Atlas (Database)

Production-ready SaaS deployment structure.

---

## 🎯 Why Prepverse?

Prepverse is not just an interview practice tool. It demonstrates:

- Real SaaS monetization architecture  
- Authentication workflows  
- Payment gateway integration  
- Resume parsing logic  
- AI feedback systems  
- Production deployment lifecycle  

Perfect for showcasing full-stack engineering capability.

---

## 📈 Future Improvements

- AI voice-based mock interviews  
- Video interview simulation  
- Company-specific interview modes  
- Performance analytics dashboard  
- Subscription plans (Monthly/Annual)  

---

## 👨‍💻 Author

Built with ❤️ by Sreekanth S Nair
