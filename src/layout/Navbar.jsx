import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Header1>
        <Nav>
          <SubMenu>
            <SubMenuA href="#">
              <Li>Home</Li>
            </SubMenuA>
            <SubMenuA href="#Shop">
              <Li>Shop</Li>
            </SubMenuA>
            <SubMenuA href="#">
              <Li>About Us</Li>
            </SubMenuA>
            <SubMenuA href="#">
              <Li>Contact</Li>
            </SubMenuA>
          </SubMenu>
          <ChartImg src="/chart.png" alt="logo" />
          <Title1>
            <H1>Bring Serenity to Your Place With Interior Plants</H1>
            <Title2>
              <H2>
                find your dream plant for you home decoration with us, and we
                will make it happen.
              </H2>
            </Title2>
          </Title1>
        </Nav>

        <Img src="/Hero.png" alt="logo" />
      </Header1>
    </>
  );
}
const H2 = styled.h2`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
`;
const Title2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 495px;
  height: 72px;
  position: absolute;
  left: 300px;
  top: 270px;
`;
const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 1128px;
  height: 192px;
`;
const H1 = styled.h1`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 82px;
  line-height: 96px;
  text-align: center;
  color: white;
`;

const ChartImg = styled.img`
  position: absolute;
  z-index: 1;
`;
const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Header1 = styled.header`
  display: flex;
  justify-content: center;
`;
const Nav = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  padding-top: 40px;
  position: absolute;
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: center;
  height: inherit;
  position: relative;
  z-index: 99;
`;
const SubMenuA = styled.a`
  margin: 0 4rem 0 0;
  text-decoration: none;
  cursor: pointer;
`;
const Li = styled.li`
  font-size: 2rem;
  line-height: 3.6rem;
  text-transform: capitalize;
  transition: all 0.2s;
  list-style: none;
  color: white;
  &:hover {
    background: linear-gradient(90deg, #2af598 0%, #009efd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export default Navbar;
