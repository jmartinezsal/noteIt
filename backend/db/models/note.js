'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notebookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    header: {
    type: DataTypes.STRING,
      validate: {
        len: [4, 30],
      }
    },
    content: {
      type: DataTypes.TEXT,
    },
    trashed: {
      type: DataTypes.BOOLEAN
    }
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
    Note.belongsTo(models.User, {foreignKey: "userId"});
    Note.belongsTo(models.Notebook, {foreignKey: "notebookId"});
  };
  return Note;
};
