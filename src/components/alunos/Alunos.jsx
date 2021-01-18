import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Alunos.css';
import AlunoTable from './AlunoTable';
import {getAll} from '../../util'

function Alunos(props) {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        getAll("Alunos", setAlunos);
    }, []);

    return (
        <div className="container" >
            <div className="options" >
                <h1>Alunos</h1>
                <Link to="/alunos/cadastrar">Cadastrar Aluno</Link>
                <input type="text" className="search" name="search" placeholder="Pesquisar Aluno.." >
                </input>
            </div>
            <AlunoTable alunos={alunos} />
        </div>
    );
}

export default Alunos;