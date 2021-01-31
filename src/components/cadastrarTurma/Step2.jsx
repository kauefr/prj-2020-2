import React from 'react'
import './CadastrarTurma.css'

export default function Step2(props) {

    const rows = props.disciplinas.map((d, i) => (
    <tr key={i}>
        <td>{d.Nome}</td>
        <td><button onClick={(e)=>{props.handleRemove(i)}}>Remover</button></td>
    </tr>
    ));

    return (
        <div className="limiter">
            <div className="container-box">
                <div className="wrap">
                    <div className="titulo">Adicionar Disciplinas</div>
                    <label htmlFor="disciplina">Nome da Disciplina</label>
                    <input id="disciplina" value={props.current.Nome} onChange={props.handleNomeInput} />
                    <button onClick={props.handleAddDisciplina}>Adicionar Disciplina</button>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan='2'>Disciplina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <button className="btn-turma-enviar" onClick={props.handleSubmit}>Avançar</button>
                </div>
            </div>
        </div>
    );
}