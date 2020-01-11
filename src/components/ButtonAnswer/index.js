import React, { useState} from 'react'

import { Button, IconSvg } from './styles'

import { NamesSvgColor, NamesSvgWhite } from './IconsRelationship'

const ButtonAnswer = ({ title }) => {

  if(title.includes('/')) {
    title = 'no answer'
  }

  switch (title.toLowerCase()) {
    case 'rarely':
      title = 'one drop'
      break;
    case 'regulary':
      title = 'two drop'
      break;
    case 'daily':
      title = 'three drop'
      break;
    case 'yes':
      title = 'pet'
      break;
    default:

  }


  const titleSvg = NamesSvgColor.filter(elem =>
    elem.includes(title.toLowerCase().replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'-'))).toString()

  const titleSvgWhite = NamesSvgWhite.filter(elem =>
    elem.includes(title.toLowerCase().replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'-'))).toString()


  return(
    <Button nameSvgWhite={titleSvgWhite}>
    {console.log(title, titleSvg)}
      <IconSvg nameSvg={titleSvg} />
      <span> </span>
      <p>{title}</p>
    </Button>

  )
}

export default ButtonAnswer
