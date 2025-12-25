// const express = require("express");
// const router = express.Router();
// const {
//   getNotes,
//   createNote,
//   updateNote,
//   deleteNote,
// } = require("../controllers/noteController");

// router.get("/", getNotes);
// router.post("/", createNote);
// router.put("/:id", updateNote);
// router.delete("/:id", deleteNote);

// module.exports = router;

// Protect All Notes Routes
// const express = require("express");
// const router = express.Router();

// const {
//   getNotes,
//   createNote,
//   updateNote,
//   deleteNote,
// } = require("../controllers/noteController");

// const authMiddleware = require("../middleware/authMiddleware");

// router.use(authMiddleware); // Protect ALL note routes

// router.get("/", getNotes);
// router.post("/", createNote);
// router.put("/:id", updateNote);
// router.delete("/:id", deleteNote);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getNotes);
router.post("/", authMiddleware, createNote);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);

module.exports = router;
