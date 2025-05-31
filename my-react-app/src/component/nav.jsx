import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaGlobeAmericas, FaBars, FaTimes } from "react-icons/fa";



export default function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <Nav>
      <Container>
        <Brand to="/">
          <FaGlobeAmericas size={26} />
          Tourism App
        </Brand>
        <MenuIcon onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavLinks open={menuOpen}>
          <NavLink to="/" active={location.pathname === "/"} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/booking" active={location.pathname === "/booking"} onClick={() => setMenuOpen(false)}>Booking</NavLink>
          <NavLink to="/about" active={location.pathname === "/about"} onClick={() => setMenuOpen(false)}>About</NavLink>
        </NavLinks>
      </Container>
    </Nav>
  );
}
const Nav = styled.nav`
  background: linear-gradient(90deg, #f0f4ff, #dbeafe);
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 900;
  color: #1d4ed8;
  text-decoration: none;
  gap: 0.5rem;

  &:hover {
    color: #2563eb;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1d4ed8;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 72px;
    left: 0;
    width: 100%;
    background: #f0f4ff;
    padding: 1rem 0;
    gap: 1rem;
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 40;
  }
`;

const NavLink = styled(Link)`
  color: ${({ active }) => (active ? "#1d4ed8" : "#374151")};
  text-decoration: none;
  position: relative;

  &:hover {
    color: #1d4ed8;
  }

  &::after {
    content: "";
    display: ${({ active }) => (active ? "block" : "none")};
    height: 2px;
    background-color: #1d4ed8;
    width: 100%;
    position: absolute;
    bottom: -4px;
    left: 0;
    border-radius: 4px;
  }
`;