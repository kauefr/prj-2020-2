import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function NotasAluno(props) {
    const { id } = useParams();

    const [aluno, setAluno] = useState({Disciplinas: []});

    useEffect(() => {
        async function fetchData(id) {
            const response = await fetch("http://localhost:3333/Alunos/" + id);
            const data = await response.json();
            setAluno(data);
        };
        fetchData(id);
    }, [id]);

    const rows = aluno.Disciplinas.map((disciplina, index) => {
        return (
            <tr key={index}>
                <td>{disciplina.Nome}</td>
                <td>{disciplina.DisciplinaAluno.P1}</td>
                <td>{disciplina.DisciplinaAluno.P2}</td>
                <td>{disciplina.DisciplinaAluno.Media}</td>
            </tr>
        );
    });

    return (
        <>
            <h1>Notas de {aluno.Nome}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Disciplina</th>
                        <th>P1</th>
                        <th>P2</th>
                        <th>Média</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    );
}