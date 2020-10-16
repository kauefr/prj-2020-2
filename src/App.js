import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import AlunoTable from './AlunoTable';
import Dashboard from './Dashboard'

function App() {
  return (
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
    </BrowserRouter>
  );
}

export default App;
