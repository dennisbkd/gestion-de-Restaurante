import Sequelize from 'sequelize'

export const sequelize = new Sequelize('Restaurante', 'root', 'root', {
  host: 3000,
  dialect: 'mysql'
})
