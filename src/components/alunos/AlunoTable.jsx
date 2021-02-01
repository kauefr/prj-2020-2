import React from 'react'
import AlunoRow from './AlunoRow'

export default function AlunoTable(props) {
    const rows = props.alunos.map((aluno, index) => <AlunoRow key={index} {...aluno} />);

     return (
    //    <div className="table-limiter">  </div> 
        <table className="table-alunos" cellSpacing="0" width="100%" >
            <thead>
                <tr>
                    <th className="info" width="30%">Nome</th>
                    <th className="info" width="15%">RA</th>
                    <th className="info" width="15%">Turma</th>
                    <th className="info" width="15%">Ano</th>
                    <th className="info" width="15%">Notas</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}