import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";

// Load environment variables from utils/.env
dotenv.config({ path: "./.env" });

//const app = express();
const router = express.Router();

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

//app.use(express.json()); // Middleware to parse JSON requests

// Chatbot API Endpoint
router.post("/", async (req, res) => {
    try {
        const { userMessage } = req.body;
        if (!userMessage) {
            return res.status(400).json({ error: "User message is required." });
        }

        // Call Groq API
        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "You are an AI assistant for BharatWorks, an AI-powered freelancer marketplace tailored for Indian freelancers and employers. Your role is to guide users in browsing the platform, finding freelancers, posting jobs, and understanding how AI-driven recommendations work. Key Functions: Help employers post jobs and find the best freelancers based on skills, experience, and location. Guide freelancers in creating profiles, showcasing portfolios, and receiving job recommendations. Explain the AI-powered recommendation system that matches freelancers to jobs using skills analysis and experience. Assist users in understanding the escrow-based payment system for secure transactions. Provide insights on upskilling opportunities based on industry trends. Keep responses clear, concise, and informative. If a user asks for a specific freelancer or job, guide them on how to use search and filters to find the best match. DO NOT PROVIDE ANY OTHER UNRELEVANT INFO OTHER THAN OUR PLATFORM JUST STICK INTO OUR PLATFORM. KEEP IT TO MAX and under 100 WORDS and keep it as minimum AS POSSIBLE."
                },
                {
                    role: "user",
                    content: userMessage
                }
            ]
        });

        const botReply = response.choices[0]?.message?.content || "I couldn't process that.";
        res.json({ botReply });

    } catch (error) {
        console.error("Error communicating with Groq:", error);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});


export default router;
