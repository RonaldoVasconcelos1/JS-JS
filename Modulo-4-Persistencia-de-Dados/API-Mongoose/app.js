import express from 'express';
import studentRouter from './routers/studentRouter.js';
import mongoose from 'mongoose';
const uri = "mongodb+srv://ronaldo:12345@cluster0.dk4pr.gcp.mongodb.net/<grades>?retryWrites=true&w=majority";

(async () => {
    try{
        await mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true});
        console.log("Deu Conectado Com o Banco na nuvem");
    }catch (err) {console.log(err.message)}
})();

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3030, () => {
    console.log('API STARTED')
})