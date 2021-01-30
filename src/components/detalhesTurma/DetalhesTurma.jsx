import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './DetalhesTurma.css';
import { getAll } from '../../util';

export default function DetalhesTurma(props) {
    const { id } = useParams();
    const [turma, setTurma] = useState({Nome: '', Periodo: ''});

    useEffect(() => {
        getAll("Turmas/"+id, setTurma);
    },[id]);
    
    return (
        <>
           <div className="limiter-detalhes-turma"> 
            <div className="container-detalhes-turma">
                <div className="wrap-detalhes-turma"> 
                    <h3>Detalhes da turma selecionada</h3>
                        <table className="table-detalhes-turma" cellSpacing="0" width="100%">
                            <thead>
                                <tr><th> Nome da turma:</th></tr>
                                <tr><th> Alunos matriculados na turma:</th></tr>
                                <tr> <th> Período da Aula: </th></tr>
                            </thead>    
                        </table>

                        {/*informações da tabela table-detalhes-turma */}
                        <p>{turma.Nome}</p> 
                        <p>{turma.Periodo}</p>

                        <table className="table-disciplinas" cellSpacing="0" width="100%">
                            <thead>
                                <tr><th> Disciplinas da turma</th></tr>
                            </thead>    
                        </table>

                  {/* link para adicionar alunos na turma*/}
                  
                 

                    

                </div>
            </div> 
           </div> 
        </>
    );
}