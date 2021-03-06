import React from "react";
import { StyledCard, StyledImgCard, StyledDescription, StyledData, StyledName, StyledSocial, StyledIcon } from './Card.style';
import ImgCard from "../../Images/foto-tiago.jpg";
import ImgLinkedin from "../../Images/linkedin.svg";
import ImgGithub from "../../Images/github.svg";
import ImgEmail from "../../Images/o-email.svg";

export default function Card(){

const cardItens = ([
  {name: "nome", label: "Nome", value: "Tiago Kiseliauskas"},
  {name: "idade", label: "Idade", value: "39 anos"},
  {name: "fone", label: "Fone", value: "11 986166687"},
  {name: "cidade", label: "Cidade", value: "São Paulo"},
  {name: "email", label: "Email", value: "tiago.kise@hotmail.com"},
])

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
            <div>
              {cardItens.map(cardItem =>
                <p><b>{cardItem.label} </b>{cardItem.value}</p>
              )}
            </div>
          </StyledData>
          <StyledSocial>
            <a href="https://www.linkedin.com/in/tiago-kiseliauskas-883271147"><StyledIcon src={ImgLinkedin}/></a>  
            <a href="https://github.com/tiagokise"><StyledIcon src={ImgGithub}/></a>  
            <a href="mailto:tiago.kise@hotmail.com"><StyledIcon src={ImgEmail}/></a>  
          </StyledSocial>
        </StyledDescription>
      </StyledCard>
    </>
  ) 
}
