import React, { useCallback, useState } from 'react'

export default function Form(props) {
    const [nome, setNome] = useState('');
    function onNomeChange(event) { setNome(event.target.value) }

    const [ra, setRa] = useState('');
    function onRaChange(event) { setRa(event.target.value) }

    const [ano, setAno] = useState('');
    function onAnoChange(event) { setAno(event.target.value) }

    const handleSubmit = useCallback(async (event) => {
        const response = await fetch("http://localhost:3333/alunos", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, ra, situacao: 'ATIVO', anoIngresso: parseInt(ano, 10) })
        });
        console.log(response.json());
        return response;
    }, [nome, ra, ano]);

    return (
        <form>
            <ul>
                <li>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" value={nome} onChange={onNomeChange} />
                </li>
                <li>
                    <label htmlFor="ra">RA</label>
                    <input id="ra" value={ra} onChange={onRaChange} />
                </li>
                <li>
                    <label htmlFor="ano">Ano de Ingresso</label>
                    <input id="ano" value={ano} onChange={onAnoChange} />
                </li>
                <li>
                    <button type="button" onClick={handleSubmit}>Enviar</button>
                </li>
            </ul>
        </form>
    );
}