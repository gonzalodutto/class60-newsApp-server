"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          // id: 1,
          title: "AWS 101",
          author: "Wei-Chi Chou",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          // categoryId: "devops",
          unixTimeStamp: 1588636800,
          publishDate: "Tuesday, 05 May 2020",
          imageUrl:
            "https://miro.medium.com/max/4000/1*b_al7C5p26tbZG4sy-CWqw.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 2,
          title: "jQuery, still worth it?",
          author: "Alastair Haigh",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          // categoryId: "frontend",
          unixTimeStamp: 1588723200,
          publishDate: "Wednesday, 06 May 2020",
          imageUrl:
            "https://yootheme.com/site/images/blog/2010/warp_zoo_and_jquery.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 3,
          title: "Svelte, it's fast",
          author: "Mario Nezmah",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          // categoryId: "frontend",
          unixTimeStamp: 1588896000,
          publishDate: "Friday, 08 May 2020",
          imageUrl:
            "https://avatars3.githubusercontent.com/u/23617963?s=280&v=4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 4,
          title: "Trying Docker",
          author: "Simona Winnekes",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          // categoryId: "devops",
          unixTimeStamp: 1589068800,
          publishDate: "Sunday, 10 May 2020",
          imageUrl:
            "https://blog.xebialabs.com/wp-content/uploads/2019/05/docker-e1558536954364.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 5,
          title: "Deno 1.0 is Here",
          author: "Manon Bosselut",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          // categoryId: "backend",
          unixTimeStamp: 1588982400,
          publishDate: "Saturday, 09 May 2020",
          imageUrl: "https://flaviocopes.com/deno/denologo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 6,
          title: "What is new in Java 14",
          author: "Manon Bosselut",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          // categoryId: "backend",
          unixTimeStamp: 1588809600,
          publishDate: "Thursday, 07 May 2020",
          imageUrl:
            "https://cdn.journaldev.com/wp-content/uploads/2020/03/java-14-features.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("articles", null, {});
  },
};
