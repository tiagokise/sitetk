import styled from 'styled-components';

export const StyledSection = styled.div`
  grid-area: section;
  margin: 0 auto 40px;
`
export const StyledSkills = styled.div`

  h1{
    color: #2e3336;
    text-align: center;
  }

`
export const StyledSectionCard = styled.div`
  display: flex;
  width: 80vw;
  height: auto;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  flex-direction: column;

  @media screen{
    @media (min-width: 768px){
      flex-direction: row;

    }
  }

  >div{
    padding: 20px;
    width: auto;

    @media screen{
      @media (min-width: 768px){
        width: 20%;

      }
    }
    :first-child{
      width: auto;
      @media screen{
        @media (min-width: 768px){
          width: 70%;

        }
      }
    }
    >p{
      line-height: 1.4;
      color: #2e3336;
    }
    >ul{
      line-height: 1.4;
    }
  }
`