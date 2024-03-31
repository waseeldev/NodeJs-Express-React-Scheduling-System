const express = require('express');
const router = express.Router();
const { createSchedule, getAllSchedules, getScheduleById, deleteScheduleById } = require('../controllers/scheduleController');
const { validateCreateSchedule } = require('../middlewares/validateScheduleCreate');

router.post('/',validateCreateSchedule, createSchedule);
router.get('/', getAllSchedules);
router.get('/:id', getScheduleById);
// router.get('/schedules/employee/:employeeId', scheduleController.getSchedulesByEmployeeId);
router.delete('/:id', deleteScheduleById);

module.exports = router;
