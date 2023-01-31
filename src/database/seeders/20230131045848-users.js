'use strict';

// @type {import('sequelize-cli').Migration} 
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      user_name: 'fede',
      user_password: 'pass',
      user_role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede2',
      user_password: 'pass2',
      user_role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede3',
      user_password: 'pass3',
      user_role: 'superadmin',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede4',
      user_password: 'pass4',
      user_role: 'user',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede5',
      user_password: 'pass5',
      user_role: 'admin',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede6',
      user_password: 'pass6',
      user_role: 'user',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede7',
      user_password: 'pass7',
      user_role: 'guest',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede8',
      user_password: 'pass8',
      user_role: 'user',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede9',
      user_password: 'pass9',
      user_role: 'admin',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede10',
      user_password: 'pass10',
      user_role: 'user',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_name: 'fede11',
      user_password: 'pass11',
      user_role: 'admin',
    createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{});

  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
