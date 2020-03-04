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

function findSteps(id) {
    return db("schemes")
        .join("steps", "schemes.id", "steps.scheme_id")
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
        .where("schemes.id", id)
        .orderBy("steps.step_number")
        .then(table => table || null)
}

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .then(ids => {
            return findById(ids[0])
        })
}

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
