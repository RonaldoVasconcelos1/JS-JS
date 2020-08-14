import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET /carros");
    res.send("REEEES GEEEEET");
});

router.get("/precos", (req, res) => {
    console.log("GET /precos");
    res.send("PRECOOOOOOOOOOOOOOOOOOO");
});

export default router;