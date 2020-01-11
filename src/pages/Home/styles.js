import styled from 'styled-components';

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

      font-weight: 600;
      font-size: 16px;
      line-height: 20px;

    }

`