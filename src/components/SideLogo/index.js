import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Line } from './styles.js'
import Logo from '../../assets/logo/logo-greenthumb.svg'

const SideLogo = () => {
  return (
    <Wrapper>
    <Link to='/'>
      <img src={Logo} alt="Green Thumb." className='side-logo'/>
    </Link>  
      <Line />      
    </Wrapper>
  )
}

export default SideLogo