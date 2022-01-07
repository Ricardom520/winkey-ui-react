export const HandleNextNodeId = (index: number, nodes, way: boolean) => {
  for (let i = index; i < nodes.length; i++) {
    const old_id = nodes[i].id
    const _paths = old_id.split('_')
    const len = _paths.length
    const value = parseInt(_paths[len - 1])
    _paths[len - 1] = `${way ? value + 1 : value - 1}`
    nodes[i].id = _paths.join('_')
  }
}