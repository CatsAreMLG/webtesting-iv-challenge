const db = require('../../dbConfig')

module.exports = {
  getAll,
  findCharacter,
  insert
}

function getAll() {
  return db('characters')
}
function findCharacter(body) {
  return db('characters')
    .where({ name: body.name })
    .first()
}
function insert(body) {
  return db('characters')
    .insert(body)
    .then(ids => ids[0])
}
