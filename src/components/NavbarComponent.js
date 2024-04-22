import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  background-color: rgb(43, 45, 66);

  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  margin-right: 15px;
  // styled component. We used this to style Link because Link is a component from react-router-dom and styling it directly with css won't work.
  color: violet;
  
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 90%;

  button {
    background: none;
    color: white;
    border: none;
    font-size: 1rem;
    margin-left: auto
  }
`;

const SearchBar = styled.input`
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background: white;
  padding: 1rem;
  border-radius: 5px;
`;

function NavbarComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Navbar>
      <NavLinks>
        <SearchBar type="text" placeholder="Search..." />
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/airing">Airing</StyledLink>
          <StyledLink to="/upcoming">Upcoming</StyledLink>
        </div>
        <div>
          <LoginButton onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-user"></i>
          </LoginButton>
          <DropdownMenu isOpen={isOpen}>
            <StyledLink to="/login">Login</StyledLink>
  
          </DropdownMenu>
        </div>
      </NavLinks>
    </Navbar>
  );
}

export default NavbarComponent;
