import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetalhesTurma(props) {
    const { id } = useParams();
    const [turma, setTurma] = useState({Nome: '', Periodo: ''});

    useEffect(() => {
        async function fetchData(id) {
            const response = await fetch("http://localhost:3333/Turmas/"+id);
            const data = await response.json();
            setTurma(data);
        };
        fetchData(id);
    },[id]);
    return (
        <>
            <h1>Detalhes da Turma</h1>
            <p>{turma.Nome}</p>
            <p>{turma.Periodo}</p>
        </>
    );
}