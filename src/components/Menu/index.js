import React, { useEffect, useRef } from "react";
import { Container, Wrapper } from "./styled";
import { LinkStyled, ButtonPrimary } from "../common/styled";
import { showMenu, hideMenu } from "../../animate";
import { useHistory } from "react-router-dom";

const Menu = ({ changeTheme, closeMenu}) => {
  let containerRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    showMenu(containerRef, ".link-nav");
  }, []);

  useEffect(() => {
    history.listen(() => {
      closeMenu();
      hideMenu(containerRef);
    });
  }, [history]);

  return (
    <Container ref={(elem) => (containerRef = elem)}>
      <Wrapper>
        <li className="link-nav">
          <LinkStyled to="/">Home</LinkStyled>
        </li>
        <li className="link-nav">
          <LinkStyled to="/favorites">Favorites</LinkStyled>
        </li>
        <li className="link-nav">
          <ButtonPrimary onClick={changeTheme}>Change Theme</ButtonPrimary>
        </li>
      </Wrapper>
    </Container>
  );
};

export default Menu;
