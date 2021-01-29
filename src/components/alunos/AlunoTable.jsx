import React, { useState, useEffect } from 'react'
import AlunoRow from './AlunoRow'
import { Link } from 'react-router-dom'


export default function AlunoTable(props) {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3333/Alunos");
            const data = await response.json();
            setAlunos(data);
        };
        fetchData();
    }, []);

    const rows = alunos.map((aluno, index) => <AlunoRow key={index} {...aluno} />);
    return (
        <table className="table-alunos" cellSpacing="0" width="100%" >
            <thead>
                <tr>
                    <th className="informacao-1" width="30%">Nome</th>
                    <th className="informacao-3" width="15%">RA</th>
                    <th className="informacao-4" width="15%">Turma</th>
                    <th className="informacao-5" width="15%">Ano</th>
                    <th className="informacao-5" width="15%">Notas</th>
                    
                </tr>
            </thead>
            <tbody>
                <td>{rows}</td>
                <td></td>
                <td></td>
                <td></td>
                <td><Link to={"/notas/:id" + props.id}>Notas</Link></td>
            </tbody>
        </table>
    );
}