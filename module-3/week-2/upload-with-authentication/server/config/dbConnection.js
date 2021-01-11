const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(`Connected to ${x.connection.name}`);
  })
  .catch((error) => {
    console.log("Failed to connect to the Database");
    console.log(error);
  });
