"use client";

import { useState } from "react";
import data from "../data.json";
import Image from "next/image";
import logo from "../assets/shared/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import MenuMobile from "./components/MenuMobile";
import HomeCard from "./components/HomeCard";
import DestinationsCard from "./components/DestinationsCard";
import CrewCard from "./components/CrewCard";
import TechnologyCard from "./components/TechnologyCard";

export interface DestinationsProps {
  key: string;
  value: Array<{
    name: string;
    description: string;
    distance: string;
    travel: string;
    images: {
      png: string;
    };
  }>;
}

export interface CrewProps {
  key: string;
  value: Array<{
    name: string;
    images: {
      png: string;
    };
    role: string;
    bio: string;
  }>;
}

export interface TechnologyProps {
  key: string;
  value: Array<{
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  }>;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const newArray: (DestinationsProps | CrewProps | TechnologyProps)[] = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      newArray.push({
        key: key,
        // @ts-ignore
        value: data[key],
      });
    }
  }

  const changeIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < newArray.length) {
      setCurrentIndex(newIndex);
    }
  };

  const backgrounds = [
    "bg-home",
    "bg-destinations",
    "bg-crew",
    "bg-technology",
  ];

  return (
    <main
      className={`min-h-screen ${backgrounds[currentIndex]} bg-cover bg-no-repeat`}>
      <div className="flex flex-row pt-10 justify-between items-center">
        <Image src={logo} alt="logo" className="ml-10" />
        <div
          onClick={() => setIsMenuOpen(true)}
          className="flex tablet:hidden text-light text-5xl mr-8">
          <AiOutlineMenu />
        </div>
        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-full"
          } fixed transition-all inset-y-0 z-10 w-4/6 h-full`}>
          <MenuMobile
            info={newArray}
            setCurrentIndex={setCurrentIndex}
            onClose={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div className="hidden desktop:flex absolute left-40 h-[1px] w-2/6 bg-slate-700 z-10"></div>
        <div className="hidden blur-background tablet:flex justify-center desktop:gap-10 tablet:gap-5 w-3/5">
          <div className="flex items-center desktop:gap-10 tablet:gap-5">
            {newArray.map((item, index) => (
              <div key={item.key}>
                <p
                  onClick={() => changeIndex(index)}
                  className={`text-[10px] tracking-[2.35px] desktop:text-[14px] text-white uppercase cursor-pointer flex flex-row gap-x-2 ${
                    index === currentIndex && "border-b-4 border-white"
                  } py-10`}>
                  <span>0{index}</span>
                  {item.key}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {currentIndex === 0 && <HomeCard onClick={() => setCurrentIndex(1)} />}
      {currentIndex === 1 && <DestinationsCard info={newArray} />}
      {currentIndex === 2 && <CrewCard info={newArray} />}
      {currentIndex === 3 && <TechnologyCard info={newArray} />}
    </main>
  );
}
