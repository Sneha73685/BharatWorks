# BharatWorks - AI-Powered Freelancer Marketplace

## About BharatWorks
BharatWorks is an AI-driven freelancer marketplace built at Hackurate Hackathon to revolutionize the freelancing ecosystem. It leverages AI-powered job matching, escrow-secured payments, and AI-driven upskilling to create a seamless hiring experience for both freelancers and employers.

---

## Key Features
### AI-Powered Freelancer Matching
- Uses BERT & TF-IDF for intelligent job-skills matching.
- AI ranks freelancers based on experience, ratings, job success rate, and location.

### Secure Escrow Payments & Fraud Prevention
- Payments are held in escrow until the job is successfully completed.
- AI-powered fraud detection to prevent fake accounts & scams.

### AI-Based Upskilling & Career Growth
- AI suggests in-demand skills and personalized learning courses.
- Helps freelancers stay competitive in the evolving job market.

### Regional Job Support
- Supports local hiring in Tier-2 & Tier-3 cities.
- Provides multilingual support for job postings and applications.

### Lower Fees, Higher Earnings
- 5%-15% commission (vs. 20%+ on global platforms).
- Free job posting for employers.

---

## Tech Stack

### Frontend
- React.js (Next.js for SEO optimization)
- Tailwind CSS (for UI styling)

### Backend
- Node.js with Express.js (for API development)
- MongoDB (NoSQL database)
- Firebase (Authentication & Real-time updates)

### AI Models Used
- Freelancer Matching: TF-IDF + Cosine Similarity / BERT
- Freelancer Ranking: Random Forest / XGBoost
- Fraud Detection: Isolation Forest / Autoencoder
- Upskilling Recommendations: Collaborative Filtering (SVD, ALS)

### Security & Deployment
- Payments: Razorpay / Stripe for escrow transactions.
- Hosting: AWS / Railway.app / Render for scalable backend.
- Security: AES encryption, JWT authentication, SQL Injection prevention.

---

## Installation & Setup

### Clone the Repository
```sh
git clone https://github.com/Sneha73685/latest-bahratworks.git
cd latest-bahratworks
```

### Install Dependencies
```sh
npm install   # For frontend (React.js)
npm run dev   # Start frontend server
```
```sh
cd backend  # Navigate to backend folder
npm install  # Install backend dependencies
node server.js  # Start backend server
```

### Setup Environment Variables (.env)
Create a `.env` file in the root directory and add the following:
```sh
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PAYMENT_GATEWAY_KEY=your_payment_key
```

---

## Usage Guide
1. Employers can post job listings and receive AI-powered freelancer recommendations.
2. Freelancers can apply for jobs, complete projects, and get paid securely through escrow.
3. AI continuously analyzes job trends and recommends skill upskilling.

---

## Contribution Guidelines
Want to contribute? Follow these steps:
1. Fork the Repository
2. Create a Feature Branch (`git checkout -b feature-name`)
3. Commit Your Changes (`git commit -m "Added new feature"`)
4. Push to GitHub (`git push origin feature-name`)
5. Open a Pull Request

---

## BharatWorks - Smarter, Safer, & More Profitable Freelancing!

