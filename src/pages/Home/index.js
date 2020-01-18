import React from 'react'
import { Link } from 'react-router-dom'

import { Container, HomeNav } from './styles'

import Logo from '../../assets/logo/logo-greenthumb.svg'
import Imghomedeskop from '../../assets/illustrations/illustration-home.png'

const Home = () => {
  return (
    <Container>
      <HomeNav>
        <img src={Logo} alt="Green thumb logo" className='home-logo'/>
        <p>Find your next green friend</p>
        <Link to='/questions'>
          <span className='next'> </span> start quizz
        </Link>
      </HomeNav>

      <img src={Imghomedeskop} alt="Green thumb home" className='home-imgaside'/>

    </Container>
  )
}

export default Home
