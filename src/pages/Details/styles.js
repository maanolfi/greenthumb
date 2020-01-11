import styled from 'styled-components';



export const Container = styled.div`
  background-color: #fff !important;
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 0.05fr 1fr;

  h2 {
    font-weight: bold;
    color: #0C261C;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ContentDetails = styled.div`   
  width: 381px;
  height: 512px;  
  display: flex;
  flex-direction: column;

 .img-plants {
   
    max-width: 300px;
    max-height: 300px;    
    align-self: center;
  }

  h2 {    
  font-size: 50px;
  line-height: 55px;

  }

  p {      
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    margin: 10px 0 25px 0;
    color: #D6D6D6;
  }

  span p {
  margin-top: 30px;
  color: #6E6E6E;
  }

`

export const ContentForm = styled.div`   
  width: 381px;
  height: 512px;
  background-color: #f6f6f6;     
  padding: 40px;

  h2 {    
    font-size: 40px;
    line-height: 37px;
  }

  p {      
    font-weight: 300;
    font-size: 16px;
    line-height: 29px;
    color: #6E6E6E;
    margin-top: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label:nth-child(3) {
      margin-top: 30px;
    }

    label {        
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;
      color: #6E6E6E;
      margin-bottom: 5px;
    }

    input {
      width: 285px;
      height: 40px;
      background: #FFFFFF;
      border-radius: 19px;
      border: none;        
      font-weight: 300;
      font-size: 14px;
      line-height: 27px;
      color: #D0D0D0;
      padding-left: 24px;
    }

    button {
      align-self: flex-end;
      width: 138px;
      height: 50px;
      border: 1px solid #15573F;
      box-sizing: border-box;
      border-radius: 25px;
      background-color: #f6f6f6;
      margin-top: 30px;
    }
  }
   
`