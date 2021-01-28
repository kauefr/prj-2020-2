import React from 'react'
import AlunoRow from './AlunoRow'

export default function AlunoTable(props) {
    const rows = props.alunos.map((aluno, index) => <AlunoRow key={index} {...aluno} />);

    return (
        <table id="contact-detail" className="table" cellSpacing="0" width="100%" >
            <thead>
                <tr>
                    <th className="informacao-1" >Nome</th>
                    <th className="informacao-3" >RA</th>
                    <th className="informacao-4" >Turma</th>
                    <th className="informacao-5" >Ano</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}