/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";

import { TfiFaceSad } from "react-icons/tfi";

// import iconSad from '../../../../public/icon-sad.svg';
import ModalContext from "../../../contexts/modalContext/Context";

import * as B from "../../Button";
import * as S from "./styles";

const Popup = () => {
  const { handlePopup } = useContext(ModalContext);

  return (
    <S.Overlay>
      <S.Container>
        <B.CloseButton onClick={handlePopup}>X</B.CloseButton>
        <p>Infelizmente esta funcionalidade ainda não foi implementada!</p>
        {/* <img src={iconSad} alt="Carinha triste" /> */}
        {/* <TfiFaceSad /> */}
      </S.Container>
    </S.Overlay>
  );
};

export default Popup;
