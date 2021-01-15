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
    storage: ':memory:',
});

const Aluno = sequelize.define('Aluno', {
    nome: Sequelize.STRING,
    ra: Sequelize.STRING,
    situacao: Sequelize.STRING,
    anoIngresso: Sequelize.INTEGER,
    numeroChamada: Sequelize.INTEGER
});

const Turma = sequelize.define('Turma', {
    nome: Sequelize.STRING,
    periodo: Sequelize.STRING
});

Turma.hasMany(Aluno);
Aluno.belongsTo(Turma);

finale.initialize({ app, sequelize });

finale.resource({
    model: Aluno,
    endpoints: ['/alunos', '/alunos/:id']
});

finale.resource({
    model: Turma,
    endpoints: ['/turmas', '/turmas/:id']
});

const port = 3333;

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});