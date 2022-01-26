import express, { urlencoded } from "express";

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use((req, res, next) => {
    console.log("<h1>HEEELLLLOOO</h1>")
    next();
})

app.get('/profile', (req, res) => {
    res.send ("getting profile");
});

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send ("success");
});

app.get('/', (req,res) => {
    res.send("<h1>USER PROFILE</h1>")
});

app.listen(3000);