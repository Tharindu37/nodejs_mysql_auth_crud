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
   return queryInterface.bulkInsert('addresses',[
    {
      userId:1,
      address:'No 34 Galgamuwa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId:2,
      address:'No 54 Meegalewa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId:3,
      address:'No 04 Kurunegala',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId:4,
      address:'No 123 Galle',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('addresses', {}, null)
  }
};
