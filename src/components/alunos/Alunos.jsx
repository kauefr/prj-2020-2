import React from 'react'
import './Alunos.css';
import AlunoTable from './AlunoTable';

function Alunos(props) {
    return (
        <div className="container" >
            <div className="options" >
                <h1>Alunos</h1>
                <button className="button btn-cadastrar"> Cadastrar Aluno</button>
                <input type="text" className="search" name="search" placeholder="Pesquisar Aluno.." >
                </input>
            </div>
            <AlunoTable />
        </div>
    );
}

export default Alunos;