import React from 'react'
import { Link } from 'react-router-dom';
import './Alunos.css';
import AlunoTable from './AlunoTable';

function Alunos(props) {
    return (
        <div className="container" >
            <div className="options" >
                <Link to="/alunos/cadastrar" > <button className="btn-cadastrar"> Cadastrar Aluno </button> </Link>
                <input type="text" className="search" name="search" placeholder="Pesquisar Aluno..." >
                </input>
            </div>
            <AlunoTable />
        </div>
    );
}

export default Alunos;