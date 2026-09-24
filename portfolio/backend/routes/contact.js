import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router();

// POST /api/contact  → save a message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are all required." });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, id: contact._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong saving your message. Please try again." });
  }
});

// GET /api/contact  → list messages (handy for you to check submissions)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not fetch messages." });
  }
});

export default router;
