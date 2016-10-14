'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Posts', [{
        name: 'Test Post from database',
        content: 'Post content from postgres',
        createdAt: '2016-10-14T20:31:40.000Z',
        updatedAt: '2016-10-14T20:31:40.000Z'
      }], {});
  },
  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Posts', null, {});
  }
};
