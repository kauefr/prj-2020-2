import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../../util';
import TurmaRow from './TurmaRow';
import './turmas.css';

export default function Turmas(props) {
    const [turmas, setTurmas] = useState([]);
    useEffect(() => {
        getAll("Turmas", setTurmas);
        return;
    }, []);

    const rows = turmas.map((turma, index) => <TurmaRow key={index} {...turma} />);
    return (
        <>
            <div className="container" >
                <div className="options" >
                    <Link to="/turmas/cadastrar">
                        <button className="btn-cadastrar-turma">
                            Cadastrar Turma
                            </button>
                    </Link>
                </div>

                <div className="table-turmas-limiter">
                <table id="turmas" className="table-turmas" cellSpacing="0" width="100%" >
                    <thead>
                        <tr>
                            <th className="informacao-1" width="30%">Turma</th>
                            <th className="informacao-2" width="20%">Período</th>
                            <th className="informacao-3" width="15%">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
}