import React, { useState } from 'react'
import { apiAddress } from '../../util.js'
import './CadastrarTurma.css';
import Step1 from './Step1';
import Step2 from './Step2';

export default function CadastrarTurma(props) {
    //Objeto do Modelo, usado nas props dos outros componentes
    const [turma, setTurma] = useState({
        Nome: '',
        Periodo: '',
        Alunos: [],
        Disciplinas: []
    });

    //Função responsável por persistir os dados no backend
    async function handleSubmit() {
        const response = await fetch(apiAddress + 'Turmas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(turma)
        });
        const data = await response.json();
        console.log(data);
    }

    //Variáveis e handlers do componente Step2
    const [currentDisciplina, setCurrentDisciplina] = useState({ Nome: '' });
    function handleAddDisciplina() {
        setTurma({ ...turma, Disciplinas: [...turma.Disciplinas, currentDisciplina] });
        setCurrentDisciplina({ Nome: '' });
    }
    function handleRemoveDisciplina(i) {
        setTurma({ ...turma, Disciplinas: turma.Disciplinas.filter((v, j) => i !== j) });
    }

    //Instancia o componente correto baseado na etapa atual
    const [step, setStep] = useState(1);
    let content;
    switch (step) {
        case 1:
            //Passo 1: nome e período
            content = <Step1
                Nome={turma.Nome}
                Periodo={turma.Periodo}
                handleSubmit={() => setStep(2)}
                handleNomeInput={(e) => { setTurma({ ...turma, Nome: e.target.value }) }}
                handlePeriodoInput={(e) => { setTurma({ ...turma, Periodo: e.target.value }) }}
            />;
            break;
        case 2:
            //Passo 2: disciplinas
            content = <Step2
                current={currentDisciplina}
                disciplinas={turma.Disciplinas}
                handleNomeInput={(e) => {
                    setCurrentDisciplina({ Nome: e.target.value })
                }}
                handleAddDisciplina={handleAddDisciplina}
                handleRemove={handleRemoveDisciplina}
                handleSubmit={() => setStep(3)}
            />;
            break;
        case 3:
            //Passo 3: alunos
            content = <div></div>;
            break;
        default:
            //Isto nunca deve aparecer
            content = <h1>Erro: Passo inválido.</h1>
    }

    return content;
}