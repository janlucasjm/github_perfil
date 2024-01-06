import { useState } from 'react';

import Perfil from './components/Perfil';
import ReposList from './components/ReposList';
import Login from './components/Login';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
    <Login nomeUsuario={nomeUsuario} eventSearch={(e) => setNomeUsuario(e.target.value)}/>
    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} eventSearch={(e) => setNomeUsuario(e.target.value)}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    </>
  )
}

export default App;
