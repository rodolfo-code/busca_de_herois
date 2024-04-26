import axios from "axios";
import React, { useContext, useEffect } from "react";
import AppContext from "../../../contexts/apiContext/Context";
import Card from "./card";
import ContainerHeader from "./header";

import * as S from "./styles";

const CardViewer = (props) => {
  const { characters: data } = useContext(AppContext);

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

export async function getServerSideProps() {
  return {
    props: {
      PRIVATE_KEY: "process.env.PRIVATE_KEY",
    },
  };
}
