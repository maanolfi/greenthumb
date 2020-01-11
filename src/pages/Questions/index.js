import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import * as PlantsActions from '../../store/modules/plants/actions'
import history from '../../services/history'

import SideLogo from '../../components/SideLogo'
import ButtonAnswer from '../../components/ButtonAnswer'


import Sun from '../../assets/illustrations/sun.png'
import Water from '../../assets/illustrations/wateringcan.png'
import Pet from '../../assets/illustrations/dog.png'

import { Container, Wrapper, Header, Button } from './styles';



export default function Questions() {
  const dispath = useDispatch();
  const teste = useSelector(state => state.plants.answer)
  const [indexPage, setIndexPage] = useState(0)

  const TitleSun = () => {
    return <p>First, set the amount of <strong>sunlight</strong> your plant will get.</p>
  }

  const TitleWater = () => {
    return <p>How often do you want to <strong>water</strong> your plant?</p>
  }

  const TitlePets = () => {
    return (
      <Fragment>
        <p>Do you have pets? Do they <strong>chew</strong> plants? </p>
        <p className='title-small'>
        We are asking because some plants can be <strong>toxic</strong> for your buddy. </p>
      </Fragment>
      )
  }

  const answerHeaders = [
    {
      logo: Sun,
      title: TitleSun,
      btns: ['High Sun', 'Low sun', 'No Answer']

    },
    {
      logo: Water,
      title: TitleWater,
      btns: ['Rarely', 'Regulary', 'Daily']

    },
    {
      logo: Pet ,
      title: TitlePets,
      title_small: '',
      btns: ['Yes', "No/They don't care"]

    }
  ];

  const handlePage = (text) => {
    switch (text) {
      case '+':
        setIndexPage(indexPage +1)
        break
      case '-':
        setIndexPage(indexPage - 1)
        break
      default:

    }
  }


  return (
    <Container>
      <SideLogo />

      <Wrapper>
        <Header>
          <img src={answerHeaders[indexPage].logo} alt="Logo sun"/>
          {answerHeaders[indexPage].title()}
        </Header>
        <nav>
        {
          answerHeaders[indexPage].btns.map((elem, index) =>
          <ButtonAnswer key={index} title={elem}/> )
        }
        </nav>
        <footer>
          <Button onClick={() => indexPage === 0 ? history.push('/') : handlePage('-')}>
          {indexPage === 0 ? 'home' : 'previous '}</Button>
          <Button onClick={() => handlePage('+')}>
          {indexPage === 2 ? 'finish' : 'next'}</Button>
        </footer>

      </Wrapper>
    </Container>
  );
}
