const express = require('express');
const router = express.Router();
const { getAllEmployees } = require('../controllers/employeeController');
const { getSchedulesByEmployeeId } = require('../controllers/scheduleController');

router.get('/' ,getAllEmployees);
router.get('/:employeeId/schedules', getSchedulesByEmployeeId);
module.exports = router;
