import React, {useState, useEffect} from 'react'
import AlunoRow from './AlunoRow'

export default function(props) {
    const [alunos, setAlunos] = useState([]);

    useEffect(async () => {
        const response = await fetch("http://localhost:3333/alunos");
        const data = await response.json();
        setAlunos(data);
    }, []);

    const rows = alunos.map((aluno) => <AlunoRow {...aluno}></AlunoRow>);
    return (
        <div classname= "tabela-alunos">
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>RA</th>
                    <th>Ano de Ingresso</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </div>
    );
}