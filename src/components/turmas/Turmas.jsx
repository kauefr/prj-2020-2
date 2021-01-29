import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TurmaRow from './TurmaRow';
import './turmas.css';

export default function Turmas(props) {
    const [turmas, setTurmas] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3333/Turmas/");
            const data = await response.json();
            setTurmas(data);
        };
        fetchData();
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

         <table id="turmas" className="table-turmas" cellSpacing="0" width="100%" >
            <thead>
                <tr>
                    <th className="informacao-1" width="30%">Turma</th>
                    <th className="informacao-2" width="20%">Período</th>
                    <th className="informacao-3" width="15%">Visualizar</th>
                </tr>
            </thead>
                <tbody>
                   <td> {rows}</td>
                   <td> {rows}</td>
                   <td><Link to="/turmas/:id" > Detalhes da Turma </Link>
                   <Link to="" > Editar Turma </Link></td>
                </tbody>
            </table>
    
            </div>
                   
        </>
    );
}