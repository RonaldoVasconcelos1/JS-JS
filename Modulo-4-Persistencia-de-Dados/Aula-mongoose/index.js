import mongoose from 'mongoose';

const uri = "mongodb+srv://ronaldo:12345@cluster0.dk4pr.gcp.mongodb.net/<grades>?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
        .then(console.log("Deu bom"))
        .catch((err) => {console.log(err.message);
});
//com Async
(async () => {
    try{
        await mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true});
        console.log("Deu bom");
    }catch (err) {console.log(err.message)}
})();

const studentSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    age: {
        type: Number
    }
});

 mongoose.model('student', studentSchema);
 const student = mongoose.model('student');
//callback
 new student({
     name: 'José',
     lastName: 'Aoaoao',
     Age: 22,
 }).save()
    .then(() => {
        console.log('foi essa porra');
    }).catch((err) => {console.log(err.message)}) 
//promisses Async/Await
    (async () => {
        try {
             await new student({
             name: 'bruno',
             lastName: 'canda',
             Age: 22,
            }).save();
            console.log('so vamo');
        }catch (err) {console.log(err.message)}
    })()