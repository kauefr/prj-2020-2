import React from 'react'
import './Alunos.css';
import AlunoTable from './AlunoTable';

function Alunos(props) {
    return (
        <div class="container" >
            <div class="options" >
                <h1>Alunos</h1>
                <button class="button btn-cadastrar"> Cadastrar Aluno</button>
                <input type="text" class="search" name="search" placeholder="Pesquisar Aluno.." >
                </input>
            </div>
            <AlunoTable />
        </div>
    );
}

export default Alunos;