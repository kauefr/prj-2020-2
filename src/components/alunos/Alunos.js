import React from 'react'
import './Alunos.css';


function Alunos() {
    return ( 
    
        <div class="container" >
        
     <div class = "options" > 
        <h1>Alunos</h1>
        <button class = "button btn-cadastrar"> Cadastrar Aluno</button>
     
            <input type="text" class= "search" name="search" placeholder="Pesquisar Aluno.." >
                </input>
       </div>   
          
    
        <table id="contact-detail" class="table" cellspacing="0" width="100%" >
            <thead>
                <tr>
                    <th class="informacao-1" width="30%">Nome</th>
                  
                    <th class="informacao-3" width="15%">RA</th>
                    <th class="informacao-4" width="10%">Turma</th>
                    <th class="informacao-5" width="15%">Ano</th>
                </tr>
            </thead>

            <tbody />
                <tr>
                    <td class="informacao-1">nome</td>
                    <td class="informacao-3">156165</td>
                    <td class="informacao-4">1ª série C</td>
                    <td class="informacao-5">2018</td>
                </tr>
                <tr>
                    <td class="informacao-1">nome</td>
                    <td class="informacao-3">156165</td>
                    <td class="informacao-4">1ª série C</td>
                    <td class="informacao-5">2018</td>
                </tr>
                <tr>
                    <td class="informacao-1">nome</td>
                    <td class="informacao-3">156165</td>
                    <td class="informacao-4">1ª série C</td>
                    <td class="informacao-5">2018</td>
                </tr>
                <tr>
                    <td class="informacao-1">nome</td>
                    <td class="informacao-3">156165</td>
                    <td class="informacao-4">1ª série C</td>
                    <td class="informacao-5">2018</td>
                </tr>
                <tr>
                    <td class="informacao-1">nome</td>
                    <td class="informacao-3">156165</td>
                    <td class="informacao-4">1ª série C</td>
                    <td class="informacao-5">2018</td>
                </tr>
                </table>
</div>

          
    
        



           
     
 );
}

export default Alunos;