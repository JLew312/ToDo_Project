'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'todoitems'

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
   await queryInterface.bulkInsert(options,
    [
      {
        title: 'To-Do Item #1',
        startTime: new Date(2023, 9, 25, 0, 30, 0),
        endTime: new Date(2023, 9, 25, 9, 0, 0),
        where: '',
        repeat: 3000,
        reminder: 3000,
        notes: '',
        completed: false
      },
      {
        title: 'To-Do Item #2',
        startTime: new Date(2023, 1, 19, 11, 30, 0),
        endTime: new Date(2023, 1, 20, 7, 0, 0),
        where: '',
        repeat: 1000,
        reminder: 4000,
        notes: '',
        completed: true
      },
      {
        title: 'To-Do Item #3',
        startTime: new Date(2024, 11, 31, 3, 30, 0),
        endTime: new Date(2024, 11, 31, 4, 0, 0),
        where: '',
        repeat: 5000,
        reminder: 3000,
        notes: '',
        completed: false
      },
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options, {
      id: [28, 29, 30]
    })
  }
};
