'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

      */
   return queryInterface.bulkInsert('Notebooks', [{
        userId:1,
        title:"Module 1",

      },{
        userId:1,
        title:"Recipe Book",

      },{
        userId:1,
        title:"Diary",

      },{
        userId:1,
        title:"Random Thoughts",

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
