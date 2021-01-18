import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAll } from '../../util';

export default function DetalhesTurma(props) {
    const { id } = useParams();
    const [turma, setTurma] = useState({Nome: '', Periodo: ''});

    useEffect(() => {
        getAll("Turmas/"+id, setTurma);
    },[id]);
    
    return (
        <>
            <h1>Detalhes da Turma</h1>
            <p>{turma.Nome}</p>
            <p>{turma.Periodo}</p>
        </>
    );
}