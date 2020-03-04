const db = require("../data/config");

function find() {
  return db("schemes");
}

// SQL > function findById(id)
// SELECT steps.id, schemes.scheme_name, steps.step_number, steps.instructions
// FROM schemes 
// JOIN steps 
// ON steps.scheme_id = schemes.id
// ORDER BY schemes.scheme_name, steps.step_number;
function findById(id) {
  return db("schemes")
    .where({ id: id })
    .first()
    .then(scheme => {
      return scheme || null;
    });
}

// SQL > function findSteps(id)
// SELECT steps.id, schemes.scheme_name, steps.step_number, steps.instructions
// FROM schemes 
// JOIN steps 
// ON steps.scheme_id = schemes.id
// WHERE schemes.id = 2
// ORDER BY schemes.scheme_name, steps.step_number;
function findSteps(id) {
    return db("schemes")
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")    
        .join("steps", "steps.scheme_id", "=", "schemes.id" )
        .where("schemes.id", id)
        .orderBy("steps.step_number")
        .then(table => table || null)
}


// SQL > function add()

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .then(ids => {
            return findById(ids[0])
        })
}

function update(changes, id) {
    return db("schemes")
        .where("schemes.id", id)
        .update(changes)
        .then(ids => {
            if(ids > 0) return findById(id)
            else return null
        })
}

function remove(id) {
    return db("schemes")
        .where("schemes.id", id)
        .del()
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
