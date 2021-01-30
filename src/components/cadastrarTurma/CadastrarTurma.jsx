import React, { useCallback, useState } from 'react'
import './CadastrarTurma.css';
import Step1 from './Step1';

export default function CadastrarTurma(props) {
    const [turma, setTurma] = useState({
        Nome: '',
        Periodo: '',
        Alunos: [],
        Disciplinas: []
    });

    const handleStep1 = useCallback(async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3333/Turmas", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Nome: turma.Nome, Periodo: turma.Periodo })
        });
        const data = await response.json();
        console.log(data);
    }, [turma]);

    const [step, setStep] = useState(1);

    let page;

    switch (step) {
        case 1:
            page = <Step1
                Nome={turma.Nome}
                Periodo={turma.Periodo}
                handleSubmit={handleStep1}
                handleNomeInput={(e) => { setTurma({ ...turma, Nome: e.target.value }) }}
                handlePeriodoInput={(e) => { setTurma({ ...turma, Periodo: e.target.value }) }}
            />
            break;
        default:
            page = <></>
    }

    return page;
}