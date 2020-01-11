import React from 'react';
import { Link } from 'react-router-dom'

import SideLogo from '../../components/SideLogo'

import PickLogo from '../../assets/illustrations/pick.png'

import { Container, Wrapper, ContentDetails, ContentForm } from './styles';

export default function Questions() {
  return (
    <Container>
      <SideLogo />

      <Wrapper>
        <ContentDetails>
          <h2>Succulent bowl</h2>
          <p>$30</p>
          <img src={PickLogo} alt="" className='img-plants'/>
          <span>
            <img src="" alt=""/>
            <p>High sunligh</p>
          </span>
        </ContentDetails>

        <ContentForm>
          <h2>Nice pick! </h2>
          <p>Tell us your name and e-mail and we will get in touch regarding 
          your order ;)</p>
          <form action="">
          <label>Name</label>
          <input type="text"  placeholder='Name'/>
          <label>Email</label>
          <input type="text" placeholder='Email'/>
          <button>send</button>
          </form>
        </ContentForm>
       


      </Wrapper>
    </Container>
  );
}
