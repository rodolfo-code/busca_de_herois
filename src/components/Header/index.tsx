/* eslint-disable @next/next/no-img-element */
import React from "react";

import SearchBar from "./searchBar";
import * as S from "./styles";
import logo_impar from "../../../public/logo-teste.svg";
import Image from "next/image";

const Header = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <Image src={logo_impar} width={192.03} layout="fill" alt="logo impar" />
      </S.LogoContainer>

      <SearchBar />
    </S.Container>
  );
};

export default Header;
