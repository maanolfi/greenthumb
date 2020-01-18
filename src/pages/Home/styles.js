import styled from 'styled-components';
import pointer from '../../assets/icons/pointer.svg';

export const Container = styled.div`
  display: flex;

  .home-imgaside {
    width: 600px;
    height: 600px;
    margin-left: -50px;
  }
`;


export const HomeNav = styled(Container)`
    flex-direction: column;
    margin: 62px 0 0 174px;


    .home-logo {
      width: 208px;
      height: 25px;
      margin-left: 4px;
    }

    p {
      width: 433px;
      height: 240px;
      font-weight: bold;
      font-size: 66px;
      line-height: 80px;
      color: #0C261C;
      margin-top: 96px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      margin-top: 28px;
      background: #15573F;
      border-radius: 28px;
      width: 170px;
      height: 50px;
      cursor: url(${pointer}), auto;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;

      span {
        margin-right: 10px;
        width: 14px;
        height: 14px;
        border: 0.82px solid #fff;
        transition: .5s;

      }

      span.next {
        transform: rotate(-45deg);
        border-left: none;
        border-top: none;

        ::before {
          content: '';
          width: 26.28px;
          height: 0.81px;
          background-color: #fff;
          position: absolute;
          transform-origin: right;
          transform: rotate(45deg) translate(0,18.2px);
          transition: .5s;

        }

      }

    }

`
