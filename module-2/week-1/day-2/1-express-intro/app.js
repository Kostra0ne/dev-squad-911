// LET IT GOOOOO, LET IT GOOOO (new concepts, new syntaxes, you'll get used to it ;)

// 1 - INITILIZATION
const express = require("express"); // returns a function
const app = express(); // execute the function and fetch the app as a return value

// here, i'm creating the first route for our express application
// a route is a path, defined server-side, accessible for client to GET some infos out of the server:
// what can you get ? html page, images, vidéos, database results, text files, json objects....

// console.log(">>> what is dirname ?", __dirname);
// constant : represents the absolute path of the directory hosting the current file

// 2 - ROUTING

app.get("/", (request, response) => {
  // slash here represente the server's domain root
  // request object representes the incoming query (from the client)
  // response object represents the output: the response sent back to the client (browser)
  response.sendFile(__dirname + "/views/index.html");
  //   response.sendFile(__dirname + "/foo/bar/baz/toto.html");
});

app.get("/about", (req, res) => {
  //   res.send("this is a page about my start-up");
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/users", (req, res) => {
  const users = ["jill", "will", "bill"];
  res.json(users);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});

// 3 - KICKSTART THE SERVER

// your app MUST listen to a HTTP PORT (a number) to start
// EXPRESS IS A WEB SERVER => IT KNOWS THE HTTP PROTOCOL
// SO ... IT IS ABLE TO LISTEN TO PORT => ALLOW CLIENTS TO ACCESS THE SERVER
app.listen(3000, () => {
  console.log("server is ready to rock ! : http://localhost:4000");
  //   console.log("server is ready to rock ! : http://choubidowah.com");
});
