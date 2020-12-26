import styled from 'styled-components';

export const StyledSection = styled.div`
  grid-area: section;
  margin: 0 auto 40px;
`

export const StyledSectionCard = styled.div`
  display: flex;
  width: 80vw;
  height: auto;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  flex-direction: column;
  margin-bottom: 30px;

  h1{
    position: relative;
    font-size: 1.5em;
    color: #2e3336;
    text-align: center;
    margin: 0 0 20px 0;
    line-height: 1.8;
    z-index: 100;
    background-color: #1977c2;
    color: #ffffff;
  }


  @media screen{
    @media (min-width: 768px){
      flex-direction: row;
      height: 290px;
    }
    @media (min-width: 1024px){
      height: 226px;
      max-width: 1000px;
    }
  }

  >div{
    padding: 20px;
    width: auto;
    
    @media screen{
      @media (min-width: 500px){
        /* width: 50%; */
        >div{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 160px;
          >p{
            margin: 0 0 10px 0;
          }
        }
      }
      @media (min-width: 768px){
        width: 50%;
        /* >div{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 160px;
          >p{
            margin: 0 0 10px 0;
          }
        } */
      }
      @media (min-width: 1024px){
        >div{
          height: 140px;
        }
      }
    }
    :first-child{
      width: auto;
      padding: 20px 20px 0 20px;
      @media screen{
        @media (min-width: 768px){
          width: 50%;

        }
      }
    }
    >p{
      line-height: 1.8;
      color: #2e3336;
      font-size: 1.1em;
      font-weight: 300;
      margin: 0;
    }
    >ul{
      line-height: 1.4;
    }
  }
`