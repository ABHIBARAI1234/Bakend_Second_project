import dotenv from "dotenv";
import express from "express";

dotenv.config();


const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/twitter", (req, res) => {
    res.send("Twitter page");
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:3000 ${port}`);
});