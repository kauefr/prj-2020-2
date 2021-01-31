import React from 'react'
import { Link } from 'react-router-dom'

export default function AlunoRow(props) {
    return (
        <tr>
            <td className="informacao-1">{props.Nome}</td>
            <td className="informacao-3">{props.Ra}</td>
            <td className="informacao-4">{props.Turma ? props.Turma.Nome : "Sem Turma"}</td>
            <td className="informacao-5">{props.AnoIngresso}</td>
            <td><Link to={"/notas/" + props.id}>Notas</Link></td>
        </tr>
    );
}