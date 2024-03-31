const Employee = require('../models/Employee');
const { Schedule, sequelize } = require('../models/index');

// Controller to create schedule(s)
exports.createSchedule = async (req, res) => {
  const schedulesData = Array.isArray(req.body) ? req.body : [req.body];
  try {
    const schedules = await Schedule.bulkCreate(schedulesData);
    res.status(201).json(schedules);
  } catch (error) {
    console.error('Error creating schedules:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get all schedules
exports.getAllSchedules = async (req, res) => {
  try {
    const allSchedules = await Schedule.findAll({
      include :{
        model : sequelize.model('Employee'),
        attributes: ['name'],
      }
    });
    res.json(allSchedules);
  } catch (error) {
    console.error('Error fetching all schedules:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get schedules by ID
exports.getScheduleById = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findByPk(id,{include :{
      model : sequelize.model('Employee'),
      attributes: ['name'],
    }});
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.json(schedule);
  } catch (error) {
    console.error('Error fetching schedule by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get schedules by employee ID
exports.getSchedulesByEmployeeId = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const employeeSchedules = await Schedule.findAll({ where: { employeeId } });
    res.json(employeeSchedules);
  } catch (error) {
    console.error('Error fetching schedules by employee ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to delete schedule by ID
exports.deleteScheduleById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedScheduleCount = await Schedule.destroy({ where: { id } });
    if (deletedScheduleCount === 0) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};