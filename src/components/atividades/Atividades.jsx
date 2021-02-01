import React from 'react'
import './Atividades.css';

function Atividades() {
    return (
        <>
            <div className="container">
                <div className="options">
                    <table id="turmas" className="table-atribuir-notas" cellSpacing="0" width="100%" >
                        <thead>
                            <tr>
                                {/* Corrigir className das tables */}
                                <th className="informacao-1" width="20%">Disciplinas</th>
                                <th className="informacao-2" width="15%">Avaliação</th>
                                <th className="informacao-3" width="15%">Trabalho</th>
                                <th className="informacao-3" width="15%">Participação</th>
                                <th className="informacao-3" width="15%">Média do aluno</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Atividades;