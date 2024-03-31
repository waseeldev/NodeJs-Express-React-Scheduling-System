const Schedule = require('../models/Schedule');
const { Employee } = require('../models/index');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getSchedulesByEmployeeId = async (req, res) => {
  const { employeeId } = req.params;
  try {
    const employeeSchedules = await Schedule.findAll({ 
      where: { employeeId },
      include: [{ model: Employee, attributes: ['name'] }] // Include Employee model and specify attributes to retrieve
    });
    res.json(employeeSchedules);
  } catch (error) {
    console.error('Error fetching schedules by employee ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};