const express = require("express");
const app = express();
let port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/register", (req,res) => {
    let {user,password} = req.query;
    res.send("Standard GET response " + user + " "+ password);
});

app.post("/register", (req,res) => {
    let {user,password} = req.body;
    res.send("Standard POST response " + user + " "+ password);
});