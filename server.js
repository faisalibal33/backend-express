import express from "express";

const app = express();
console.log("26")

app.get('/', (req, res) => {
    const user = {
        name : "faisal",
        hobby : "music",
    }
    res.send (user);
});

app.get('/profile', (req,res) => {
    res.send("ini profil saya")
});

app.listen(3000);