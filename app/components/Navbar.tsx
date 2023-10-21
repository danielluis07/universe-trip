"use client";

import React from "react";
import logo from "../../assets/shared/logo.svg";
import Image from "next/image";

interface NavBarProps {
  subheadings: string[];
}

const Navbar: React.FC<NavBarProps> = ({ subheadings }) => {
  return (
    <div className="flex flex-row pt-10 justify-between items-center">
      <Image src={logo} alt="logo" className="ml-10" />
      <div></div>
      <div className="blur-background flex p-10">
        <div>{subheadings}</div>
      </div>
    </div>
  );
};

export default Navbar;
