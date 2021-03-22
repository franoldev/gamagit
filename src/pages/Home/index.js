import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styled';
import Logo from '../../img/Logo.png';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
  }

  return (
    
    
      <>
      <S.Nav img src={Logo} alt="GitHub"></S.Nav>
      
      <S.Title>Faça a busca de repositórios do GitHub digitando apenas um nome de usuário!</S.Title>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button"  class="effect " onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg> Repositório não localizado. Tente novamente!</S.ErrorMsg> : ''}
        
        <S.Footer>
        <p>&copy; We Can Code 2021 | Gama Academy</p> 
        </S.Footer>
        </>
   
   
  );
}

export default App;
