const user1 = { name: "gui", age: 40, mail: "gui@gui.gui" };
const user2 = { name: "etouma", age: null, mail: "etouma@ironhack.com" };

// const name = user.name;
// const age = user.age;

const { name: firstname, mail } = user1;

// console.log(firstname, mail);

// function displayUserInfos(user) {
//   return user.name + " " + user.mail;
// }

function displayUserInfos({ name, mail }) {
  return name + " : " + mail;
}

console.log(displayUserInfos(user1));
console.log(displayUserInfos(user2));

const numbers = [1000, 33, 44, 33, 1000];
const numbers2 = [1, 2, 3, 4, 5, 6];

const [etouma, , toto, , fifth, nothere] = numbers;
const [,, ...rest] = numbers2;
// const etouma = numbers[0];
// const third = numbers[2];
// const fifth = numbers[4];

// console.log(one, third, fifth);

console.log(rest);
