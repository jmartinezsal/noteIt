'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId:   {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
        validate: {
          len: [1, 255],
        }
      },
    trashed: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {});
  Notebook.associate = function(models) {
    // associations can be defined here
    Notebook.belongsTo(models.User, {foreignKey: "userId"});
    Notebook.hasMany(models.Note, {foreignKey:"notebookId"})
  };
  return Notebook;
};
