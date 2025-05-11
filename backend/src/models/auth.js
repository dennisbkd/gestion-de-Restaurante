import sequelize from '../config/db/config.js'
import bcrypt from 'bcrypt'

import { definicionUsuario } from '../services/user.js'

export class ModeloAuth {
  static Usuario = sequelize.define('Usuario', definicionUsuario, {
    timestamps: false,
    freezeTableName: true
  })

  static async login ({ input }) {
    const { nombreUsuario, password } = input.data
    try {
      const buscarUsuario = await this.Usuario.findOne({
        where: { nombreUsuario }
      })
      if (!buscarUsuario) return { error: 'Usuario no encontrado' }
      const verificarPassword = bcrypt.compare(password, buscarUsuario.password)
      if (!verificarPassword) return { error: 'Password incorrecto' }
      return {
        user: {
          nombreUsuario: buscarUsuario.nombreUsuario,
          password: buscarUsuario.correo,
          rol: buscarUsuario.idRol
        }
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
