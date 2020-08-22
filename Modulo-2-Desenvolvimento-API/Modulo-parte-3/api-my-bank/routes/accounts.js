import express from "express";

import { promises as fs } from "fs";

const router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    let account = req.body;

    if (account.balance == null && !account.name) {
      throw new error("Name e Balance são obrigatórios");
    }
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);

    account = {
      id: json.nextId++,
      balance: account.balance,
      name: account.name,
    };
    json.accounts.push(account);

    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));
    res.send(account);
    Logger.info(`POST /account ${jsonStringify(account)}`);
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

    const account = req.body;

    if(!account.id) {
      throw new Error("Registro nao encontrado");
    }
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);
    const index = json.accounts.findIndex(a => a.id === account.id);

    if(index == -1) {
      throw new Error("Registro não encontrado");
    }

    json.accounts[index].balance = account.balance;
    json.accounts[index].name = account.name;

    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));
    res.send(account);

    Logger.info(`PUT:ID /account, ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.patch("/updateBalance", async (req, res) => {
  try {
    const account = req.body;

    if(!account.name && account.balance === null) {
      throw new error("Name e Balance são obrigatórios");
    }
    const data = await fs.readFile(global.FileName);
    const json = JSON.parse(data);

    const index = json.accounts.findIndex(ac => ac.id === account.id);

    json.accounts[index].balance = account.balance;
    json.accounts[index].name = account.name;;

    await fs.writeFile(global.FileName, JSON.stringify(json, null, 2));

    res.send(account.balance);
    Logger.info(
      `PATCH:ID ${req.params.id} /account, ${jsonStringify(account)}`
    );
  } catch (err) {
    next(err);
  }
});

router.use("/", async (err, req, res, next) => {
  global.Logger.error(
    `Metodo: ${req.method}, EndPoint: ${req.baseUrl}, Error: ${err.message}`
  );
  console.log(err);
  res.status(400).send({ error: err.message });
});

export default router;
