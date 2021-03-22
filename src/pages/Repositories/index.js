import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styled';
import Logo from '../../img/Logo.png';

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/')
        }
    }, []);

    return (
        <>
        <S.Nav img src={Logo} alt="GitHub"></S.Nav>
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.LisItem>Repositório: { repository }</S.LisItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
        <S.Footer>
        <p>&copy; We Can Code 2021 | Gama Academy</p> 
        </S.Footer>
        </>
    )
}

