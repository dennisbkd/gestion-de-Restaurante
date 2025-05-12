import { ValidacionDatosUsuario } from '../utils/validacionDatosUsuario.js'

export class ControladorAuth {
  constructor ({ modeloAuth }) {
    this.ModeloAuth = modeloAuth
  }

  login = async (req, res) => {
    const resultado = ValidacionDatosUsuario.loginUser(req.body)
    if (!resultado.success) return res.status(401).json({ error: resultado.message })
    const usuario = await this.ModeloAuth.login({ input: resultado })
    if (!usuario) return res.status(401).json({ eror: usuario.error })
    return res.status(201).json(usuario.user)
  }
}
