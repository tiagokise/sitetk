import React from "react";
import { StyledSection, StyledSectionCard } from './Section.style';

export default function Section(){
const navItens = ([
  {name: "css", label: "CSS3"},
  {name: "html", label: "HTML5"},
  {name: "javaScript", label: "Javascript"},
  {name: "reactJS", label: "ReactJS"},
  {name: "nodeJS", label: "NodeJS"},
  {name: "git", label: "GIT"},
  {name: "mobileFirst", label: "Mobile First"},
  {name: "designResponsivo", label: "Design Responsivo"},
  {name: "api", label: "API"},
  {name: "jquery", label: "JQuery"},

])
  return(
    <>
      <StyledSection>
          <StyledSectionCard>
            <div>
              <p>Após 15 anos de experiência como designer gráfico, onde fiz a opção de mudar de área e me especializei em programação principalmente ReactJS. Em mais de 1 ano atuando como Frontend na Eureka Digital, pude aprender e aperfeiçoar meus conhecimentos.</p>
            </div>
            <div>
              <h1>Skills</h1>
              <div>
                {navItens.map(navItem =>
                 <p>{navItem.label}</p>
                )}
              </div>
            </div>
          </StyledSectionCard>
      </StyledSection>
    </>
  )
}
