const db = require('./db');


const UserSchema = db.mongoose.Schema({
    nome: {
        type: String
    },
    sobrenome: {
        type: String
    },
    cargo:  {
        type: String
    },
    nascimento:  {
        type: String
    },
    estadoCivil:  {
        type: String
    },
    sexo:  {
        type: String
    },
    cep:  {
        type: String
    },
    endereço:  {
        type: String
    },
    numero:  {
        type: String
    },
    complemento: {
        type: String
    },
    bairro:  {
        type: String
    },
    estado:  {
        type: String
    },
    cidade:  {
        type: String
    },
    celular: {
        type: String
    },
    recado: {
        type: String
    },
    email:  {
        type: String,
    },
    cpf:  {
        type: String,
        require: true
    },
    rg: {
        type: String
    },
    veiculo: {
        type: String
    },
    cnh:  {
        type: String
    }
}) 

const User = db.mongoose.model('usuarios', UserSchema)

module.exports = User;