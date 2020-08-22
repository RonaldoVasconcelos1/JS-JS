import express from 'express';
import accountsRouter from './routes/accounts.js';
import winston from 'winston'
import { promises as fs } from 'fs';

const app = express();
const { combine, timestamp,label, printf, } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) =>{
    return `${timestamp} [${label}] ${level}: ${message}` 
});
global.FileName = "accounts.json";
global.Logger = winston.createLogger({
    leve: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "my-bank.log"})
    ],
    format: combine(
        label({ label: "my-bank-api"}),
        timestamp(),
        myFormat
    )
});
app.use(express.json());



app.use("/account", accountsRouter);

app.listen(3030, async () => {
    try {

        await fs.readFile("accounts.json");
        global.Logger.info("UHUUU");
        
    } catch (err) {
        
        const initialJson = {
            nextId : 1,
            accounts : []
        }
        try {
            await fs.writeFile("accounts.json", JSON.stringify(initialJson));
            Logger.Info("UHUUU");
        
        } catch (err) {
            global.Logger.error(err.message);
        }
    }
   
})