import styled from 'styled-components';

export const StyledHeader = styled.div`
    /* height: 200px;
    background-color: #245C8D;
    position: relative;
    width: 100%;
    padding: 40px 10vw;
    grid-area: headerTK; */

    background-color: #000000;
    grid-area: headerTK;
    contain: content;



`
export const StyledImgHeader = styled.img`
  width: 150%;
  object-fit: cover;
  /* transition: all 15s;   */
  /* display: none; */
  animation-name: example;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;  


  @keyframes example {
    from {  
      margin-left: 0px;
      width: 280%;
      transform: rotate(0deg);
      margin-top: -50px;

    }
    to {
      margin-left: -160px;
      width: 200%;
      transform: rotate(5deg);
      margin-top: -50px;

    }
  }

  /* :hover{
    margin-left: -200px;
    width: 200%;
    transform: rotate(10deg)
  } */
`