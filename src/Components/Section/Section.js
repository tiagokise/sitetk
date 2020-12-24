import React from "react";
import { StyledSection, StyledSkills, StyledSectionCard } from './Section.style';

export default function Section(){
const navItens = ([
  {name: "css", label: "CSS3"},
  {name: "html", label: "HTML5"},
  {name: "javaScript", label: "Javascript"},
  {name: "reactJS", label: "ReactJS"},
  {name: "git", label: "GIT"},
  {name: "mobileFirst", label: "Mobile First"},
  {name: "designResponsivo", label: "Design Responsivo"},
  {name: "api", label: "API"},
  {name: "jquery", label: "JQuery"},

])
  return(
    <>
      <StyledSection>
        <StyledSkills>
          <h1>Skills</h1>
          <StyledSectionCard>
            <div>
              <p>Após 15 anos de experiência com designer gráfico, onde fiz a opção de mudar de área e me especializei em programação principalmente ReactJS. Em mais de 1 ano atuando com Frontend na Eureka Digital, pude aprender e aperfeiçoar meus conhecimentos.</p>
            </div>
            <div>
                {navItens.map(navItem =>
              <p>{navItem.label}</p>
              )}
            </div>
          </StyledSectionCard>
        </StyledSkills> 
      </StyledSection>
    </>
  )
}