// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// FOR TESTING GET & POST REQUEST

// const express = require("express");
// const app = express();

// app.use(express.json());

// let notes = [];

// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// app.get("/notes", (req, res) => {
//   res.json(notes);
// });

// app.post("/notes", (req, res) => {
//   const { title, description } = req.body;

//   if (!title || !description) {
//     return res.status(400).json({
//       message: "Title and description required",
//     });
//   }

//   const newNote = { title, description };
//   notes.push(newNote);

//   res.json({
//     message: "Note added successfully",
//     notes,
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// CONNECTING BACKEND WITH FRONTEND
// const express = require("express");
// const cors = require("cors");

// const app = express();

// // Allow cross-origin requests (React 3000 -> Backend 5000)
// app.use(cors());

// // Parse JSON bodies
// app.use(express.json());

// // In-memory notes (learning only)
// let notes = [];

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// // GET all notes
// app.get("/notes", (req, res) => {
//   res.json(notes);
// });

// // POST a new note
// app.post("/notes", (req, res) => {
//   const { title, description } = req.body;

//   if (!title || !description) {
//     return res.status(400).json({
//       message: "Title and description required",
//     });
//   }

//   const newNote = { title, description };
//   notes.push(newNote);

//   res.json({
//     message: "Note added successfully",
//     notes,
//   });
// });

// // Start server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// BACKEND CONNECTED TO MONGEDB
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // 🔹 MongoDB Connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/notesApp")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// // 🔹 Test Route
// app.get("/", (req, res) => {
//   res.send("Backend is running with MongoDB");
// });

// // 🔹 Server Start
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// MONGODB CRUD
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Note = require("./models/Note");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/notesApp")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend with MongoDB CRUD running");
// });

// // CREATE note (POST)
// app.post("/notes", async (req, res) => {
//   const { title, description } = req.body;

//   try {
//     const newNote = new Note({ title, description });
//     await newNote.save();

//     res.json({ message: "Note saved to DB" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save note" });
//   }
// });

// // READ notes (GET)
// app.get("/notes", async (req, res) => {
//   try {
//     const notes = await Note.find();
//     res.json(notes);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch notes" });
//   }
// });

// // Server start
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// DELETE WITH MONGODB
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Note = require("./models/Note");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/notesApp")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend running with MongoDB CRUD");
// });

// // CREATE note
// app.post("/notes", async (req, res) => {
//   const { title, description } = req.body;

//   try {
//     const newNote = new Note({ title, description });
//     await newNote.save();
//     res.json({ message: "Note saved" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save note" });
//   }
// });

// // READ notes
// app.get("/notes", async (req, res) => {
//   try {
//     const notes = await Note.find();
//     res.json(notes);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch notes" });
//   }
// });

// // DELETE note by ID
// app.delete("/notes/:id", async (req, res) => {
//   try {
//     await Note.findByIdAndDelete(req.params.id);
//     res.json({ message: "Note deleted" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete note" });
//   }
// });

// // Server start
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// FULL CRUD WITH MONGODB
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Note = require("./models/Note");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/notesApp")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB error:", err));

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend running with full CRUD");
// });

// // CREATE
// app.post("/notes", async (req, res) => {
//   const { title, description } = req.body;

//   try {
//     const note = new Note({ title, description });
//     await note.save();
//     res.json({ message: "Note created" });
//   } catch {
//     res.status(500).json({ error: "Create failed" });
//   }
// });

// // READ
// app.get("/notes", async (req, res) => {
//   try {
//     const notes = await Note.find();
//     res.json(notes);
//   } catch {
//     res.status(500).json({ error: "Fetch failed" });
//   }
// });

// // UPDATE
// app.put("/notes/:id", async (req, res) => {
//   const { title, description } = req.body;

//   try {
//     await Note.findByIdAndUpdate(req.params.id, {
//       title,
//       description,
//     });
//     res.json({ message: "Note updated" });
//   } catch {
//     res.status(500).json({ error: "Update failed" });
//   }
// });

// // DELETE
// app.delete("/notes/:id", async (req, res) => {
//   try {
//     await Note.findByIdAndDelete(req.params.id);
//     res.json({ message: "Note deleted" });
//   } catch {
//     res.status(500).json({ error: "Delete failed" });
//   }
// });

// // Server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// CLEAN BACKEND ARCHITECTURE
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const noteRoutes = require("./routes/noteRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/notesApp")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// app.use("/notes", noteRoutes);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// ADDING MIDDLEWARE
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const noteRoutes = require("./routes/noteRoutes");
// const errorHandler = require("./middleware/errorHandler");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/notesApp")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB error:", err));

// // Routes
// app.use("/notes", noteRoutes);

// // Error middleware (ALWAYS LAST)
// app.use(errorHandler);

// // Server
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// WITH AUTHENTICATION
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const noteRoutes = require("./routes/noteRoutes");
// const authRoutes = require("./routes/authRoutes");
// const errorHandler = require("./middleware/errorHandler");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/notesApp")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB error:", err));

// // Routes
// app.use("/notes", noteRoutes); // Notes CRUD routes
// app.use("/auth", authRoutes); // Signup + Login routes

// // Error middleware (Always last)
// app.use(errorHandler);

// // Server start
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// ADDING .ENV
// require("dotenv").config(); // 🔑 MUST BE FIRST

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const noteRoutes = require("./routes/noteRoutes");
// const authRoutes = require("./routes/authRoutes");
// const errorHandler = require("./middleware/errorHandler");

// const app = express();

// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://mern-notes-frontend.onrender.com", // later
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());

// // MongoDB connection (from env)
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// // Routes
// app.use("/notes", noteRoutes);
// app.use("/auth", authRoutes);

// // Error middleware
// app.use(errorHandler);

// // Port from env
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// UPDATE BACKEND CORS CONFIG
// index.js (Backend Entry Point)

// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");
// const noteRoutes = require("./routes/noteRoutes");
// const errorHandler = require("./middleware/errorHandler");
// const authMiddleware = require("./middleware/authMiddleware");

// const app = express();

// // ========= CORS CONFIG =========
// // Allow both local & deployed frontend
// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://mern-notes-frontend-5je4.onrender.com",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin (like mobile apps or curl)
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("CORS blocked by server: " + origin));
//       }
//     },
//     credentials: true,
//   })
// );

// // ========= Body Parser =========
// app.use(express.json());

// // ========= Routes =========
// app.use("/auth", authRoutes); // signup & login
// app.use("/notes", authMiddleware, noteRoutes); // notes CRUD (protected)

// // ========= Error Handling Middleware =========
// app.use(errorHandler);

// // ========= DB Connection =========
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// // ========= Server =========
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// CORS
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

// Error Handler
app.use(errorMiddleware);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
