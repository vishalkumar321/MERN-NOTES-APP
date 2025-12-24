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
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Note", noteSchema);
