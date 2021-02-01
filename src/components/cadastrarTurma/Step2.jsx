import React from 'react'
import './Step2.css'

export default function Step2(props) {

    const rows = props.disciplinas.map((d, i) => (
    <tr key={i}>
        <td>{d.Nome}</td>
        <td><button class="btn-remove" onClick={(e)=>{props.handleRemove(i)}}>Remover</button></td>
    </tr>
    ));

    return (
        <div className="limiter">
            <div className="container-box">
                <div className="wrap">
                    <div className="title-1">Adicionar Disciplinas</div>
                    <label className="label-disciplina" htmlFor="disciplina">Nome da Disciplina</label>
                    <input id="disciplina" value={props.current.Nome} onChange={props.handleNomeInput} />
                    <button class="btn-add-disciplina"onClick={props.handleAddDisciplina}>Adicionar Disciplina</button>
                    <table>
                        <thead>
                            <tr>
                                <th className="title-disciplina"colSpan='2'>Disciplina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <button className="btn-turma-avancar" onClick={props.handleSubmit}>Avançar</button>
                </div>
            </div>
        </div>
    );
}