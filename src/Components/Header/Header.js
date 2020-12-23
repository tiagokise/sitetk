import React from "react";
import { StyledHeader, StyledImgHeader } from './Header.style';
import ImgHeader from "../../Images/img-header.jpeg";


export default function Header(){

  return(

    <>
      <StyledHeader>
        <StyledImgHeader src={ImgHeader}/>

      </StyledHeader>
    </>
  )
}