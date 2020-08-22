import express from "express";

import { promises as fs } from "fs";

const router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    let account = req.body;
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);

    account = { id: json.nextId++, ...account };
    json.accounts.push(account);

    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));
    res.send(account);
    Logger.info(`POST /account ${jsonStringify(account)}`)
    res.end();
  } catch (err) {
    next(err);

  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);
    delete json.nextId;
    res.send(json);
    Logger.info("GET /account");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);

    const account = json.accounts.find(
      (account) => account.id === parseInt(req.params.id)
    );
    res.send(account);
    Logger.info("GET:ID /account");
  } catch (err) {
    next(err);

  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);

    json.accounts = json.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    );
    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));
    res.end();
    Logger.info(`DELETE:ID ${req.params.id}, /account`);
  } catch (err) {
    next(err);

  }
});

router.put("/", async (req, res, next) => {

  try {
    let account = req.params;
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);

    const index = json.accounts.findIndex(a => a.id === a.id);

    json.accounts[index] =account;

    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));

    res.send(account);
    Logger.info(`PUT:ID ${req.params.id} /account, ${jsonStringify( account)}`);


    
  } catch (err) {

    next(err);

  }
});

router.patch('/updateBalance', async(req, res) => {

  try {

    let account = req.params;
    const data =  await fs.readFile(global.FileName);
    const json = JSON.parse(data);
  
    const index = json.accounts.findIndex(ac => ac.id === ac.id);
  
    json.accounts[index].balance = account.balance;
  
    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));
  
    res.send(account.balance);
    Logger.info(`PATCH:ID ${req.params.id} /account, ${jsonStringify(account)}`);

  } catch (err) {
    next(err);
  }
});

router.use("/", async (err, req, res, next) => {
  global.Logger.error(`Metodo: ${req.method}, EndPoint: ${req.baseUrl}, Error: ${err.message}`);
  console.log(err);
  res.status(400).send({ error: err.message });
});

export default router;
