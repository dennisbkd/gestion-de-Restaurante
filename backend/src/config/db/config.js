import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('Restaurante', 'sa', '1414', {
  host: '127.0.0.1',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      instanceName: 'SQLEXPRESS'
    }
  }
})

export default sequelize
