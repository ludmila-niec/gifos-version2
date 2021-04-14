import React, { useState } from "react";
import LogoLight from "../Icons/LogoLight";
import MenuIcon from "../Icons/Menu";
import CloseIcon from "../Icons/Close";
import Menu from "../Menu";
// context
import { useBreakpoint } from "../../context/MediaQueries";
// styled
import { Wrapper, MenuBtn } from "./Navbar.style";
import { Flex, ButtonSecondary, LinkStyled } from "../common/styled";

const Navbar = ({ changeTheme }) => {
  const { sm: smDevice, lg: lgDevice } = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  const menuSmDevice = (
    <>
      <MenuBtn onClick={() => setIsOpen((prevState) => !prevState)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuBtn>
      {isOpen && (
        <Menu
          changeTheme={changeTheme}
          closeMenu={closeMenu}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );

  const menuLgDevice = (
    <Flex>
      <LinkStyled to="/favorites">Favorites</LinkStyled>
      <ButtonSecondary
        aria-label="Change theme"
        role="button"
        onClick={changeTheme}
      >
        Change Theme
      </ButtonSecondary>
    </Flex>
  );

  return (
    <nav>
      <Wrapper>
        <LinkStyled to="/" aria-label='back to homepage'>
          <LogoLight
            height={smDevice ? "15" : "21"}
            width={smDevice ? "75" : "89"}
          />
        </LinkStyled>
        {!lgDevice ? menuSmDevice : menuLgDevice}
      </Wrapper>
    </nav>
  );
};

export default Navbar;
