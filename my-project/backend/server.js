const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const DATABASE_URL =
  "mongodb+srv://arun15ee03:IKxzMBjnNmtjITBk@cluster0.mcj8u.mongodb.net/myFirstDatabase";

// Connect to MongoDB Atlas
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Define Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create Model
const Contact = mongoose.model("Contact", contactSchema);

// API Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newContact = new Contact({ name, email, message, date: Date.now() });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start Server
app.listen(5004, () => {
  console.log(`Server running on http://localhost:5004`);
  require(`http://localhost:5004/index.html`);
});
