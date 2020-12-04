
const { create } = require("./models/Robot");
const RobotModel = require("./models/Robot");

// RobotModel.create({
//   chip: "XB-ALPHA-QUATRON",
//   name: "B0B",
//   price: 1000000 ,
//   speechEnabled: true,
//   features: ["GPS", "close combat", "flight"],
// }).then(res => {
//     console.log(res);
// })

// async function createRobot() {
//   const newRobot = await RobotModel.create({
//     chip: "QRR-3X",
//     name: "Jane",
//     price: 200,
//     speechEnabled: false,
//     features: ["nice colors"],
//   });

//   return newRobot;
// }

// const x = createRobot();
// console.log(x);

// const start = async () => {
//   const x = await createRobot();
//   console.log(x);
// };

// start();

// RobotModel.create(
//   {
//     chip: "XB-ALPHA-QUATRON",
//     name: "JACK",
//     price: 1000000,
//     speechEnabled: false,
//     features: ["GPS"],
//   },
//   (err, newRobot) => {
//     // call arg 1 is error, arg 2 is the create document
//     console.log(newRobot);
//   }
// );
