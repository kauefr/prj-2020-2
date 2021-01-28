import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
import Alunos from './components/alunos/Alunos';
import Atividades from './pages/Atividades';
import Presenca from './pages/Presenca';
import Relatorios from './pages/Relatorios';
import Turmas from './components/turmas/Turmas';
import CadastrarAluno from './components/cadastrarAluno/CadastrarAluno';
import DetalhesTurma from './components/detalhesTurma/DetalhesTurma';
import CadastrarTurma from './components/cadastrarTurma/CadastrarTurma';
import NotasAluno from './components/notasAluno/NotasAluno';
import { Container, Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  function onHamburgerClick(event) { setSidebarVisible(!sidebarVisible); }


  return (
    <Sidebar.Pushable>
      <Sidebar visible as={Menu} vertical>
        <Menu.Item link header as={Link} to="/">SIGEPRO</Menu.Item>
        <Menu.Item link as={Link} to="/alunos">
          <Icon name="user"/>
          Alunos
          </Menu.Item>
        <Menu.Item link as={Link} to="/turmas">
          <Icon name="users"/>
          Turmas</Menu.Item>
      </Sidebar>
      <Sidebar.Pusher content={<Container>asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf </Container>} />
        
        {/* <Switch> 
          <Route path='/' exact component={Dashboard} />
          <Route path='/alunos/cadastrar' component={CadastrarAluno} />
          <Route path='/notas/:id' component={NotasAluno} />
          <Route path='/alunos' component={Alunos} />
          <Route path='/presenca' component={Presenca} />
          <Route path='/atividades' component={Atividades} />
          <Route path='/relatorios' component={Relatorios} />
          <Route path='/turmas/cadastrar' component={CadastrarTurma} />
          <Route path='/turmas/:id' component={DetalhesTurma} />
          <Route path='/turmas' component={Turmas} />
        </Switch> */}
      
    </Sidebar.Pushable>
    //   <Container fluid>

    //     <Container >
    //       asdfasdf
    //     </Container>
    //   </Container>

    // <>

    //   <Container fluid>
    //     asdfasdf
    // </Container>
    // </>
    // <>
    // <Menu vertical fixed="left">
    //   <Link to="/" component={Menu.Header}>SIGEPRO</Link>
    //   <Menu.Header link as={Link} to="/">SIGEPRO</Menu.Header>
    //   <Menu.Item link as={Link} to="/alunos">Alunos</Menu.Item>
    // </Menu>
    // <Grid columns={1}>
    //   <Grid.Column>
    //     <Menu>
    //       <Menu.Item>SIGEPRO</Menu.Item>
    //     </Menu>
    //   </Grid.Column>
    //   <Grid.Column>

    //   </Grid.Column>
    // </Grid>
    //   // {/* <Menu attached='top'>
    //   //   <Menu.Item icon="bars" onClick={onHamburgerClick}/>
    //   // </Menu>

    //   // <Sidebar.Pushable>
    //   //   <Sidebar as={Menu} vertical visible={sidebarVisible} onHide={()=>setSidebarVisible(false)} >
    //   //     <Menu.Item header as={Link} to="/">SIGEPRO</Menu.Item>
    //   //     <Menu.Item link as={Link} to="/alunos">Alunos</Menu.Item>
    //   //   </Sidebar>
    //   //   <Sidebar.Pusher>
    //   //     <Switch>
    //   //       <Route path='/' exact component={Dashboard} />
    //   //       <Route path='/alunos/cadastrar' component={CadastrarAluno} />
    //   //       <Route path='/notas/:id' component={NotasAluno} />
    //   //       <Route path='/alunos' component={Alunos} />
    //   //       <Route path='/presenca' component={Presenca} />
    //   //       <Route path='/atividades' component={Atividades} />
    //   //       <Route path='/relatorios' component={Relatorios} />
    //   //       <Route path='/turmas/cadastrar' component={CadastrarTurma} />
    //   //       <Route path='/turmas/:id' component={DetalhesTurma} />
    //   //       <Route path='/turmas' component={Turmas} />
    //   //     </Switch>
    //   //   </Sidebar.Pusher>
    //   // </Sidebar.Pushable> */}
    // </>
  );
}

export default App;
