import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { colors } from '../../../utils';

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  text-transform: uppercase;
  font-weigth: 500;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/problemi-comuni-droni-fpv">Problemi comuni</NavItem>
      <NavItem to="/articoli">Articoli</NavItem>
      <NavItem to="/contattami">Contattami</NavItem>
    </>
  )
}

export default NavbarLinks