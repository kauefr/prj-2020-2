import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TurmaRow from './TurmaRow';

export default function Turmas(props) {
    const [turmas, setTurmas] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3333/turmas/");
            const data = await response.json();
            setTurmas(data);
        };
        fetchData();
    }, []);

    const rows = turmas.map((turma, index) => <TurmaRow key={index} {...turma} />);
    return (
        <>
            <h1>Turmas</h1>
            <Link to="/turmas/cadastrar">Cadastrar Turma</Link>
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
        </>
    );
}