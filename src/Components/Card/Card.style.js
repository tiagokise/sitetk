import styled from 'styled-components';

export const StyledCard = styled.div`
  grid-area: card;
  contain: content;
  position: relative;
  width: 80vw;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: -150px auto 0;
  display: grid;
  margin: -150px auto 0;
  grid-template-areas:
      'imgCard'
      'dataCard';
  grid-template-columns: 100%;
  height: auto;
  grid-template-rows: auto;


  ::after{
    display: block;
    content: '';
    background-color: #1977c2;
    width: 100%;
    height: 66px;
    position: absolute;
    bottom: 0px;
    z-index: -1;
  }

  @media screen{
    @media (min-width: 768px){
      grid-template-areas:
      'imgCard dataCard'
      'imgCard dataCard';
      grid-template-columns: 280px auto;
      height: 300px;
    }
  }
`
export const StyledImgCard = styled.img`
  grid-area: imgCard;
  width: auto;
  object-fit: cover;
  width: 100%;
  height: 100vw;
  max-width: unset;

  @media screen{
    @media (min-width: 768px){
      height: 120%;
      max-width: 280px;
    }
  }
`
export const StyledDescription = styled.div`
  grid-area: dataCard;
  margin: 20px 30px 0px;
  display: grid;
  contain: content;
  grid-template-areas:
      'nameCard'
      'adressCard'
      'socialCard';
  /* grid-template-columns: 47vw; */
  color: #292b2c;
  grid-template-rows: auto 59px 50px;

  @media screen{
    @media (min-width: 768px){
      grid-template-rows: 60px auto 50px;

    }
  }
`
export const StyledData = styled.div`
  display: adressCard;
`
export const StyledName = styled.div`
  position: relative;
  grid-area: nameCard;

  h3, h2{
    display: inline;
    margin-right: 15px;
  }
  h2{
    text-transform: uppercase;
  }
  p{
    margin: 0;
    margin-top: 5px;
    font-weight: 300;
    font-size: 1.5em;
  }
  ::after{
    display: block;
    content: '';
    background-color: #cdcdcd;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -20px;
  }
`
export const StyledSocial = styled.div`
  grid-area: socialCard;
  text-align: right;
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;

`
export const StyledIcon = styled.img`
  width: 35px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  
  :first-child{
    width: 30px;
    margin-right: 15px;
  }
`