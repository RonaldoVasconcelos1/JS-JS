import express from 'express';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    throw new Error("Erro message Teste");
});

app.post("/", async(req, res, next) => {
    try {
        
        throw new Error("Erro message");
    }catch (err) {
        next(err);
    }

}) 

app.use((err, req, res, next) =>{
    console.log("erro 1");
    next(err);
});

app.use((err, req, res, next) =>{
    console.log("Erro 2");
    res.status(500).send("Error 2");
})

app.listen(3030, () => {
    console.log("UHUU");
});