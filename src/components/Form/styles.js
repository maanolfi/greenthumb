import styled from 'styled-components';

export const ContentForm = styled.div`
  width: 381px;
  height: 512px;
  background-color: #f6f6f6;
  padding: 40px;
  font-family: Montserrat;
  font-style: normal;

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

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
    .error {
      color: red;
    }

    .input {
      border: 1px solid #F71D1D;
      ::-webkit-input-placeholder {
          color: #F71D1D;
        }
        :-moz-placeholder { /* Firefox 18- */
          color: #F71D1D;
        }
        ::-moz-placeholder {  /* Firefox 19+ */
          color: #F71D1D;
        }
        :-ms-input-placeholder {
          color: #F71D1D;
        }
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
      color: #0C261C;
      padding-left: 24px;

      ::-webkit-input-placeholder {
          color: #D0D0D0;
        }
        :-moz-placeholder { /* Firefox 18- */
          color: #D0D0D0;
        }
        ::-moz-placeholder {  /* Firefox 19+ */
          color: #D0D0D0;
        }
        :-ms-input-placeholder {
          color: #D0D0D0;
        }
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

    span {
      color: #F71D1D;
      font-weight: 300;
      font-size: 12px;
      line-height: 27px;
      display: flex;
      align-items: center;

      ::before {
        content: '!';
        width: 15px;
        height: 15px;
        color: #fff;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 6px;
        border-radius: 50%;
        font-weight: 600;

      }
    }
  }

`;
