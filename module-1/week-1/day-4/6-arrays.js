const users = ["jill", "will", "bill", "jack", "tom", "john", "kim", "kill"]; // (l=8)
// indexes       0        1       2       3      4      5       6      7

const numbers = [100, 2.2, 42, 123, 100000, 200.2];

// console.log(users.length);
// console.log("-------");

// users.push("brian");
// users.push("johnny");

// users.unshift("hakim");
// users.shift();
// users.unshift("toto");
// users.pop();

// users.splice(2, 3);

// console.log(users);
// console.log(users[users.length - 1]);

// console.log( users[0] );

for (let i = 0; i < users.length; i += 1) {
  console.log(i);
  console.log(users[i]);
}

const booleans = [true, false, false, true, false];

for (let i = 0; i < booleans.length; i++) {
  console.log(booleans[i]);
}

/*

    USEFULL ARRAY METHODS
    ---------------------
    push	Adds a value at the end
    unshift	Adds a value at the beginning
    shift	Removes the first element
    pop 	Removes the last element
    splice	Removes elements from anywhere in the array
*/

//
const users2 = users;
const users2Real = [...users];

// users2.push("gui");

users2Real.push("gui");

// console.log(users);

// console.log(users2Real);

const copyOfNumbers = [...numbers];

// Copy an array with the spread operator
