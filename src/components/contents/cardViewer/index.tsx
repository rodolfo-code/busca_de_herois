import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AppContext from '../../../contexts/apiContext/Context';
import Card from './card';
import ContainerHeader from './header';

import * as S from './styles';

const CardViewer = () => {
  const { characters: data } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(
        'https://api.giphy.com/v1/gifs/search?q=cats&api_key=im1W89xJPwYw9XkaiNxMYCS2AZGPsOzp&limit=16',
      )
      .then((resp) => console.log(resp));
  }, []);

  return (
    <>
      <ContainerHeader />
      <S.Container>
        {data ? (
          data.map((char) => {
            return <Card key={char.id} character={char} />;
          })
        ) : (
          <p>Carregando...</p>
        )}
      </S.Container>
    </>
  );
};

export default CardViewer;
