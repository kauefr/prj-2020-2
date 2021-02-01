import React from 'react'
import './Step1.css'

export default function Step1(props) {

    return (
        <div className="limiter-step1">
            <div className="container-box-step1">
                <div className="wrap-step1">
                    <div className="titulo-step1">Dados da Turma</div>

                    <form className="form-turma" onSubmit={props.handleSubmit}>

                        <label className="label1" htmlFor="nome">Nome da Turma</label>
                        <input className="input-nome" id="nome" value={props.Nome} onChange={props.handleNomeInput} />

                        <label className="label2" htmlFor="periodo">Período</label>
                        <input className="input-periodo" id="periodo" value={props.Periodo} onChange={props.handlePeriodoInput} />

                        <button className="btn-turma-enviar">Avançar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}