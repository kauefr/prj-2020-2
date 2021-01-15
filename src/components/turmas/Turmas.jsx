import React from 'react'
import { Link } from 'react-router-dom'
import TurmaRow from './TurmaRow';

export default function Turmas(props) {
    const TURMAS_MOCK = [
        {nome: "1º ano A", periodo: "Manhã", id: 1},
        {nome: "1º ano B", periodo: "Tarde", id: 2},
        {nome: "1º ano C", periodo: "Manhã", id: 3},
    ];
    const rows = TURMAS_MOCK.map((turma, index) => <TurmaRow key={index} {...turma} />);
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