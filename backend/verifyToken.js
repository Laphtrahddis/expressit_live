const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // Get token from Authorization header
  if (!token) {
    return res.status(401).json("You are not authenticated!"); // If no token, return 401 Unauthorized
  }

  jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
    if (err) {
      return res.status(403).json("Token is not valid!"); // If token is invalid, return 403 Forbidden
    }
    req.userId = decoded.id; // Save user ID from token to request object
    // console.log("passed")
    next();
  });
}

module.exports = verifyToken; // Export the middleware function
// This middleware function verifies the JWT token sent in the request cookies. It checks if the token is present and valid, and if so, it extracts the user ID from the token and attaches it to the request object for further processing in the route handlers. If the token is missing or invalid, it sends an appropriate error response.