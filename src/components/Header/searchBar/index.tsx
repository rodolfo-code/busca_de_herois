/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";

import { input, KeyDown } from "../../../types/character";
import * as S from "./styles";
import AppContext from "../../../contexts/apiContext/Context";

import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { Console } from "console";

// import lupa from '../../../../public/lupa.svg';

const SearchBar = () => {
  const { setSearchTerm } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }: input) => {
    setInputValue(target.value);
  };

  const getCharacters = () => {
    setSearchTerm(inputValue);
    setInputValue("");
  };

  const handleClick = () => {
    getCharacters();
  };

  const handleKeyDown = (e: KeyDown) => {
    if (e.key === "Enter") {
      getCharacters();
    }
  };

  return (
    <S.Container>
      <S.Input type="text" placeholder="Digite aqui sua busca" onChange={handleChange} onKeyDown={handleKeyDown} value={inputValue} />
      <button onClick={handleClick}>
        <CiSearch size={35} />
        {/* <img src={lupa} alt="imagem do botao de pesquisa" /> */}
      </button>
    </S.Container>
  );
};

export default SearchBar;
