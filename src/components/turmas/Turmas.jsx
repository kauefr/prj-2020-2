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

             
        <div className="limiter">
		    <div className="container-box">
			    <div className="wrap">
            <h1>Turmas</h1>
            <Link to="/turmas/cadastrar">
            <button className="btn-cadastrar-turma">Cadastrar Turma</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>Turma</th>
                        <th>Período</th>
                        <th>Visualizar</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
    
            </div>
        </div>
        </div>
        </>
    );
}