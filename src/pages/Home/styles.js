import styled from 'styled-components';
import pointer from '../../assets/icons/pointer.svg';

import HomeImg from '../../assets/illustrations/home.png'
import MobileImg from '../../assets/illustrations/home-mobile.png'

export const Container = styled.div`
  display: flex;

  .img {
    margin-top: 20px;
    width: 779px;
    height: 738px;
    margin-left: -50px;
    background-image: url(${HomeImg});
    background-repeat: no-repeat;

  }

  @media (max-width: 768px) {
    flex-direction: column;

    .img {
      width: 100vw;
      height: 50vh;
      margin: 34px 0 0 0;
      background-image: url(${MobileImg}) center;
      background-repeat: no-repeat;
      background-size: 100vw 50vh;
    }

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
      width: 174px;
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

    @media (max-width: 768px) {
      margin: 0;

      .home-logo {
        align-self: center;
        margin-top: 24px;
        width: 166px;
        height: 20px;
        margin-left: 4px;
      }

      p {
        align-self: center;
        width: 296px;
        height: 86px;
        font-weight: bold;
        font-size: 35px;
        line-height: 43px;
        text-align: center;
        color: #0C261C;
        margin-top: 45px;
      }

      a {
        margin-top: 35px;
        align-self: center;
      }
    }

`
