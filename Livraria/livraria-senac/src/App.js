import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar o componente Routes
import MaisBuscados from './Components/maisBuscados/maisBuscados';
import MenuBar from './Components/navbar/MenuBar';
import Pesquisa from './Components/pesquisa/Pesquisa';
import Cadastro from './Components/cadastro/cadastro';
import Login from './Components/login/login';

function App() {
  return (
    <div className='App'>
      <MenuBar />
      <Routes>
        <Route path='/' element={
          <>
            <header className='App-header'>
              <Pesquisa />
            </header>
            <MaisBuscados />
          </>
        } />

        <Route path='/cadastro' element={
          <>
          <Cadastro />
          </>
        } />

        <Route path='/login' element={
          <>
          <Login />
          </>
        } />

      </Routes>
    </div>
  );
}

export default App;
