// import Image from "next/image";
import Navbar from "./Navbar";
import styled from "styled-components";

function Hero() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <>
      <Header>
        <Navbar />
      </Header>
    </>
  );
}
const Header = styled.div``;

export default Hero;
