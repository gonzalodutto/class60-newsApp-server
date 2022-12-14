"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.belongsTo(models.category);
      article.hasMany(models.comment);
    }
  }
  article.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      content: DataTypes.STRING,
      publishDate: DataTypes.DATE,
      imageUrl: DataTypes.STRING,
      unixTimeStamp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "article",
    }
  );
  return article;
};
