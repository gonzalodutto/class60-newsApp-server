"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          // id: 1,
          name: "Danny v der Jagt",
          comment: "The whale looks so friendly",
          // articleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 2,
          name: "Danny v der Jagt",
          comment: "Some good people are trying this already",
          // articleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 3,
          name: "Rein Op 't Bla",
          comment: "A tool from a more civilized age",
          // articleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 4,
          name: "Rein Op 't Bla",
          comment: "Svelte, so fasionable right now",
          // articleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 5,
          name: "Wouter de Vos",
          comment: "Docker is good!",
          // articleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 6,
          name: "Wouter de Vos",
          comment: "AWSome!",
          // articleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
