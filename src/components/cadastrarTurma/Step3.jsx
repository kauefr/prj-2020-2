import React from 'react'
import './Step3.css'

export default function Step3(props) {
    const rows = props.alunos.map((a, i) => (
        <tr key={i}>
            <td>
                <input
                    type='checkbox'
                    checked={props.checked[i]}
                    onChange={(e) => { props.handleCheck(i) }}
                />
            </td>
            <td>{a.Nome}</td>
        </tr>
    ));

    return (
        <div className="limiter">
            <div className="container-box">
                <div className="wrap">
                    <div className="titulo">Selecionar Alunos</div>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan='2'>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <button className="btn-cadastrar-turma" onClick={props.handleSubmit}>Cadastrar Turma</button>
                </div>
            </div>
        </div>
    );
}