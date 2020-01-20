import styled from 'styled-components';
import pointer from '../../assets/icons/pointer.svg';


export const Container = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 0.05fr 1fr;

  @media (max-width: 768px) {
    width: 100vw;
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    overflow-y: hidden;
    overflow-x: scroll;
  }
`

export const Header = styled(Wrapper)`
  max-width: 598px;

  img {
    margin-top: 30px;
  }

  p {
    font-weight: bold;
    font-size: 65px;
    line-height: 79px;
    text-align: center;
    margin-top: 48px;
    color: #0C261C;
  }

  @media (max-width: 768px) {
    width: 80vw;

    img {
      margin-top: 30px;
      width: 146px;
      height: 72px;
    }

    p {
      margin-top: 29px;
      font-size: 40px;
      line-height: 49px;
    }
  }
`
 export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 20px;

    @media (max-width: 768px) {
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 30px;
      width: 400%;
      height: inherit;

      .plants-card {


        width: 25%;
        height: 100%;
        text-align: center;
        display: inline-block;
        margin-right: -4px;
      }
    }

    .plants-card {
      margin: 0 10px;
      flex: 1 1 268px;
      margin-top: 78px;
      max-width: 268px;
      height: 342px;
      background-color: #fff;

      display: flex;
      flex-direction: column;
      padding: 13px 30px;


      img {
        align-self: center;
        width: 168px;
        height: 168px;
      }


      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
        width: 213px;
        height: 50px;
        margin-top: 13px;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #15573F;
        box-sizing: border-box;
        color: #15573F;
        background-color: #fff;
        cursor: url(${pointer}), auto;
        :hover {
          transition: 0.4s;
          color: #fff;
          background-color: #15573F;
        }

    }

      p {
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        color: #15573F;
      }

      span {
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
        color: #6E6E6E;
        margin-top: 5px;
      }

      @media (max-width: 768px) {
        margin-top: 10px;
    }
    }
 `
