const users = ["jill", "bill", "will"];

const users2 = ["ed", "fred", "medh"];

function privateLogic() {}

function publicLogic(val) {
  return typeof val;
}

// this is the way to export values in the node environment
module.exports = {
  users,
  users2,
  publicLogic,
};

// exports = users;
