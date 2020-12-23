import React from "react";
import { StyledHeader, StyledLogo } from './Header.style';


export default function Header(){

  return(

    <>
      <StyledHeader>
        <StyledLogo>
          <div className="name">
            <h1>Tiago</h1>
            <h2>Kiseliauskas</h2>
          </div>
          <h3>Frontend Developer</h3>
        </StyledLogo>

      </StyledHeader>
    </>
  )
}