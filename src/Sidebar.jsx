import React from 'react'
import {Link} from 'react-router-dom'

export default function(props) {
    return (
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/alunos">Alunos</Link></li>
            </ul>
        </nav>
    );
}