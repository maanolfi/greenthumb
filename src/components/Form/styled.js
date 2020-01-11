import styled from 'styled-components'



export const Div = styled.div`

    span {
      font-family: 'Semibold', 'Regular','Source Sans Pro';
      letter-spacing: 0.84px;
      color: #170C3A;
      }


      form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin-top: 30px;


        input {
          margin: 0px 0px 10px 0px;
          background: #EBEAED 0% 0% no-repeat padding-box;
          border: 1px solid #DEDCE1;
          border-radius: 5px;
          text-align: left;
          font-family: 'Regular', 'Source Sans Pro';
          padding: 5px;
          letter-spacing: 0;
          color: #170C3A;
        }

        label {
          text-align: left;
          font-family: 'Semibold', 'Source Sans Pro';
          letter-spacing: 0.4px;
          color: #170C3A;
        }

        .button {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }

        button {
          width: 174px;
          height: 50px;
          background: #365DF0 0% 0% no-repeat padding-box;
          border-radius: 5px;

          text-align: center;
          font-family: 'Semibold', 'Source Sans Pro';
          letter-spacing: 0.36px;
          color: #FFFFFF;


        }

      }

`
