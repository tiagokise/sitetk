import React from "react";
import { StyledCard, StyledImgCard, StyledDescription } from './Card.style';
import ImgCard from "../../Images/foto-tiago.jpg";

export default function Card(){

  return(

    <>
      <StyledCard>
        <StyledImgCard src={ImgCard}/>
        <StyledDescription>
          <p>
            Desenvolvedor frontend com experiência em ReactJS, Git, Azure, API... dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t
          </p>
          
        </StyledDescription>
      </StyledCard>
    </>
  )
}