const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// app.use((req, res) => {
//     // console.log("new incoming request");
//     console.log("new incoming request to:", req.url);
//     res.send("This response is related to page ");
// });

// app.get("/apple",(req, res) => {
//     console.log("new incoming request");
//     res.send("This response is related to page apple info");
// });

app.get("/", (req, res) => {
    res.send("This is the root directory");
}); 

// app.get("/:username", (req, res) => {
//     let {username} = req.params;
//     console.log(req.params);
//     res.send(`Welocme to ${username} page`);
// });

app.get("/:search", (req, res) => {
    let {search} = req.params;
    let {q} = req.query;
    res.send(`Welocme to ${search} page searching for ${q}`);
});


// app.get("/*n",(req, res) => {
//     console.log("new incoming request");
//     res.send("This response is related to page apple info");
// });
