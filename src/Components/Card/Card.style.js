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
  margin-bottom: 30px;


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
      margin-bottom: 30px;
      max-width: 800px;
      height: 357px;
    }
    @media (min-width: 1024px){
      /* height: auto; */
      max-width: 1000px;


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
  grid-template-rows: auto auto 50px;

  @media screen{
    @media (min-width: 768px){
      grid-template-rows: 80px auto 50px;
      height: -webkit-fill-available;


    }
    @media (min-width: 1024px){
      grid-template-rows: 80px 200px 50px;
      height: -webkit-fill-available;
    }
  }
`
export const StyledData = styled.div`
  grid-area: adressCard;
  margin-bottom: 20px;
  p{
    font-weight: 600;
    >b{
      font-weight: 300;
    }
  }
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
    margin-bottom: 20px;
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
    margin-bottom: 20px;
  }
`
export const StyledSocial = styled.div`
  grid-area: socialCard;
  text-align: right;
  display: flex;
  position: absolute;
  right: 0;
  align-items: center;
  justify-content: center;
  overflow: visible;

  a{
    margin-right: 15px;
    transition: transform 0.3s;
    :hover{
      transform: scale(1.2);
    }

    @media (min-width: 1024px){

      margin: 7px;
    }

    :last-child{
      margin-right: 10px;
      width: 35px;
    }
  }
`
export const StyledIcon = styled.img`
  height: auto;
  object-fit: contain;
  cursor: pointer;
  width: 30px;
  margin-right: 15px;
  :last-child{
    margin-right: 0px;
    width: 35px;
  }

`