import React from 'react'
import { Link } from 'react-router-dom'

export default function TurmaRow(props) {
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.periodo}</td>
            <td><Link to={"/turmas/" + props.id}>Visualizar</Link></td>
        </tr>
    );
}