import express from 'express';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';

const app = express();
global.FileName = "accounts.json";
app.use(express.json());



app.use("/account", accountsRouter);

app.listen(3030, async () => {
    try {

        await fs.readFile("accounts.json");
        console.log("UHUUU");
        
    } catch (err) {
        
        const initialJson = {
            nextId : 1,
            accounts : []
        }
        try {
            await fs.writeFile("accounts.json", JSON.stringify(initialJson));
            console.log("UHUUU");
        
        } catch (err) {
            console.log(err.message);
        }
    }
   
})