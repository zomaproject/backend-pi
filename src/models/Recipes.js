import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";
const recipeSchema = (sequelize) => {
	sequelize.define("Recipes", {
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		summary: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		healthScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		instructions: {
			type:  Sequelize.ARRAY(Sequelize.TEXT) ,
			allowNull: false,
		},

		image: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue:
				"https://img.wattpad.com/67e7483d3ebdc5890fc9f191a138cdf9e8c2290e/687474703a2f2f7669676e65747465312e77696b69612e6e6f636f6f6b69652e6e65742f73686f6b7567656b696e6f736f6d612f696d616765732f382f38332f436861725f4f6b616b696167655f28616e696d65292e706e67?s=fit&h=360&w=360&q=80",
		},
	});
};

export default recipeSchema;
