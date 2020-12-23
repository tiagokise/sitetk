import React from "react";
import { StyledSection, StyledSkills, StyledSectionCard } from './Section.style';


export default function Section(){

  return(
    <>
      <StyledSection>
        <StyledSkills>
          <h1>Skills</h1>
          <StyledSectionCard>
            <div>
              <p>Desenvolvedor frontend com experiência em ReactJS, Git, Azure, API... dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
            </div>
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS3</li>
                <li>JS</li>
                <li>React</li>
                <li>GIT</li>
                <li>API</li>
              </ul>
            </div>
          </StyledSectionCard>
        </StyledSkills> 
      </StyledSection>
    </>
  )
}