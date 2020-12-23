import React from "react";
import { StyledCard, StyledImgCard, StyledDescription, StyledData, StyledName, StyledSocial, StyledIcon } from './Card.style';
import ImgCard from "../../Images/foto-tiago.jpg";
import ImgLinkedin from "../../Images/linkedin.svg";
import ImgEmail from "../../Images/o-email.svg";

export default function Card(){

  return(

    <>
      <StyledCard>
        <StyledImgCard src={ImgCard}/>
        <StyledDescription>
          <StyledName>
            <h2>Tiago Kiseliauskas</h2>
            <p>Frontend Developer</p>
          </StyledName>
          <StyledData>

          </StyledData>
          <StyledSocial>
            <StyledIcon src={ImgLinkedin}/>
            <StyledIcon src={ImgEmail}/>
          </StyledSocial>
        </StyledDescription>
      </StyledCard>
    </>
  )
}