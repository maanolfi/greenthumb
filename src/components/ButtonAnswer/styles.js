import styled from 'styled-components';



export const Button = styled.button`
  width: 215px;
  height: 190px;
  background-color: #fff;
  margin: 65px 30px 47px 30px;
  border-radius: 5px;
  
  :hover {
    transition: 0.4s;
    background: #FD9872;
    box-shadow: 0px 22px 24px #F6D7CB;
    border-radius: 5px;
    color: #fff;
    
    span {
      transition: 0.4s;
      background: url(${props => props.nameSvgWhite});
      background-size: 100px 82px;
    }
  }

  p {
    margin-top: 30px;
  }
`

export const IconSvg = styled.span`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 82px;
  background: url(${props => props.nameSvg});
  background-size: 100px 82px;
  
  
`;
