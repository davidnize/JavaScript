import express from "express";
import ejs from "ejs";

const app = express();
const port = "3000";

app.use((req, res, next) => {
    const getDay = new Date().getDay(); 
    
    if ([1, 2, 3, 4, 5].includes(getDay)) {
        res.send("Hey! It's a weekday, it's time to work hard!");
    } else {
        res.send("Hey! It's the weekend, it's time to have fun!");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});