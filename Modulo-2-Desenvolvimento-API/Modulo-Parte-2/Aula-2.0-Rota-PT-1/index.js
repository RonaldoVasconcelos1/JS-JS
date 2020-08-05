import express from "express";

const app = express();
app.use(express.json())

// all metodos , recebe qualquer metodo de HTTP
app.all("/testeAll", (req, res) => {
    res.send(req.method);
});

//caracteres especiais
app.post("/teste?", (req, res) => {
    res.send("/Teste?");
});

app.get("/buzz+", (req, res) => {
    res.send("/buzz+")
});

app.get("/one*blue", (req, res) => {
    res.send("/one*blue");
});

app.get("/teste(ing)?" , (req, res) => {
    console.log(req.body);
    res.send("/teste(ing)?");
})

//parametros na rota
app.get("/testeParams/:id/:a? ", (req, res) => {
    res.send(req.params.id);
    console.log(req.params.id);
});

//parametros via query
app.get("/testQuery", (req, res ) => {
    res.send(req.query);
});

//next

app.get("/testeMulitpleHandlers", (req, res, value) => {
    console.log("callback 1");
    value();
}, (req, res) => {
    console.log("callback 2");
    res.end();
});

//next com array

const callback1 = (req, res, value) => {
    console.log("callback 1");
    value();
}
const callback2 = (req, res, value) => {
    console.log("callback 2");
    value();
}
function callback3(req, res) {
    console.log("FIM");
    res.end();
}

app.get("/testeMulitpleHandlersArray", [callback1, callback2, callback3]);

//routes
app.route("/testRoute")
    .get((req, res) =>{console.log("teste route GET");})
    .post((req, res) =>{console.log("teste route POST");})
    .delete((req, res) =>{console.log("teste route DELETE");})

app.listen(2020, () => {
    console.log("UHUU");
})