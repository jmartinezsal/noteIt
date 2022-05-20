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
        tags:["App Academy", "Module 1", "School"],
      },{
        userId:1,
        title:"Recipe Book",
        tags:["Recipes", "Fun"],
      },{
        userId:2,
        title:"Diary",
        tags:["Diary", "Personal"],
      },{
        userId:3,
        title:"Random thoughts of the day",
        tags:["Personal", "Random"]
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
