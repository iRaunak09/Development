const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.use("/apple",(req, res) => {
    // console.log("new incoming request");
    console.log("new incoming request to:", req.url);
    res.send("This response is related to page ");
});