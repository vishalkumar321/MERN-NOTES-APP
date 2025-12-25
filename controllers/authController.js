// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // SIGNUP
// exports.signup = async (req, res, next) => {
//   const { username, password } = req.body;

//   // Validation
//   if (!username || !password) {
//     return res.status(400).json({ error: "Username and password required" });
//   }

//   try {
//     // Check existing user
//     const existing = await User.findOne({ username });
//     if (existing) {
//       return res.status(400).json({ error: "Username already taken" });
//     }

//     // Hash password
//     const hashedPass = await bcrypt.hash(password, 10);

//     // Create user
//     const user = new User({ username, password: hashedPass });
//     await user.save();

//     res.json({ message: "Signup successful" });
//   } catch (err) {
//     next(err);
//   }
// };

// // LOGIN
// exports.login = async (req, res, next) => {
//   const { username, password } = req.body;

//   // Validation
//   if (!username || !password) {
//     return res.status(400).json({ error: "Username and password required" });
//   }

//   try {
//     // Check user exists
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid username or password" });
//     }

//     // Compare password
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(400).json({ error: "Invalid username or password" });
//     }

//     // Generate token
//     const token = jwt.sign({ userId: user._id }, "SECRET123", {
//       expiresIn: "7d",
//     });

//     res.json({ message: "Login successful", token });
//   } catch (err) {
//     next(err);
//   }
// };

// ADDING .ENV
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// exports.signup = async (req, res, next) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(400).json({ error: "Username and password required" });
//   }

//   try {
//     const existing = await User.findOne({ username });
//     if (existing) {
//       return res.status(400).json({ error: "Username already exists" });
//     }

//     const hashed = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashed });
//     await user.save();

//     res.json({ message: "Signup successful" });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.login = async (req, res, next) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET, // 🔑 FROM ENV
//       { expiresIn: "7d" }
//     );

//     res.json({ token });
//   } catch (err) {
//     next(err);
//   }
// };

// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.status(400).json({ error: "Email & password required" });

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ error: "Email already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();

//     res.json({ message: "Signup successful" });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.status(400).json({ error: "Email & password required" });

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "Invalid credentials" });

//     const valid = await bcrypt.compare(password, user.password);
//     if (!valid) return res.status(400).json({ error: "Invalid credentials" });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email & password required" });

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ error: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: hashed });

  res.json({ message: "Signup successful", userId: user._id });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email & password required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const correct = await bcrypt.compare(password, user.password);
  if (!correct) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token });
};
