import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: auto;
  background-color: #6495ED;
  font-size: 1em;
  text-align: center;
  padding: 10px;
`
export const StyledLogo = styled.div`
  width: 50vw;
  text-align: center;
  margin: 0 auto;

  .name{
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;


    h1{
      margin: 0 5px 0 0;
      font-size: 1em;
      font-weight: 400;
    }
    h2{
      margin: 0;
      font-size: 1em;
      font-weight: 400;
    }
  }

  h3{
    line-height: 1.5;
    margin: 0 auto;
    font-size: 1em;
    font-weight: 500;
  }
`