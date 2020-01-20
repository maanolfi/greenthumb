import styled from 'styled-components';
import pointer from '../../assets/icons/pointer.svg';

export const Container = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 0.05fr 1fr;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  footer {
    display: flex;
    width: 766px;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  nav .${props => props.idClick} {
    border: 2px solid #fd9872;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Header = styled(Wrapper)`
  max-width: 470px;
  text-align: center;
  color: #6e6e6e;
  font-weight: 300;

  img {
    max-width: 160px;
    height: 100px;
  }

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

  .error {
    color: #fd9872;
  }

  @media (max-width: 768px) {
    img {
      margin-top: 30px;
    }

    p {
      align-self: center;
      margin-top: 20px;
      max-width: 290px;
      max-height: 100px;
      font-size: 22px;
      line-height: 32px;
    }
    .title-small {
      margin-top: 5px;
      line-height: 25px;
    }
  }
`;

export const Button = styled.button`
  width: 126px;
  height: 50px;
  border: 1px solid #15573f;
  box-sizing: border-box;
  border-radius: 25px;
  color: #15573f;
  background-color: #fff;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  cursor: url(${pointer}), auto;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transition: 0.4s;
    color: #fff;
    background-color: #15573f;

    span {
      border: 0.82px solid #fff;
    }

    span.next {
      ::before {
        content: '';
        background-color: #fff;
        transform: rotate(45deg) translate(0, 17.9px) scale(1);
      }
    }
    span.prev {
      ::before {
        content: '';
        background-color: #fff;
        transform: rotate(45deg) translate(-5px, 4px) scale(1);
      }
    }
  }

  :disabled {
    border: 2px dashed #6e6e6e;
    background-color: #6e6e6e;
    color: #ffff;
    cursor: auto;
  }

  svg {
    margin: 0 5px;
  }

  span {
    width: 14px;
    height: 14px;
    border: 0.82px solid #15573f;
    transition: 0.5s;
  }

  span.next {
    margin-left: 20px;
    transform: rotate(-45deg);
    border-left: none;
    border-top: none;

    ::before {
      content: '';
      width: 19px;
      height: 1px;
      background-color: #15573f;
      position: absolute;
      transform-origin: right;
      transform: rotate(45deg) translate(-1.2px, 17.9px) scale(0);
      transition: 0.5s;
    }
  }

  span.prev {
    margin-right: 20px;
    transform: rotate(-45deg);
    border-right: none;
    border-bottom: none;

    ::before {
      content: '';
      width: 19px;
      height: 1px;
      background-color: #15573f;
      position: absolute;
      transform-origin: left;
      transform: rotate(45deg) translate(-5px, 4px) scale(0);
      transition: 0.5s;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;
