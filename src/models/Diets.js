import { DataTypes } from "sequelize"

const typesSchema = (sequelize) => {
  sequelize.define('Diets', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}


export default typesSchema