/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";

import * as S from "./styles";
import * as B from "../../../Button";
import { CharProps } from "../../../../types/character";

// import trashIcon from "../../../../../public/Icon-trash.svg";
// import editIcon from "../../../../../public/Icon-edit.svg";
import ModalContext from "../../../../contexts/modalContext/Context";
import { GrEdit, GrTrash } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ character: { thumbnail, name, ...char } }) => {
  const { handleDeleteModal, handlePopup } = useContext(ModalContext);
  const imagePath = `${thumbnail.path}/landscape_large.${thumbnail.extension}`;

  return (
    <S.Container>
      <S.CardContent>
        <img src={imagePath} alt="" />
        <span>
          <hr />
          {name}
        </span>
      </S.CardContent>
      <S.CardFooter>
        <B.EditAndDeleteButton onClick={handleDeleteModal}>
          <GrTrash />
          <p>Excluir</p>
        </B.EditAndDeleteButton>

        <B.EditAndDeleteButton onClick={handlePopup}>
          <GrEdit />
          <p>Editar</p>
        </B.EditAndDeleteButton>
      </S.CardFooter>
    </S.Container>
  );
};

export default Card;
