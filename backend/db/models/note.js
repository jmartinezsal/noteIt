'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {

    notebookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
    type: DataTypes.STRING,
      validate: {
        len: [1,255],
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
    Note.belongsTo(models.Notebook, {foreignKey: "notebookId"});
    Note.hasOne(models.Favorite, { foreignKey: "noteId" });
    Note.belongsToMany(models.Tag, {
      through: 'tag_note',
      otherKey: 'tagId',
      foreignKey: 'noteId'
    })

  };
  return Note;
};
