import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {

    const a = 8;
    const b = 10;
    const result = sum(a,b);
    res.send(`Result: ${result}` );
});


function sum (a,b) {
    const result = a + b;
    return result;
}

app.listen(3030, () => {
    console.log("API STARTED !!")
});