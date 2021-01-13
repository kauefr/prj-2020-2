const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const finale = require('finale-rest');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite',
});

const Aluno = database.define('alunos', {
    nome: Sequelize.STRING,
    ra: Sequelize.STRING,
    anoIngresso: Sequelize.INTEGER
});

finale.initialize({ app, sequelize: database });

finale.resource({
    model: Aluno,
    endpoints: ['/alunos', '/alunos/:id'],
});

const port = 3333;

database.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});