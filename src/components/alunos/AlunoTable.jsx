import React from 'react'
import AlunoRow from './AlunoRow'

export default function AlunoTable(props) {
    const rows = props.alunos.map((aluno, index) => <AlunoRow key={index} {...aluno} />);

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
                {rows}
            </tbody>
        </table>
    );
}