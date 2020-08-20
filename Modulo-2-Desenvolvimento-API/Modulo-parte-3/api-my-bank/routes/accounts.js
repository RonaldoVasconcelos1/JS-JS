import express from "express";

import { promises as fs } from "fs";

const router = express.Router();

router.post("/", async (req, res) => {
  try {

    let account = req.body;
    const data = await fs.readFile("accounts.json");
    const json = JSON.parse(data);


    account = {id: json.nextId++, ...account}
    json.accounts.push(account);

    await fs.writeFile("accounts.json", JSON.stringify(json));
    res.send(account);

    res.end();
  } catch (err) {
      res.status(400).send({ error: err.message});
  }

});

export default router;
