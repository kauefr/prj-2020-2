import React, { useState } from 'react'

export default function (props) {
    const [nome, setNome] = useState('');
    function onNomeChange(event) { setNome(event.target.value) }

    const [ra, setRa] = useState('');
    function onRaChange(event) { setRa(event.target.value) }

    const [ano, setAno] = useState('');
    function onAnoChange(event) { setAno(event.target.value) }

    function handleSubmit(event) {
        console.log({ nome, ra, ano })

    }

    return (
        <form>
            <ul>
                <li>
                    <label for="nome">Nome</label>
                    <input id="nome" value={nome} onChange={onNomeChange} />
                </li>
                <li>
                    <label for="ra">RA</label>
                    <input id="ra" value={ra} onChange={onRaChange} />
                </li>
                <li>
                    <label for="ano">Ano de Ingresso</label>
                    <input id="ano" value={ano} onChange={onAnoChange} />
                </li>
                <li>
                    <button type="button" onClick={handleSubmit}>Enviar</button>
                </li>
            </ul>
        </form>
    );
}