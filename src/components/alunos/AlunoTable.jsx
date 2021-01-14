import React, { useState, useEffect } from 'react'
import AlunoRow from './AlunoRow'

export default function (props) {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3333/alunos");
            const data = await response.json();
            setAlunos(data);
        };
        fetchData();
    }, []);

    const rows = alunos.map((aluno) => <AlunoRow {...aluno}></AlunoRow>);
    return (
        <table id="contact-detail" class="table" cellspacing="0" width="100%" >
            <thead>
                <tr>
                    <th class="informacao-1" width="30%">Nome</th>
                    <th class="informacao-3" width="15%">RA</th>
                    <th class="informacao-5" width="15%">Ano</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}