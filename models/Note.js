// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Note", noteSchema);

// UPDATE NOTES TO BELONG TO A USER
// const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// module.exports = mongoose.model("Note", noteSchema);

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
