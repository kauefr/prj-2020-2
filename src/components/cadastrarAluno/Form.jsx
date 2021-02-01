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
        <div className="limiter">
            <div className="container-box">
                <div className="wrap">
                    <div className="titulo"> Cadastrar Aluno</div>

                    <form className="form-aluno" onSubmit={handleSubmit}>

                        <label className="label" htmlFor="nome">Nome</label>
                        <input id="nome" value={nome} onChange={onNomeChange} />

                        <label className="label" htmlFor="ra">RA</label>
                        < input id="ra" value={ra} onChange={onRaChange} />

                        <label className="label" htmlFor="ano">Ano de Ingresso</label>
                        <input id="ano" value={ano} onChange={onAnoChange} />

                        <button className="btn-aluno-enviar">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}