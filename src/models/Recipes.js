import { DataTypes } from "sequelize"

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
    resume: {
      type: DataTypes.STRING,
      allowNull: false
    },
    heathScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}

export default recipeSchema