import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAll } from '../../util';

export default function NotasAluno(props) {
    const { id } = useParams();

    const [aluno, setAluno] = useState({Disciplinas: []});

    useEffect(() => {
        getAll("Alunos/"+id, setAluno);
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