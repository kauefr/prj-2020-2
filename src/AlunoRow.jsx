import React from 'react'

export default function AlunoRow(props) {
    return (
        <tr>
            <th>{props.nome}</th>
            <td>{props.ra}</td>
            <td>{props.anoIngresso}</td>
        </tr>
    );
}