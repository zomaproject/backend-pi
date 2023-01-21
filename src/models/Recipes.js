import { DataTypes } from "sequelize"
import { Sequelize } from "sequelize"
const recipeSchema =  (sequelize) => {
  sequelize.define('Recipes', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    analyzedInstructions:{
    type:  Sequelize.ARRAY(Sequelize.TEXT) ,
      allowNull: false
    },
   
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}

export default recipeSchema