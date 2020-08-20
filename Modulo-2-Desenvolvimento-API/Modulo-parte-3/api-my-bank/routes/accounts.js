import express from "express";

import { promises as fs } from "fs";

const router = express.Router();
router.post("/", async (req, res) => {
  try {

    let account = req.body;
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);


    account = {id: json.nextId++, ...account}
    json.accounts.push(account);

    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));
    res.send(account);
    res.end();
  } catch (err) {
      res.status(400).send({ error: err.message});
  }

});

router.get("/", async (req, res) => {

      try {

        const data = await fs.readFile(global.FileName);
        const json = JSON.parse(data);
        delete json.nextId;
        res.send(json);
        
      } catch (err) {
          res.status(400).send({ error: err.message});
      }
});

router.get("/:id", async (req, res) => {
    try {
      const data = await fs.readFile(global.FileName);
      const json = JSON.parse(data);

      const account = json.accounts.find(
        account => account.id === parseInt(req.params.id));
      res.send(account); 
      
    } catch (err) {
        res.status(400).send({ error: err.message});
    }
});

export default router;
