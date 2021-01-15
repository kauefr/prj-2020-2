import React from 'react'

export default function AlunoRow(props) {
    return (
        <tr>
            <td className="informacao-1">{props.nome}</td>
            <td className="informacao-3">{props.ra}</td>
            <td className="informacao-4">{props.turmaId || "Sem Turma"}</td>
            <td className="informacao-5">{props.anoIngresso}</td>
        </tr>
    );
}