import React from 'react'
import { Link } from 'react-router-dom'
import './turmas.css';

export default function TurmaRow(props) {
    return (

        <tr>
            <td>{props.Nome}</td>
            <td>{props.Periodo}</td>
            <td>
                <Link to={"/turmas/" + props.id}>Detalhes</Link>
                <br />
                <Link to="">Editar</Link>
            </td>
        </tr>

    );
}