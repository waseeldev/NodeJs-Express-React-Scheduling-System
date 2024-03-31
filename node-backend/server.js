const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models/index');
const userRoutes = require('./routes/userRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const verifyToken = require('./middlewares/verifyToken'); // Import the token verification middleware
const validateJson = require('./middlewares/validateJson');

require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
// const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

app.use(express.json());
app.use(cors());
app.use(validateJson);
// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect: DB_DIALECT,
// });
app.use((req, res, next) => {
  if (req.path === '/api/users/login' || req.path.startsWith('/public/')) {
    next(); // Skip token verification for /api/users/login and /public/ routes
  } else {
    verifyToken(req, res, next); // Apply token verification middleware to other routes
  }
});
app.use('/api/users', userRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/employees', employeeRoutes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
