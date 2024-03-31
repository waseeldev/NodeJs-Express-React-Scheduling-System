function validatePostLoginInput(req, res, next) {
    const { username, password } = req.body;
    console.log("here in  middleware");
    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    // Check if username is a string
    if (typeof username !== 'string' || username.trim() === '') {
      return res.status(400).json({ message: 'Invalid username' });
    }
  
    // Check if password is a string and has at least 6 characters
    if (typeof password !== 'string' || password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
  
    // Move to the next middleware/route handler if input is valid
    next();
  }

  module.exports = { validatePostLoginInput };