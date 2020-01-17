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
    min-width: 200px;
    max-height: 300px;
    min-height: 200px;
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

  span {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;

      img {
        max-width: 30px;
        max-height: 30px;
        margin: 15px 10px;

      }

      p {
        color: #6E6E6E;
        margin: 0;
      }

    }


  }



`
