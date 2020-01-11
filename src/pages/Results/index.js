import React from 'react';
import { Link } from 'react-router-dom'


import SideLogo from '../../components/SideLogo'


import PickLogo from '../../assets/illustrations/pick.png'
import Plants from '../../assets/plantpictures/bunny-ears-cacti.jpg'


import { Container, Wrapper, Header, Main } from './styles';

export default function Questions() {
  return (
    <Container>
      <SideLogo />

      <Wrapper>
        <Header>
          <img src={PickLogo} alt="Logo pick"/>
          <p>Our picks for you</p>
        </Header>

        <Main>

          <div className='plants-card'>
            <img src={Plants} alt=""/>
            <p>Euphorbia eritrea</p>
            <span>$25</span>
            <Link to='/questions' onClick={() => alert('teste feito')}>
              buy now
            </Link>
          </div>

        </Main>


      </Wrapper>
    </Container>
  );
}
