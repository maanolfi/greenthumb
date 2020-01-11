import styled from 'styled-components';


export const Container = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 0.05fr 1fr;

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      }

    footer {
      display: flex;
      width: 766px;
      justify-content: space-between;
    }

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Header= styled(Wrapper)`
  max-width: 470px;
  text-align: center;
  color: #6E6E6E;
  font-weight: 300;

  p {
    margin-top: 30px;
    font-size: 30px;
    line-height: 45px;
  }

  .title-small {
    font-size: 14px;
    line-height: 39px;
    margin: 0;
  }
`

export const Button = styled.button`
    width: 126px;
    height: 50px;
    border: 1px solid #15573F;
    box-sizing: border-box;
    border-radius: 25px;
    color: #15573F;
    background-color: #fff;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;

    :hover {
      transition: 0.4s;
      color: #fff;
      background-color: #15573F;


    }




`
