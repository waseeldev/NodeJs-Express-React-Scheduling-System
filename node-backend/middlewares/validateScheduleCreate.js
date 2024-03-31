// middleware/requestValidation.js

const validateCreateSchedule = (req, res, next) => {
    const schedulesData = req.body;
    if (!Array.isArray(schedulesData)) {
      return res.status(400).json({ message: 'Request body must be an array' });
    }
    
    const currentDate = new Date();
  
    for (const schedule of schedulesData) {
      // Validate employeeId
      if (!schedule.employeeId) {
        return res.status(400).json({ message: 'Invalid schedule data: employeeId is required' });
      }
  
      // Validate date (future-only)
      const scheduleDate = new Date(schedule.date);
      if (!(scheduleDate instanceof Date && !isNaN(scheduleDate) && scheduleDate > currentDate)) {
        return res.status(400).json({ message: `Invalid schedule data: ${scheduleDate} date must be a future date` });
      }
  
      // Validate time
      const scheduleTime = new Date(`January 1, 1970 ${schedule.time}`);
      if (!(scheduleTime instanceof Date && !isNaN(scheduleTime))) {
        return res.status(400).json({ message: `Invalid schedule data: ${scheduleTime} time must be a valid time` });
      }
  
      // Validate comment length (200 characters only)
      if (typeof schedule.comment !== 'string' || schedule.comment.length > 200) {
        return res.status(400).json({ message: `Invalid schedule data: ${schedule.comment} comment must be a string with maximum 200 characters` });
      }
    }
    
    next();
  };
  
  module.exports = {
    validateCreateSchedule,
  };
  