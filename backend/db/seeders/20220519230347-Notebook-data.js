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
        tag:["App Academy", "Module 1", "School"],
      },{
        userId:1,
        title:"Recipe Book",
        tag:["Recipes", "Fun"],
      },{
        userId:2,
        title:"Diary",
        tag:["Diary", "Personal"],
      },{
        userId:3,
        title:"Random thoughts of the day",
        tag:["Personal", "Random"]
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
