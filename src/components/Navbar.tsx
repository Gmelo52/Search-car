import React from 'react'
import * as S from './Navbar.styles'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>
          SearchCar
        </h1>
        <S.List>
          <li>Home</li>
          <li>Estoque</li>
          <li>Venda</li>
          <li>Compra</li>
          <li>Contrato</li>
        </S.List>
        <S.ContactWrapper>
          <FaWhatsapp />
          <span>82 99999-9999</span>
        </S.ContactWrapper>
        <S.SocialWrapper>
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </S.SocialWrapper>
      </S.Content>
    </S.Container>
  )
}

export default Navbar