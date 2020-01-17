import React from 'react'

import { Button, IconSvg } from './styles'

import { NamesSvgColor, NamesSvgWhite } from './IconsRelationship'

const ButtonAnswer = ({ title, handleClick, idClick }) => {

  let titleIcon = title.toLowerCase();

  if(title.includes('/')) {
    titleIcon = 'no answer'
  }

  switch (title.toLowerCase()) {
    case 'rarely':
      titleIcon = 'one drop'
      break;
    case 'regularly':
      titleIcon = 'two drop'
      break;
    case 'daily':
      titleIcon = 'three drop'
      break;
    case 'yes':
      titleIcon = 'pet'
      break;
    default:

  }

  const titleClick = titleIcon.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'-');
  const idClickFormt = idClick.toLowerCase().replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,'-')
  const titleSvg = NamesSvgColor.filter(elem =>
    elem.includes(titleClick)).toString()

  const titleSvgWhite = NamesSvgWhite.filter(elem =>
    elem.includes(titleClick)).toString()


  return(
    <Button nameSvgWhite={titleSvgWhite} id={idClickFormt} className={idClickFormt}
    onClick={handleClick}>
      <IconSvg nameSvg={titleSvg} />
      <span> </span>
      <p>{title}</p>
    </Button>

  )
}

export default ButtonAnswer
