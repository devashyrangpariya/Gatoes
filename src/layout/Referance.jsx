import React from "react";
import styled from "styled-components";

function Referance() {
  return (
    <>
      <Title>
        <H1>Interior Plant Reference</H1>
        <P>make your home so comfortable with refreshing plants</P>
      </Title>
      <Img src="/Category.png"></Img>
    </>
  );
}
const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.p``;
const H1 = styled.h1`
  color: red;
`;
const Title = styled.div``;
export default Referance;
