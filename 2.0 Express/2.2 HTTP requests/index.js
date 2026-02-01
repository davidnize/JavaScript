import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Home Page</h1><h2>David</h2>");
    
});

app.get("/About", (req, res) =>{
    res.send("<h2>About me</h2>");
    
});
app.get("/Contact", (req, res) =>{
    res.send("<h3>Contact me</h3>");
    
});
 
app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})
