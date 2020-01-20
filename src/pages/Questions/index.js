import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import * as PlantsActions from '../../store/modules/plants/actions';
import history from '../../services/history';

import SideLogo from '../../components/SideLogo';
import ButtonAnswer from '../../components/ButtonAnswer';

import Sun from '../../assets/illustrations/sun.png';
import Water from '../../assets/illustrations/wateringcan.png';
import Pet from '../../assets/illustrations/dog.png';

import { Container, Wrapper, Header, Button } from './styles';

export default function Questions() {
  const dispath = useDispatch();
  const [indexPage, setIndexPage] = useState(0);
  const [result, setResult] = useState({});
  const [resulterror, setResulterror] = useState(false);
  const [clickname, setClickname] = useState(null);

  const TitleSun = () => {
    return (
      <p>
        First, set the amount of <strong>sunlight</strong> your plant will get.
      </p>
    );
  };

  const TitleWater = () => {
    return (
      <p>
        How often do you want to <strong>water</strong> your plant?
      </p>
    );
  };

  const TitlePets = () => {
    return (
      <Fragment>
        <p>
          Do you have pets? Do they <strong>chew</strong> plants?{' '}
        </p>
        <p className="title-small">
          We are asking because some plants can be <strong>toxic</strong> for
          your buddy.{' '}
        </p>
      </Fragment>
    );
  };

  const answerHeaders = [
    {
      id: 'sun',
      logo: Sun,
      title: TitleSun,
      btns: ['High Sun', 'Low Sun', 'No Answer'],
    },
    {
      id: 'water',
      logo: Water,
      title: TitleWater,
      btns: ['Rarely', 'Regularly', 'Daily'],
    },
    {
      id: 'pets',
      logo: Pet,
      title: TitlePets,
      btns: ['Yes', "No/They don't care"],
    },
  ];

  const handlePage = text => {
    switch (text) {
      case '+':
        setIndexPage(indexPage + 1);
        break;
      case '-':
        setIndexPage(indexPage - 1);
        break;
      default:
    }
  };

  const handleClick = (chave, name, event) => {
    event.preventDefault();

    const nameFormt = name
      .toLowerCase()
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '-');

    if (event.target.id === nameFormt) {
      setClickname(nameFormt);
    }

    if (name.toLowerCase().includes('/')) {
      setResulterror(false);
      return setResult({ ...result, [chave]: false });
    }

    switch (name.toLowerCase()) {
      case 'high sun':
        setResult({ ...result, [chave]: 'high', click: 1 });

        break;
      case 'low sun':
        setResult({ ...result, [chave]: 'low', click: 2 });

        break;
      case 'no answer':
        setResult({ ...result, [chave]: 'no', click: 3 });

        break;
      case 'yes':
        setResult({ ...result, [chave]: true });
        break;
      default:
        setResult({ ...result, [chave]: name.toLowerCase() });
    }
    setResulterror(false);
  };

  const verifyFinishProp = () => {
    if (!result.hasOwnProperty('sun')) {
      setIndexPage(0);
      return setResulterror(true);
    }
    if (!result.hasOwnProperty('water')) {
      setIndexPage(1);
      return setResulterror(true);
    }
    if (!result.hasOwnProperty('pets')) {
      setIndexPage(2);
      return setResulterror(true);
    }

    dispath(PlantsActions.Answer(result));
  };

  return (
    <Container>
      <SideLogo />

      <Wrapper idClick={clickname}>
        <Header>
          <img
            src={answerHeaders[indexPage].logo}
            alt={answerHeaders[indexPage].title()}
          />
          {answerHeaders[indexPage].title()}
          {resulterror && <p className="title-small error">* is required</p>}
        </Header>
        <nav>
          {answerHeaders[indexPage].btns.map((elem, index) => (
            <ButtonAnswer
              key={index}
              title={elem}
              idClick={elem}
              handleClick={event =>
                handleClick(answerHeaders[indexPage].id, elem, event)
              }
            />
          ))}
        </nav>
        <footer>
          <Button
            disabled={resulterror ? 'disabled' : null}
            onClick={() =>
              indexPage === 0 ? history.push('/') : handlePage('-')
            }
          >
            <span className="prev"> </span>
            {indexPage === 0 ? 'home' : 'previous '}
          </Button>

          <Button
            disabled={resulterror ? 'disabled' : null}
            onClick={() =>
              indexPage === 2 ? verifyFinishProp() : handlePage('+')
            }
          >
            {indexPage === 2 ? 'finish' : 'next'}
            <span className="next"> </span>
          </Button>
        </footer>
      </Wrapper>
    </Container>
  );
}
