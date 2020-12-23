import React from "react";
import { StyledHeader, StyledLogo, StyledSocial } from './Header.style';


export default function Header(){

  return(

    <>
      <StyledHeader>
        <StyledLogo>
          <h1 className="name">Tiago Kiseliauskas</h1>
          <h3>Frontend Developer</h3>
        </StyledLogo>
        <StyledSocial>

        </StyledSocial>
      </StyledHeader>
    </>
  )
}