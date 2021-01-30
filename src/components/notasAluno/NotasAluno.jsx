import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './NotasAluno.css';
import { Link } from 'react-router-dom'
import { getAll } from '../../util';

export default function NotasAluno(props) {
    const { id } = useParams();

    const [aluno, setAluno] = useState({Disciplinas: []});

    useEffect(() => {
        getAll("Alunos/"+id, setAluno);
    }, [id]);

    const rows = aluno.Disciplinas.map((disciplina, index) => {
        return (
            <tr key={index}>
                <td>{disciplina.Nome}</td>
                <td>{disciplina.DisciplinaAluno.P1}</td>
                <td>{disciplina.DisciplinaAluno.P2}</td>
                <td>{disciplina.DisciplinaAluno.Media}</td>
            </tr>
        );
    });

    return (
        <>
                 
                <div className="container" >
                <h3>Notas de {aluno.Nome}</h3>
                     <div className="options" >
                      {/* adicionar link para a página de atribuição de nota*/} 
                      {/*  rota temporária pra visualização de layout em home */} <Link to="/atividades"> 
                            <button className="btn-atribuir-nota">
                                Atribuir nota
                            </button>
                        </Link> 
                      </div>
                        
                            <table className="table-notas" cellSpacing="0" width="100%" >
                                <thead>
                                  <tr>
                                    <th>Disciplina</th>
                                    <th>P1</th>
                                    {/* mudei o nome de p2 para Trabalhos, todas tem o mesmo peso*/}
                                    <th>Trabalhos</th> 
                                    <th>Participação</th>
                                    <th>Média</th>
                                  </tr>
                                </thead>
                                 <tbody>
                                    {rows}
                                 </tbody>
                            </table>
                </div>
        </>
    );
}