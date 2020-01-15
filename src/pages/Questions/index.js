import React, { useState, Fragment, useEffect } from 'react';
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
  const [result, setResult] = useState({})
  const [resulterror, setResulterror] = useState(false)

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
      id: 'sun',
      logo: Sun,
      title: TitleSun,
      btns: ['High Sun', 'Low sun', 'No Answer']

    },
    {
      id: 'water',
      logo: Water,
      title: TitleWater,
      btns: ['Rarely', 'Regulary', 'Daily']

    },
    {
      id: 'pets',
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

  const handleClick = (chave, name) => {

    if(name.toLowerCase().includes('/')) {
      return setResult({...result, [chave]: false})
    }

    switch (name.toLowerCase()) {
      case 'high sun':
        setResult({...result, [chave]: 'high'})
        break
      case 'low sun':
        setResult({...result, [chave]: 'low'})
        break
      case 'no answer':
        setResult({...result, [chave]: 'no'})
        break
      case 'yes':
        setResult({...result, [chave]: true})
        break
      default:
        setResult({...result, [chave]: name.toLowerCase()})
    }
    setResulterror(false)
  }

  const verifyProp = () => {
    if(!result.hasOwnProperty('sun')) {
      setIndexPage(0)
      setResulterror(true)
    }
    if(!result.hasOwnProperty('water')) {
      setIndexPage(1)
      setResulterror(true)
    }
    if(!result.hasOwnProperty('pets')) {
      setIndexPage(2)
      setResulterror(true)
    }
  }

  return (
    <Container>
      <SideLogo />
      <Wrapper>
        <Header>
          <img src={answerHeaders[indexPage].logo} alt={answerHeaders[indexPage].title()}/>
          {answerHeaders[indexPage].title()}
          {resulterror && <p className='title-small error'>* is riquired</p>}
        </Header>
        <nav>
        {
          answerHeaders[indexPage].btns.map((elem, index) =>
          <ButtonAnswer key={index} title={elem}
          handleClick={() => handleClick(answerHeaders[indexPage].id, elem)}/> )
        }
        <button onClick={() => verifyProp()}>teste</button>
        </nav>
        <footer>
          <Button  disabled={resulterror ? 'disabled' : null}
          onClick={() => indexPage === 0 ? history.push('/') : handlePage('-')}>
          {indexPage === 0 ? 'home' : 'previous '}</Button>

          <Button disabled={resulterror ? 'disabled' : null}
          onClick={() => indexPage === 2 ? verifyProp() : handlePage('+')}>
          {indexPage === 2 ? 'finish' : 'next'}</Button>
        </footer>

      </Wrapper>
    </Container>
  );
}
