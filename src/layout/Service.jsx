import React from "react";
import styled from "styled-components";

function Service() {
  return (
    <>
      <Service1>
        <Frame href="#">
          <LeftFrame>
            <Img src="/img1.png" />
          </LeftFrame>
          <RightFrame>
            <H2>Free Shapping</H2>
            <P>No charge for each delivery</P>
          </RightFrame>
        </Frame>
        <Frame href="#">
          <LeftFrame>
            <Img src="/img2.png" />
          </LeftFrame>
          <RightFrame>
            <H2>Quick Payment</H2>
            <P>100% secure payment</P>
          </RightFrame>
        </Frame>
        <Frame href="#">
          <LeftFrame>
            <Img src="/img3.png" />
          </LeftFrame>
          <RightFrame>
            <H2>24/7 Support</H2>
            <P>Quick support</P>
          </RightFrame>
        </Frame>
      </Service1>
    </>
  );
}
const Service1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 120px;
  height: 84px;
`;
const Frame = styled.a`
  display: flex;
  gap: 24px;
  width: 314px;
  height: 84px;
  cursor: pointer;
  text-decoration: none;
`;
const LeftFrame = styled.div``;
const RightFrame = styled.div`
  width: 269px;
  height: 77px;
`;
const Img = styled.img`
  width: 82px;
  height: 82px;
`;
const H2 = styled.h2`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 50px;
  color: #081323;
  margin: 0;
`;
const P = styled.p`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  width: 269px;
  height: 23px;
  margin: 0;
  color: #828282;
`;

export default Service;
