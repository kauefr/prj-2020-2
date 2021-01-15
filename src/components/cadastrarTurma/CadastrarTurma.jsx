import React, { useCallback, useState } from 'react'

export default function CadastrarTurma(props) {
    const [nome, setNome] = useState('');
    function onNomeChange(event) { setNome(event.target.value) }

    const [periodo, setPeriodo] = useState('');
    function onPeriodoChange(event) { setPeriodo(event.target.value) }

    const handleSubmit = useCallback(async (event) => {
        const response = await fetch("http://localhost:3333/turmas", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, periodo })
        });
        const data = await response.json();
        console.log(data);
    }, [nome, periodo]);

    return (
        <>
            <h1>Cadastrar Turma</h1>
            <form>
                <ul>
                    <li>
                        <label htmlFor="nome">Nome</label>
                        <input id="nome" value={nome} onChange={onNomeChange} />
                    </li>
                    <li>
                        <label htmlFor="periodo">Período</label>
                        <input id="periodo" value={periodo} onChange={onPeriodoChange} />
                    </li>
                    <li>
                        <button type="button" onClick={handleSubmit}>Enviar</button>
                    </li>
                </ul>
            </form>
        </>
    );
}