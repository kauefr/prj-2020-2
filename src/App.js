import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import Alunos from './components/alunos/Alunos';
import Atividades from './pages/Atividades';
import Presenca from './pages/Presenca';
import Relatorios from './pages/Relatorios';
import Turmas from './pages/Turmas';
import CadastrarAluno from './components/cadastrarAluno/CadastrarAluno';


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/alunos/cadastrar' component={CadastrarAluno} />
        <Route path='/alunos' component={Alunos} />
        <Route path='/presenca' component={Presenca} />
        <Route path='/atividades' component={Atividades} />
        <Route path='/relatorios' component={Relatorios} />
        <Route path='/turmas' component={Turmas} />
      </Switch>
    </Router>
  );
}

export default App;
