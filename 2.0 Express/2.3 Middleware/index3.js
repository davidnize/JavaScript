import express from "express";

const app = express();
const port = 3000;

app.use(logger);

function logger(Req, res, next){
    console.log("Request Method:", Req.method)
    console.log ("Request URL:", Req.url)
    next();
  }

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
