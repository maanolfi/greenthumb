import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestOnlyPlant } from '../../store/modules/plants/actions';

import SideLogo from '../../components/SideLogo';

import PickLogo from '../../assets/illustrations/pick.png';
import { Container, Wrapper, Header, Main } from './styles';

export default function Results() {
  const dispath = useDispatch();
  const loading = useSelector(state => state.plants.loading);
  const results = useSelector(state => state.plants.results);

  return (
    <Container>
      <SideLogo />

      <Wrapper>
        <Header>
          <img src={PickLogo} alt="Logo pick" />
          <p>Our picks for you</p>
        </Header>

        <Main>
          {loading && <span>Carregando...</span>}
          {results.map(result => (
            <div className="plants-card" key={result.id}>
              <img src={result.url} alt="" />
              <p>{result.name}</p>
              <span>{`$ ${result.price}`}</span>

              <button onClick={() => dispath(requestOnlyPlant(result.id))}>
                buy now
              </button>
            </div>
          ))}
        </Main>
      </Wrapper>
    </Container>
  );
}
