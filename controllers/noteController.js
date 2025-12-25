// const Note = require("../models/Note");

// exports.getNotes = async (req, res) => {
//   try {
//     const notes = await Note.find();
//     res.json(notes);
//   } catch {
//     res.status(500).json({ error: "Fetch failed" });
//   }
// };

// exports.createNote = async (req, res) => {
//   const { title, description } = req.body;

//   try {
//     const note = new Note({ title, description });
//     await note.save();
//     res.json({ message: "Note created" });
//   } catch {
//     res.status(500).json({ error: "Create failed" });
//   }
// };

// exports.updateNote = async (req, res) => {
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
// };

// exports.deleteNote = async (req, res) => {
//   try {
//     await Note.findByIdAndDelete(req.params.id);
//     res.json({ message: "Note deleted" });
//   } catch {
//     res.status(500).json({ error: "Delete failed" });
//   }
// };

// ADDING MIDDLEWARE
// const Note = require("../models/Note");

// // GET all notes
// exports.getNotes = async (req, res, next) => {
//   try {
//     const notes = await Note.find();
//     res.json(notes);
//   } catch (err) {
//     next(err);
//   }
// };

// // CREATE note
// exports.createNote = async (req, res, next) => {
//   const { title, description } = req.body;

//   if (!title || !description) {
//     return res.status(400).json({ error: "Title and description required" });
//   }

//   try {
//     const note = new Note({ title, description });
//     await note.save();
//     res.json({ message: "Note created" });
//   } catch (err) {
//     next(err);
//   }
// };

// // UPDATE note
// exports.updateNote = async (req, res, next) => {
//   const { title, description } = req.body;

//   try {
//     await Note.findByIdAndUpdate(req.params.id, {
//       title,
//       description,
//     });
//     res.json({ message: "Note updated" });
//   } catch (err) {
//     next(err);
//   }
// };

// // DELETE note
// exports.deleteNote = async (req, res, next) => {
//   try {
//     await Note.findByIdAndDelete(req.params.id);
//     res.json({ message: "Note deleted" });
//   } catch (err) {
//     next(err);
//   }
// };

// WITH VALIDATION
// const Note = require("../models/Note");

// // GET all notes
// exports.getNotes = async (req, res, next) => {
//   try {
//     const notes = await Note.find();
//     res.json(notes);
//   } catch (err) {
//     next(err);
//   }
// };

// // CREATE note (VALIDATION HERE)
// exports.createNote = async (req, res, next) => {
//   const { title, description } = req.body;

//   // ✅ Validation
//   if (!title || !description) {
//     return res.status(400).json({
//       error: "Title and description are required",
//     });
//   }

//   try {
//     const note = new Note({ title, description });
//     await note.save();
//     res.json({ message: "Note created" });
//   } catch (err) {
//     next(err);
//   }
// };

// // UPDATE note (VALIDATION HERE)
// exports.updateNote = async (req, res, next) => {
//   const { title, description } = req.body;

//   // ✅ Validation
//   if (!title || !description) {
//     return res.status(400).json({
//       error: "Title and description are required",
//     });
//   }

//   try {
//     await Note.findByIdAndUpdate(req.params.id, {
//       title,
//       description,
//     });
//     res.json({ message: "Note updated" });
//   } catch (err) {
//     next(err);
//   }
// };

// // DELETE note
// exports.deleteNote = async (req, res, next) => {
//   try {
//     await Note.findByIdAndDelete(req.params.id);
//     res.json({ message: "Note deleted" });
//   } catch (err) {
//     next(err);
//   }
// };

// Update Controller to Use req.userId
// const Note = require("../models/Note");

// // GET notes for logged-in user
// exports.getNotes = async (req, res, next) => {
//   try {
//     const notes = await Note.find({ userId: req.userId });
//     res.json(notes);
//   } catch (err) {
//     next(err);
//   }
// };

// // CREATE note for logged-in user
// exports.createNote = async (req, res, next) => {
//   const { title, description } = req.body;

//   // Basic validation
//   if (!title || !description) {
//     return res.status(400).json({
//       error: "Title and description are required",
//     });
//   }

//   try {
//     const note = new Note({
//       title,
//       description,
//       userId: req.userId, // IMPORTANT — attach ownership
//     });

//     await note.save();

//     res.json({ message: "Note created" });
//   } catch (err) {
//     next(err);
//   }
// };

// // UPDATE note (only user's own note)
// exports.updateNote = async (req, res, next) => {
//   const { title, description } = req.body;

//   // Validation
//   if (!title || !description) {
//     return res.status(400).json({
//       error: "Title and description are required",
//     });
//   }

//   try {
//     // Only update note that belongs to the logged-in user
//     const updated = await Note.findOneAndUpdate(
//       { _id: req.params.id, userId: req.userId },
//       { title, description }
//     );

//     if (!updated) {
//       return res.status(403).json({
//         error: "Not allowed to update this note",
//       });
//     }

//     res.json({ message: "Note updated" });
//   } catch (err) {
//     next(err);
//   }
// };

// // DELETE note (only user's own note)
// exports.deleteNote = async (req, res, next) => {
//   try {
//     const deleted = await Note.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.userId,
//     });

//     if (!deleted) {
//       return res.status(403).json({
//         error: "Not allowed to delete this note",
//       });
//     }

//     res.json({ message: "Note deleted" });
//   } catch (err) {
//     next(err);
//   }
// };

const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.userId });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const note = await Note.create({
    title: req.body.title,
    description: req.body.description,
    user: req.userId,
  });
  res.json(note);
};

exports.updateNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ error: "Note not found" });

  note.title = req.body.title;
  note.description = req.body.description;
  await note.save();

  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};
