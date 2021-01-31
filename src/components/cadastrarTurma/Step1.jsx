import React from 'react'
import './CadastrarTurma.css'

export default function Step1(props) {

    return (
        <div className="limiter">
            <div className="container-box">
                <div className="wrap">
                    <div className="titulo">Dados da Turma</div>

                    <form className="form-turma" onSubmit={props.handleSubmit}>

                        <label className="label" htmlFor="nome">Nome da Turma</label>
                        <input id="nome" value={props.Nome} onChange={props.handleNomeInput} />

                        <label className="label" htmlFor="periodo">Período</label>
                        <input id="periodo" value={props.Periodo} onChange={props.handlePeriodoInput} />

                        <button className="btn-turma-enviar">Avançar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}