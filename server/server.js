const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const finale = require('finale-rest');

// Inicializa os módulos
const app = express();
app.use(cors());
app.use(bodyParser.json());
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
});
finale.initialize({ app, sequelize });

// Define as tabelas do banco de dados
const Aluno = sequelize.define('Aluno', {
    Nome: Sequelize.STRING,
    Ra: Sequelize.STRING,
    Situacao: Sequelize.STRING,
    AnoIngresso: Sequelize.INTEGER,
    NumeroChamada: Sequelize.INTEGER
});

const Turma = sequelize.define('Turma', {
    Nome: Sequelize.STRING,
    Periodo: Sequelize.STRING
});

const Disciplina = sequelize.define('Disciplina', {
    Nome: Sequelize.STRING
});

const DisciplinaAluno = sequelize.define('DisciplinaAluno', {
    P1: Sequelize.FLOAT,
    P2: Sequelize.FLOAT,
    Media: Sequelize.FLOAT
});

// Define as relações
Turma.hasMany(Aluno);
Aluno.belongsTo(Turma);

Turma.hasMany(Disciplina);
Disciplina.belongsTo(Turma);

Disciplina.belongsToMany(Aluno, {through: DisciplinaAluno});
Aluno.belongsToMany(Disciplina, {through: DisciplinaAluno});

// Define os endpoints da API
finale.resource({
    model: Aluno,
    associations: true
});

finale.resource({
    model: Turma,
    associations: true
});

finale.resource({
    model: Disciplina,
    associations: true
});

finale.resource({
    model: DisciplinaAluno,
    associations: true
});

// Cria as tabelas e inicia o servidor na porta abaixo
const port = 3333;
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});