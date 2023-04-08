import React from "react";
import styled from "styled-components";

function Gatoes() {
  return (
    <>
      <Conatener>
        {/*--------------------------- Header---------------------------- */}
        <Header>
          {/*--------------------------Logo------------------------------ */}
          <Main>
            <Logo>
              <img src="/logo.svg" alt="" />
            </Logo>
            <Login onPress={() => navigation.navigate("Login")}>
              <img src="/user.svg" alt="" />
              <p>
                <span>Signup or</span> Login
              </p>
            </Login>
          </Main>
          {/* --------------------------Title------------------------------- */}
          <TitleConatener>
            <h2>
              Your favourite
              <span style={{ color: "#F66754" }}> restaurants</span> and
              takeaways,
              <span style={{ color: "#119477" }}>delivered to your door</span>
            </h2>
            <InputTitle>
              <p>Enter your location to find local restaurants</p>
              <Searchcontainer>
                <LocationImg src="/location.svg" alt="" />
                <Input type="text" placeholder="Type your location here..." />
                <Gptbutton>
                  <Gpsimg src="/gps.svg" alt="" />
                </Gptbutton>
              </Searchcontainer>
              <Search>
                <button>Search</button>
              </Search>
            </InputTitle>
          </TitleConatener>
        </Header>
      </Conatener>
    </>
  );
}
const InputTitle = styled.div`
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(35, 33, 46, 0.1),
    0 16px 24px 0 rgba(35, 33, 46, 0.06);
  padding: 24px;
  position: relative;
  p {
    color: #5e5c66;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.32px;
    line-height: 24px;
    margin: 0;
    margin-bottom: 16px;
  }
`;
const Search = styled.button`
  display: flex;
`;
const Gptbutton = styled.button``;
const Gpsimg = styled.img`
  height: 25px;
  width: 25px;
`;
const Input = styled.input`
  height: 50px;
  padding-left: 10px;
  width: 622px;
`;
const LocationImg = styled.img`
  height: 25px;
  width: 25px;
`;
const Searchcontainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-between;
  font-size: 46px;
  height: 65px;
  width: 560px;
  border: 1px solid #e1dfe8;
































































  
  border-radius: 12px;
  background-color: #f4f4f8;
  /* padding-left: 52px;
    padding-right: 65px; */
  margin-bottom: 15px;
`;
const TitleConatener = styled.div`
  width: 870px;
  height: 104px;
  /* padding-top: 188px; */
  padding-top: 110px;
  h2 {
    color: #23212e;
    font-size: 46px;
    font-weight: 600;
    letter-spacing: -1.92px;
    line-height: 52px;
    margin: 0;
    margin-bottom: 27px;
    padding-right: 40px;
  }
`;
const Login = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  max-width: 180px;
  border-radius: 12px;
  color: #f66754;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(35, 33, 46, 0.12),
    0 0 3px 0 rgba(94, 92, 102, 0.12);
  padding: 0 14px;
  width: auto;
  &:hover {
    box-shadow: 0 3px 8px 0px rgba(22, 26, 30, 0.16),
      0 4px 5px 1px rgba(22, 26, 30, 0.09);
    transform: translateY(-1px);
  }
  p {
    color: #f66754;
  }
`;
const Logo = styled.button``;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 0 0;
`;
const Header = styled.div`
  padding: 15px;
  background-color: #fff2f1;
  height: 473px;
  height: 580px;

  /* padding: 0 74px; */
  padding: 0 366px;
`;
const Conatener = styled.div``;

export default Gatoes;
