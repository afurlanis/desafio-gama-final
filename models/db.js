const mongoose = require('mongoose');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://BDgama:pega@cluster0.t8ml8.mongodb.net/banco-curriculo?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
}).then(()=>{
    console.log("MongoDB Conectado :D")
}).catch((err)=>{
    console.error("Houve um erro ao se conectar ao mongoDB: " + err);
})

module.exports = {mongoose: mongoose};

