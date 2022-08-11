"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "devops",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "frontend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
