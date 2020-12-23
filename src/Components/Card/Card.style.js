import styled from 'styled-components';

export const StyledCard = styled.div`
    grid-area: card;
    contain: content;
    width: 80vw;
    height: 300px;
    background-color: white;
    position: absolute;
    top: 180px;
    left: 10vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;

`
export const StyledImgCard = styled.img`
    width: auto;
    height: 100%;
`
export const StyledDescription = styled.div`
  /* margin: 20px; */
  p{
    margin: 30px;
    line-height: 1.6;
    font-weight: 300;
  }
`
