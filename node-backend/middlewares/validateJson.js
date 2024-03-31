function validateJson(req, res, next) {
    // Check if the request method is GET
    if (req.method === 'GET' || req.method === 'DELETE') {
      // If it's a GET request, move to the next middleware/route handler
      return next();
    }
  
    // Check if the Content-Type header is set to application/json
    if (req.get('Content-Type') !== 'application/json') {
      return res.status(400).json({ message: 'Content-Type must be application/json' });
    }
  
    // Check if the request body is valid JSON
    try {
      JSON.parse(JSON.stringify(req.body));
      next(); // Move to the next middleware/route handler
    } catch (error) {
      return res.status(400).json({ message: 'Invalid JSON format' });
    }
  }
  
  module.exports = validateJson;
  