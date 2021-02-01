import React, { useCallback, useState } from 'react'
import './cadastrarAluno.css';

export default function Form(props) {
    const [nome, setNome] = useState('');
    function onNomeChange(event) { setNome(event.target.value) }

    const [ra, setRa] = useState('');
    function onRaChange(event) { setRa(event.target.value) }

    const [ano, setAno] = useState('');
    function onAnoChange(event) { setAno(event.target.value) }

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3333/Alunos", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Nome: nome,
                Ra: ra,
                Situacao: 'ATIVO',
                AnoIngresso: parseInt(ano, 10)
            })
        });
        const data = await response.json();
        console.log(data);
    }, [nome, ra, ano]);

    return (
        <div className="limiter-form-aluno">
            <div className="container-form-aluno">
                <div className="wrap-form-aluno">
                    <div className="titulo-form-aluno"> Cadastrar Aluno</div>

                    <form className="form-aluno" onSubmit={handleSubmit}>

                        <label className="label-nome-form" htmlFor="nome">Nome</label>
                        <input  className="input-form-aluno" id="nome" value={nome} onChange={onNomeChange} />

                        <label className="label-ra-form" htmlFor="ra">RA</label>
                        < input  className="input-form-aluno" id="ra" value={ra} onChange={onRaChange} />

                        <label className="label-ano-form" htmlFor="ano">Ano de Ingresso</label>
                        <input className="input-form-aluno"id="ano" value={ano} onChange={onAnoChange} />

                        <button className="btn-aluno-enviar">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}