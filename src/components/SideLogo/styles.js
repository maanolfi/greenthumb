import styled from 'styled-components';
import pointer from '../../assets/icons/pointer.svg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .side-logo {
      width: 150px;
      height: 200px;
      transform: rotate(-90deg);
      cursor: url(${pointer}), auto;
    }


`;

export const Line = styled.div`
  background-color: rgba(21, 87, 63, 0.414827);
  width: 1px;
  height: 86%;
  margin-top: -10px;
`
