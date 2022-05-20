'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    userId: DataTypes.INTEGER,
    tagName: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsToMany(models.Note, {
      through: 'tag_note',
      otherKey: 'noteId',
      foreignKey: 'tagId'
    })
    Tag.belongsTo(models.User,{foreignKey:"userId"})
  };
  return Tag;
};
