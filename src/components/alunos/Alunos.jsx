import React from 'react'
import { Link } from 'react-router-dom';
import './Alunos.css';
import AlunoTable from './AlunoTable';

function Alunos(props) {
    return (
        <div className="container" >
            <div className="options" >
                <h1>Alunos</h1>
                <Link to="/alunos/cadastrar">Cadastrar Aluno</Link>
                <input type="text" className="search" name="search" placeholder="Pesquisar Aluno.." >
                </input>
            </div>
            <AlunoTable />
        </div>
    );
}

export default Alunos;