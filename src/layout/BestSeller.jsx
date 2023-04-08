import React from "react";
import styled from "styled-components";
function BestSeller() {
  return (
    <>
      <BestSeller1 id="Shop">
        <LeftSide>
          <H1>Best Seller Product</H1>
          <Button>
            <P>See all colection</P>
            <ButtonImg src="/arrow-right.png" />
          </Button>
        </LeftSide>
        <RightSide>
          <Frame>
            <Img src="/plant1.png" />
            <Card>
              <CardData>
                <Title>
                  Cammile
                  <TitleImg>
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                  </TitleImg>
                </Title>
                <Rata>
                  <Rataleft>$65.00</Rataleft>
                  <RataRight src="/plas.png" />
                </Rata>
              </CardData>
              <Bckground></Bckground>
            </Card>
          </Frame>
          <Frame>
            <Img src="/plant2.png" />
            <Card>
              <CardData>
                <Title>
                  Cammile
                  <TitleImg>
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                  </TitleImg>
                </Title>
                <Rata>
                  <Rataleft>$65.00</Rataleft>
                  <RataRight src="/plas.png" />
                </Rata>
              </CardData>
              <Bckground></Bckground>
            </Card>
          </Frame>
          <Frame>
            <Img src="/plant3.png" />
            <Card>
              <CardData>
                <Title>
                  Cammile
                  <TitleImg>
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                    <StarImg src="/star.png" />
                  </TitleImg>
                </Title>
                <Rata>
                  <Rataleft>$65.00</Rataleft>
                  <RataRight src="/plas.png" />
                </Rata>
              </CardData>
              <Bckground></Bckground>
            </Card>
          </Frame>
        </RightSide>
      </BestSeller1>
    </>
  );
}

const BestSeller1 = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: center;
  padding: 0 120px 0 120px;
`;
const LeftSide = styled.div``;
const H1 = styled.h1`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
    font-size: 70px;
  line-height: 75px;
  width: 363px;
  height: 150px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  gap: 8px;
  border-radius: 30px;
  width: 252px;
height: 80px;
  &:hover{
    background: linear-gradient(90deg, #2af598 0%, #009efd 100%);
  }
`;
const P = styled.p`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #4f4f4f;
`;
const ButtonImg = styled.img``;
const TitleImg = styled.div``;
const StarImg = styled.img``;

const RightSide = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center; */
  gap: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1051px;
  height: 634px;
`;
const Frame = styled.div`
  width: 329px;
  height: 634px;
  background: #c1d0e4;
  border-radius: 50px;

  &:hover {
    /* box-Shadow: '1px 2px 9px #F4AAB9', */
    /* background: red; */
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`;
const Img = styled.img``;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 26px 38px;
  gap: 8px;
  width: 260px;
  height: 260.73px;
  background: #ffffff;
  border-radius: 50px;
`;
const CardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 7px;

  width: 139px;
  height: 69px;
`;
const Title = styled.h1``;
const Rata = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 129px;

  width: 253px;
  height: 64px;
`;
const Rataleft = styled.p`
  width: 107px;
  height: 38px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
`;
const RataRight = styled.img``;
const Bckground = styled.div``;

export default BestSeller;
