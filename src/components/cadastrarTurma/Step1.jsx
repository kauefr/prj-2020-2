import React from 'react'
import './CadastrarTurma.css'

export default function Step1(props) {

    return (
        <div class="limiter">
            <div class="container-box">
                <div class="wrap">
                    <div className="titulo">Dados da Turma</div>

                    <form class="form-turma" onSubmit={props.handleSubmit}>

                        <label className="label" htmlFor="nome">Nome da Turma</label>
                        <input id="nome" value={props.Nome} onInput={props.handleNomeInput} />

                        <label className="label" htmlFor="periodo">Período</label>
                        <input id="periodo" value={props.Periodo} onInput={props.handlePeriodoInput} />

                        <button className="btn-turma-enviar">Avançar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}