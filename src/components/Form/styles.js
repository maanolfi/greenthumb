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
    color: #6e6e6e;
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
      color: #6e6e6e;
      margin-bottom: 5px;
    }
    .error {
      color: red;
    }

    .input {
      border: 1px solid #f71d1d;
      ::-webkit-input-placeholder {
        color: #f71d1d;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: #f71d1d;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: #f71d1d;
      }
      :-ms-input-placeholder {
        color: #f71d1d;
      }
    }

    input {
      width: 285px;
      height: 40px;
      background: #ffffff;
      border-radius: 19px;
      border: none;
      font-weight: 300;
      font-size: 14px;
      line-height: 27px;
      color: #0c261c;
      padding-left: 24px;

      ::-webkit-input-placeholder {
        color: #d0d0d0;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: #d0d0d0;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: #d0d0d0;
      }
      :-ms-input-placeholder {
        color: #d0d0d0;
      }
    }

    button {
      align-self: flex-end;
      width: 138px;
      height: 50px;
      border: 1px solid #15573f;
      box-sizing: border-box;
      border-radius: 25px;
      background-color: #f6f6f6;
      margin-top: 30px;
      color: #15573f;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;

      :hover {
        transition: 0.4s;
        color: #f6f6f6;
        background-color: #15573f;
      }
    }

    span {
      color: #f71d1d;
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

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;
