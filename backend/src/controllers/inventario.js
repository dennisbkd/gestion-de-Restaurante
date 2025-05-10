export class InventarioController {
  get = async (req, res) => {
    const { filter } = req.query
    const inventario = await InventarioModel.getAll({ filter })

    res.json(inventario)
  }
}
// localhost:3000/inventario/filter=?
