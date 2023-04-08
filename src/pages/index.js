import React from "react";
import Link from "next/link";
import Image from "next/image";
import Home from "src/components/Home";
import Gatoes from "src/components/Gatoes";





export default function index() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  return (
    <div>
      {/* <Home /> */}
      <Gatoes />
    </div>
  );
}
