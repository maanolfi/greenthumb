import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HomeNav } from './styles';

import Logo from '../../assets/logo/logo-greenthumb.svg';

const Home = () => {
  return (
    <Container>
      <HomeNav>
        <img src={Logo} alt="Green thumb logo" className="home-logo" />
        <p>Find your next green friend</p>
        <Link to="/questions">
          <span className="next"> </span> start quizz
        </Link>
      </HomeNav>

      <div className="img"> </div>
    </Container>
  );
};

export default Home;
