const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from my first node ladsf");
});

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Leanne Grgfdfghaham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Leanne Grgfdfghaham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Leanne Grgfdfghaham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Leanne Grgfdfghaham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Leanne Grgfdfghaham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
];
app.get("/user", (req, res) => {
  const searchTerm = req.query.search;
  if (searchTerm) {
    const user = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    res.send(user);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
  //   console.log(req.params.id);
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("Hitting the post", req.body);
  res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.listen(port, () => {
  console.log("listening port from", port);
});
