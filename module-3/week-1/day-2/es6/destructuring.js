//Destructuring objects

const student = {
  name: "Tom",
  age: 10,
};

const { age, name, lastName } = student;
console.log(name, age, lastName);

function displayStudent({ name, age }) {
  //   const { name, age } = object;
  console.log(`The student's name is: ${name} and the student age is ${age}`);
}

displayStudent(student);

//Destructuring arrays

const students = ["Jimmy", "Jane", "John"];

const [eoefahouehfouahfuaihfoiuea, second, third, fourth] = students;

console.log(eoefahouehfouahfuaihfoiuea, second, third, fourth);
