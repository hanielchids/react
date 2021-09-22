import React from 'react';
import styled from 'styled-components';
import Img from '../assets/logo.svg';
import { Link } from 'react-router-dom';




const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    z-index: 20;
    background: #fff;
`;

const NavbarWrap = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
width: 140px;
height: 48px;
background: url(${Img}) 45% no-repeat;
background-size: 100% 100%;
cursor: pointer;
`;

const Nav = styled.div`
    flex: 1;
    position: relative;
    padding-left: 50px;
`;

const NavLink = styled(Link)`
    color: #000;
    padding: 0 15px;
    font-size: 16px;
    line-height: 80px;
    font-weight: 700;
    text-decoration: none;

    &.active {
        color: #006BFF;
    }

    &:hover{
        color: #006BFF;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end; 
`;

const Button = styled.div`
    width: 110px;
    color: #fff;
    cursor: pointer;
    height: 36px;
    font-size: 14px;
    box-sizing: border-box;
    background: #006BFF;
    text-align: center;
    line-height: 36px;
    border-radius: 21px;
`;


const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo />
                <Nav>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/">OUR SERVICES</NavLink>
                    <NavLink to="/">SUBSIDIARIES</NavLink>
                    <NavLink to="/">ABOUT US</NavLink>
                </Nav>
                <ButtonContainer>
                    <Button>CONTACT US</Button>
                </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar
 