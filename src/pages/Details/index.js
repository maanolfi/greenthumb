import React from 'react';
import { useSelector } from 'react-redux'

import SideLogo from '../../components/SideLogo'
import FormPlant from '../../components/Form'

import { NamesSvgGrey } from './IconsRelationship'

import { Container, Wrapper, ContentDetails } from './styles';

export default function Details() {
  const loading = useSelector(state => state.plants.loading)
  const result = useSelector(state => state.plants.plant)


  let titleIconSun = result.sun;
  let titleIconWater = result.water;
  let titleIconPetorToxic = '';

  if (result.toxicity) {
      titleIconPetorToxic = 'toxic';
  }

  if (!result.toxicity) {
     titleIconPetorToxic = 'pet';
  }

  switch (titleIconSun) {
    case 'high':
      titleIconSun = 'high sun'
      break;
    case 'low':
      titleIconSun = 'low sun'
      break;
    case 'no':
      titleIconSun = 'no answer'
      break;
    default:

  }

  switch (titleIconWater) {
    case 'rarely':
      titleIconWater = 'one drop'
      break;
    case 'regularly':
      titleIconWater = 'two drops'
      break;
    case 'daily':
      titleIconWater = 'three drops'
      break;
    default:

  }

    const titleSvgSun = NamesSvgGrey.filter(elem =>
      elem.includes(titleIconSun.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'-'))).toString()

    const titleSvgWater = NamesSvgGrey.filter(elem =>
    elem.includes(titleIconWater.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'-'))).toString()

    const titleSvgToxicOrPet = NamesSvgGrey.filter(elem =>
    elem.includes(titleIconPetorToxic.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'-'))).toString()

  const upperCase = (text) => {
    let str1 = text.substring(0,1)
    return text = text.replace(str1, str1.toUpperCase())
  }

  return (
    <Container>
      <SideLogo />

      <Wrapper>
        <ContentDetails>
          {loading && <p>Carregando...</p>}

          <h2>{result.name}</h2>
          <p>${result.price}</p>
          <img src={result.url} alt={result.name} className='img-plants'/>
          <span>
            <div>
              <img src={titleSvgSun} alt=""/>
              <p>{upperCase(result.sun)} sunlight</p>
            </div>
            <div>
              <img src={titleSvgWater} alt=""/>
              <p>Water {upperCase(result.water)}</p>
            </div>
            <div>
              <img src={titleSvgToxicOrPet} alt=""/>
              {result.toxicity ? <p><strong>Beware!</strong> Toxic for pets</p>
                 : <p>Non-toxic for pets</p>}
            </div>
          </span>
        </ContentDetails>

        <FormPlant />



      </Wrapper>
    </Container>
  );
}
