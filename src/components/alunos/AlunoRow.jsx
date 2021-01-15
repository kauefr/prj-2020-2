import React from 'react'

export default function AlunoRow(props) {
    return (
        <tr>
            <td className="informacao-1">{props.Nome}</td>
            <td className="informacao-3">{props.Ra}</td>
            <td className="informacao-4">{props.TurmaId || "Sem Turma"}</td>
            <td className="informacao-5">{props.AnoIngresso}</td>
        </tr>
    );
}