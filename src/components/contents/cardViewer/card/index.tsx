/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';

import * as S from './styles';
import * as B from '../../../Button';
import { CharProps } from '../../../../types/character';

import trashIcon from '../../../../../public/Icon-trash.svg';
import editIcon from '../../../../../public/Icon-edit.svg';
import ModalContext from '../../../../contexts/modalContext/Context';

// { character: { name, images } }: CharProps

const Card = ({ character }) => {
  const { handleDeleteModal, handlePopup } = useContext(ModalContext);

  // const imagePath = `${thumbnail.path}/landscape_large.${thumbnail.extension}`;
  console.log(character.images);

  return (
    <S.Container>
      <S.CardContent>
        <img src={character.images.original.url} alt="" />
        <span>
          <hr />
          {/* {name} */}
        </span>
      </S.CardContent>
      <S.CardFooter>
        <B.EditAndDeleteButton onClick={handleDeleteModal}>
          <img src={trashIcon} alt="Icone Excluir" />
          <p>Excluir</p>
        </B.EditAndDeleteButton>

        <B.EditAndDeleteButton onClick={handlePopup}>
          <img src={editIcon} alt=" icone editar" />
          <p>Editar</p>
        </B.EditAndDeleteButton>
      </S.CardFooter>
    </S.Container>
  );
};

export default Card;
