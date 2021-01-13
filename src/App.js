import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard'
import Alunos from './components/alunos/Alunos';
import Atividades from './pages/Atividades';
import Presenca from './pages/Presenca';
import Relatorios from './pages/Relatorios';
import Turmas from './pages/Turmas';
import AlunoTable from './AlunoTable';


function App() {
  return (
    /* <> 
    *Deixei seu código comentado pois criei uma pasta pages
    pra ficar separado, não sabia se o mocks ia ser definitivo,
    pode mudar se quiser, era só pra eu testar o layout.
    pensei em deixar componentes separados, exemplo: alunos js ser diferente de listaAlunos ou BuscaAlunos
    Mas não sei se é uma ideia boa, ve o que acha melhor.  
    
     <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/alunos">
         <AlunoTable />
       </Route>
     <Route exact path="/">
         <Dashboard />
       </Route>
     </Switch>
    </BrowserRouter>*/
    
    <>
    <Router>
      <Sidebar />
      <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/alunos' component={Alunos} />
          <Route path='/presenca' component={Presenca} />
          <Route path='/atividades' component={Atividades} />
          <Route path='/relatorios' component={Relatorios} />
          <Route path='/turmas' component={Turmas} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
