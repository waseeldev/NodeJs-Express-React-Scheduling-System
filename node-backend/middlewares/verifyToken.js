const jwt = require('jsonwebtoken');

// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {
  // Get token from headers
  const authHeader = req.headers['authorization'];

  // Check if token exists
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Split the authorization header to get the token
  const tokenParts = authHeader.split(' ');

  // Check if the token is in the correct format
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Invalid token format' });
  }

  const token = tokenParts[1]; // Extract the token

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err); // Log the error for debugging
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId; // Add userId to request object
    next(); // Call next middleware
  });
};

module.exports = verifyToken;
