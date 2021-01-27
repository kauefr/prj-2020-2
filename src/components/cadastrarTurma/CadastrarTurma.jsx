import React, { useCallback, useState } from 'react'
import './CadastrarTurma.css';

export default function CadastrarTurma(props) {
    const [nome, setNome] = useState('');
    function onNomeChange(event) { setNome(event.target.value) }

    const [periodo, setPeriodo] = useState('');
    function onPeriodoChange(event) { setPeriodo(event.target.value) }

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3333/Turmas", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Nome: nome, Periodo: periodo })
        });
        const data = await response.json();
        console.log(data);
    }, [nome, periodo]);

    return (
        <>
         <div class="limiter">
		    <div class="container-box">
			    <div class="wrap"> 
            
            <div className="titulo"> Cadastrar Turma</div>
            <form class="form-turma" onSubmit={handleSubmit}>
                
                        <label className="label" htmlFor="nome">Nome</label>
                        <input id="nome" value={nome} onChange={onNomeChange} />
                    
                        <label className="label" htmlFor="periodo">Período</label>
                        <input id="periodo" value={periodo} onChange={onPeriodoChange} />
                    
                        <button className="btn-turma-enviar">Enviar</button>
               </form>
               </div>
            </div>
            </div>
               
        </>
    );
}