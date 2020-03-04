const db = require("../data/config");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id: id })
    .first()
    .then(scheme => {
      return scheme || null;
    });
}

function findSteps(id) {}

function add(scheme) {}

function update(changes, id) {}

function remove(id) {}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
