import styled from "styled-components";
import Button from "../Button";
import React from "react";

const Navbar: React.FC<{ onClick: any }> = (props) => {
  
  return (
    <NavbarWrapper>
      <NavbarOption>Pizzaria</NavbarOption>
      <NavbarOption>Home</NavbarOption>
      <NavbarOption>Sobre nós</NavbarOption>
      <NavbarOption>Onde Estamos</NavbarOption>
      <Button color={"primary"} onClick={props.onClick}/>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  border-bottom: 1px var(--white-color) solid;
  background-color: var(--primary-color);
`;

const NavbarOption = styled.p`
  color: var(--white-color);
  font-size: 20px;
  cursor: pointer;
`;
