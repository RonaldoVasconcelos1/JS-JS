import express from 'express';
import studentModel from '../models/studentModel.js'

const router = express();

//CREATE
router.post("/student", async(req, res) => {

    try {
        const student = new studentModel(req.body);
        await student.save();
        res.send(student);
        
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/student", async (req, res) => {
    try {
        const student = await studentModel.find({});
        res.send(student);
            
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`);
    }
});
router.get("/student:id", async (req, res) => {
    try {
        const id = req.params.id
        const student = await studentModel.findById({_id: id}, req.body);
        res.send(student);
        
    } catch (err) {
        res.status(500).send(err.message);
    }
});
router.put("/student:id", async (req, res) => {

    try {
        const id = req.params.id
        const student = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
        if(!student) {
            res.status(400).send('Registro não encontrado');
        }
        else {
            res.status(200).send(student);
        }
    } catch (err) {
        res.status(500).send(console.log(err.message));
    }
   
});
router.delete("/student:id", async (req, res) =>  {
    try {
        const student = studentModel.findByIdAndDelete({_id:req.params.id});
        if(!student) {
            res.status(400).send('Registro não encontrado');
        }
        else {
            res.status(200).send(student);
        }
    } catch (err) {
        console.log(err.message);
    }
});
export default router;
