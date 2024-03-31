'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Employees', [{
      name: 'Rahul',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Yadwinder',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Suresh',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ramesh',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hitesh',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Mohan',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sohan',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kamlesh',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ram',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rahim',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sahil',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pooja',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Julia',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rosey',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Monica',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Leena',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rajat',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Mital',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
