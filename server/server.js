const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const finale = require('finale-rest');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite',
});

const Aluno = sequelize.define('Aluno', {
    nome: Sequelize.STRING,
    ra: Sequelize.STRING,
    anoIngresso: Sequelize.INTEGER
});

finale.initialize({ app, sequelize });

finale.resource({
    model: Aluno,
    endpoints: ['/alunos', '/alunos/:id'],
});

const port = 3333;

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});