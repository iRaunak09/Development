const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public")));
app.set("viewengine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req,res) => {
  res.send("This is the root directory");
})

app.get("/dice", (req,res) => {
  let num = (Math.floor(Math.random() * 6) + 1);
  res.render("dice.ejs", {n : num});
});

app.get("/ig/:username", (req, res) => {
  let {username} = req.params;
  const instaData = require("./data.json");
  let data = instaData[username];
  // res.send(username);
  if(data){
    res.render("instagram.ejs", {data});
  }else {
    res.render("error.ejs");
  }

});