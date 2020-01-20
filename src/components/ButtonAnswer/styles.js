import styled from 'styled-components';
import pointer from '../../assets/icons/pointer.svg';

export const Button = styled.button`
  width: 215px;
  height: 190px;
  background-color: #fff;
  margin: 35px 30px 37px 30px;
  border-radius: 5px;
  cursor: url(${pointer}), auto;

  :hover {
    transition: 0.4s;
    background: #fd9872;
    box-shadow: 0px 22px 24px #f6d7cb;
    border-radius: 5px;
    color: #fff;

    span {
      transition: 0.4s;
      background: url(${props => props.nameSvgWhite});
      background-size: 100px 82px;

      @media (max-width: 768px) {
        width: 42px;
        height: 42px;
        margin: 0 20px;
        background-size: 42px 42px;
      }
    }
  }

  p {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 265px;
    height: 75px;
    margin: 20px 30px 0 30px;

    p {
      margin: 0;
      align-self: center;
    }
  }
`;

export const IconSvg = styled.span`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 82px;
  background: url(${props => props.nameSvg});
  background-size: 100px 82px;

  @media (max-width: 768px) {
    align-self: center;
    width: 42px;
    height: 42px;
    margin: 0 20px;
    background-size: 42px 42px;
  }
`;
