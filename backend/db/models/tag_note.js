'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag_Note = sequelize.define('Tag_Note', {
    noteId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Tag_Note.associate = function(models) {
    // associations can be defined here
  };
  return Tag_Note;
};