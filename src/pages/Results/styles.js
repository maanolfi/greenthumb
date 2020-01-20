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
`;

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
    color: #0c261c;
  }

  @media (max-width: 768px) {
    width: 300px;

    img {
      width: 106px;
      height: 52px;
    }

    p {
      margin-top: 10px;
      font-size: 20px;
      line-height: 29px;
    }
  }
`;
export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    width: 400%;
    height: inherit;

    .plants-card {
      width: 30%;
      height: 80%;
      display: inline-block;
      margin-right: 0;
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
      border: 1px solid #15573f;
      box-sizing: border-box;
      color: #15573f;
      background-color: #fff;
      cursor: url(${pointer}), auto;
      :hover {
        transition: 0.4s;
        color: #fff;
        background-color: #15573f;
      }
    }

    p {
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      color: #15573f;
    }

    span {
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
      color: #6e6e6e;
      margin-top: 5px;
    }

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
`;
