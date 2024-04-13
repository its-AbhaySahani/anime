import React from 'react';
import styled from 'styled-components';
import { Link, Router } from 'react-router-dom';



const Navbar = styled.nav`
background-color: rgb(43, 45, 66);

  display: flex;
  justify-content: center;
  padding: 1rem;



`;

const StyledLink = styled(Link)` // styled component. We used this to style Link because Link is a component from react-router-dom and styling it directly with css won't work.
color: white;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  button{
    background: none;
    color: white;
    border: none;
    font-size: 1rem;
  }

`;


const SearchBar = styled.input`
  padding: 0.5rem;
`;

function NavbarComponent(){
return(
  <Navbar>
  <NavLinks>
   <SearchBar type="text" placeholder="Search..." />
   <StyledLink to="/">Home</StyledLink>
   <StyledLink to="/airing">Airing</StyledLink>
   <StyledLink to="/upcoming">Upcoming</StyledLink>
  </NavLinks>
  </Navbar>
)
}

export default NavbarComponent;