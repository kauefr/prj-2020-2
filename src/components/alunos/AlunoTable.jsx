import React, { useState, useEffect } from 'react'
import AlunoRow from './AlunoRow'

export default function AlunoTable(props) {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3333/alunos");
            const data = await response.json();
            setAlunos(data);
        };
        fetchData();
    }, []);

    const rows = alunos.map((aluno, index) => <AlunoRow key={index} {...aluno}></AlunoRow>);
    return (
        <table id="contact-detail" className="table" cellSpacing="0" width="100%" >
            <thead>
                <tr>
                    <th className="informacao-1" width="30%">Nome</th>
                    <th className="informacao-3" width="15%">RA</th>
                    <th className="informacao-5" width="15%">Ano</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}