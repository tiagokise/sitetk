import React from "react";
import { StyledBody, StyledImgBody, StyledDescription, StyledSkills } from './Body.style';
import ImgBody from "../../Images/img-header.jpeg";

export default function Body(){

  return(

    <>
      <StyledBody>
        <StyledImgBody src={ImgBody}/>
        <StyledDescription>Desenvolvedor frontend com experiência em ReactJS, Git, Azure, API... dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</StyledDescription>
        <StyledSkills>
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS3</li>
            <li>JS</li>
            <li>React</li>
            <li>GIT</li>
            <li>API</li>
          </ul>
        </StyledSkills>
      </StyledBody>
    </>
  )
}