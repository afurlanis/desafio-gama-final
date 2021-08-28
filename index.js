const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

app.use('/documents', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.post('/add', async function (req, res) {
    cpf_matches = await User.findOne({
       cpf: req.body.cpf
    })
    console.log(cpf_matches);

    if (cpf_matches) {
        res.json({
            error: 1
        })
    } else {
            User.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            cargo: req.body.cargo,
            nascimento: req.body.nascimento,
            estadoCivil: req.body.estadoCivil,
            sexo: req.body.sexo,
            cep: req.body.cep,
            endereço: req.body.endereço,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            estado: req.body.estado,
            cidade: req.body.cidade,
            celular: req.body.celular,
            recado: req.body.recado,
            email: req.body.email,
            cpf: req.body.cpf,
            rg: req.body.rg,
            veiculo: req.body.veiculo,
            cnh: req.body.cnh
        }).then(() => {
            res.redirect(301, "/submitted.html")
        }).catch((erro) => {
            res.status(500)
        })
    }
})


const PORT = 8077
app.listen(PORT, () =>{
    console.log("Servidor Rodando na url http://localhost:8077")
});