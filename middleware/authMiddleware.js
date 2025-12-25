// const jwt = require("jsonwebtoken");

// function authMiddleware(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ error: "Token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, "SECRET123");
//     req.userId = decoded.userId; // store user ID for later use
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid token" });
//   }
// }

// module.exports = authMiddleware;

// UPDATED AUTH MIDDLEWARE

// const jwt = require("jsonwebtoken");

// function authMiddleware(req, res, next) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ error: "Token missing" });
//   }

//   // Expect: "Bearer token"
//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.userId;
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid token" });
//   }
// }

// module.exports = authMiddleware;

// const jwt = require("jsonwebtoken");

// function authMiddleware(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ error: "Token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || "SECRET123");
//     req.userId = decoded.userId;
//     next();
//   } catch {
//     return res.status(401).json({ error: "Invalid token" });
//   }
// }

// module.exports = authMiddleware;

const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = authMiddleware;
