import React from 'react'

export default function AlunoRow(props) {
    return (
        <tr>
            <td class="informacao-1">{props.nome}</td>
            <td class="informacao-3">{props.ra}</td>
            <td class="informacao-5">{props.anoIngresso}</td>
        </tr>
    );
}