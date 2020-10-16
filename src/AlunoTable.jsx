import React from 'react'
import AlunoRow from './AlunoRow'
import ALUNOS from './Mocks/ListaAlunos'

export default function(props) {
    const rows = ALUNOS.map((aluno) => <AlunoRow {...aluno}></AlunoRow>);
    return (
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
    );
}