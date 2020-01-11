import styled from 'styled-components';



export const Container = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 0.05fr 1fr;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled(Wrapper)`
  max-width: 598px;

  p {    
    font-weight: bold;
    font-size: 65px;
    line-height: 79px;
    text-align: center;
    margin-top: 48px;
    color: #0C261C;
  }
`
 export const Main = styled.main`  
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
    padding-bottom: 20px;
    
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
      

      a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;      
      background: #15573F;
      border-radius: 28px;
      width: 213px;
      height: 50px;
      margin-top: 13px;
      
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #FFFFFF;      

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
    }
 `