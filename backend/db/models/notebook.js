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
          len: [4, 30],
        }
      },
    tags: {
     type: DataTypes.ARRAY(DataTypes.STRING),
    },
    trashed: {
      type: DataTypes.BOOLEAN
    }
  }, {});
  Notebook.associate = function(models) {
    // associations can be defined here
    Notebook.belongsTo(models.User, {foreignKey: "userId"});
  };
  return Notebook;
};
