import styled from 'styled-components';

export const StyledFooter = styled.div`
  grid-area: footer;
  bottom: 0px;
  padding: 25px 50px;
  height: auto;
  background-color: #555555;
  width: calc(100vw - 100px);
  color: white;
  font-size: 12px;
  font-weight: 500;
  margin: auto;
  display: flex;
  justify-content: space-between;

  a{
    color: white;
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
  }
`