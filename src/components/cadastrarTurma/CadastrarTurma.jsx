import React, { useEffect, useState } from 'react'
import { apiAddress, getAll } from '../../util.js'
import './CadastrarTurma.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3.jsx';

export default function CadastrarTurma(props) {
    //Objeto do Modelo, usado nas props dos outros componentes
    const [turma, setTurma] = useState({
        Nome: '',
        Periodo: ''
    });
    const [disciplinas, setDisciplinas] = useState([]);

    //Função responsável por persistir os dados no backend
    async function handleSubmit() {
        //Seleciona os alunos da turma
        const alunosSelecionados = alunos.filter((a, i) => checked[i]);
        //Persiste a Turma
        const newTurma = await fetch(apiAddress + 'Turmas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(turma)
        }).then(r => r.json());

        //Persiste as disciplinas
        const newDisciplinas = (await Promise.allSettled(disciplinas.map(d => {
            d.Turma = newTurma;
            return fetch(apiAddress + 'Disciplinas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(d)
            }).then(r => r.json());
        }))).map(p => p.value);
        //Atualiza os alunos
        await Promise.all(alunosSelecionados.map(a => {
            a.Turma = newTurma;
            return fetch(
                apiAddress + 'Alunos/' + a.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(a)
            });
        }));
        //Vincula as disciplinas aos alunos
        const disciplinaAluno = {P1: 0, P2: 0, Media: 0};
        await Promise.all(...alunosSelecionados.map(a => newDisciplinas.map(d => {
            return fetch(apiAddress + 'DisciplinaAlunos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({...disciplinaAluno, AlunoId: a.id, DisciplinaId: d.id})
            })
        })));
    }

    //Variáveis e handlers do componente Step2
    const [currentDisciplina, setCurrentDisciplina] = useState({ Nome: '' });
    function handleAddDisciplina() {
        setDisciplinas([...disciplinas, currentDisciplina]);
        setCurrentDisciplina({ Nome: '' });
    }
    function handleRemoveDisciplina(i) {
        setDisciplinas(disciplinas.filter((d, j) => i !== j));
    }

    //Variáveis e handlers do componente Step3
    const [alunos, setAlunos] = useState([]);
    const [checked, setChecked] = useState([]);
    function handleCheck(i) {
        let newChecked = [...checked];
        newChecked[i] = !(newChecked[i]);
        setChecked(newChecked);
    }

    //Carrega a lista de alunos
    useEffect(() => {
        getAll("Alunos", (alunos) => {
            setAlunos(alunos);
            setChecked(Array(alunos.length).fill(false));
        });
    }, []);

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
                disciplinas={disciplinas}
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
            content = <Step3
                alunos={alunos}
                checked={checked}
                handleCheck={handleCheck}
                handleSubmit={handleSubmit}
            />;
            break;
        default:
            //Isto nunca deve aparecer
            content = <h1>Erro: Passo inválido.</h1>
    }

    return content;
}
