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
                <Link to="/alunos/cadastrar" > <button className="btn-cadastrar"> Cadastrar Aluno </button> </Link>
                <input type="text" className="search" name="search" placeholder="Pesquisar Aluno..." >
                </input>
            </div>
            <AlunoTable alunos={alunos} />
        </div>
    );
}

export default Alunos;