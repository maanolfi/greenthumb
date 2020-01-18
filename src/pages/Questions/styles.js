import styled from 'styled-components';
import pointer from '../../assets/icons/pointer.svg';


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

  nav .${props => props.idClick} {
    border: 2px solid #FD9872;
  }

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

  .error {
    color: red;
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
    cursor: url(${pointer}), auto;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      transition: 0.4s;
      color: #fff;
      background-color: #15573F;

      span {
        border: 0.82px solid #fff;
      }

      span.next {
          ::before {
            content: '';
            background-color: #fff;
            transform: rotate(45deg) translate(0,17.9px) scale(1);
          }
        }
      span.prev {
        ::before {
          content: '';
          background-color: #fff;
          transform: rotate(45deg) translate(-7px,4.99px) scale(1);;
        }
      }
    }

    :disabled {
      border: 2px dashed #6E6E6E;
      background-color: #6E6E6E;
      color: #ffff;
      cursor: auto;
    }

    svg {
      margin: 0 5px;
    }

    span {
        width: 14px;
        height: 14px;
        border: 0.82px solid #15573F;
        transition: .5s;

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
          background-color: #15573F;
          position: absolute;
          transform-origin: right;
          transform: rotate(45deg) translate(-1.2px,17.9px) scale(0);
          transition: .5s;

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
          background-color: #15573F;
          position: absolute;
          transform-origin: left;
          transform: rotate(45deg) translate(-6px,3px) scale(0);
          transition: .5s;

        }


      }




`
