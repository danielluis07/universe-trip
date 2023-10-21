"use client";

import { useState } from "react";
import { DestinationsProps } from "../page";
import { CrewProps } from "../page";
import { TechnologyProps } from "../page";
import Image from "next/image";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";

interface CrewInfoProps {
  bio: string;
  name: string;
  role: string;
  images: {
    png: string;
  };
}

interface CrewCardProps {
  info: (DestinationsProps | CrewProps | TechnologyProps)[];
}

const CrewCard: React.FC<CrewCardProps> = ({ info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // @ts-ignore
  const crew: CrewInfoProps[] = info[2].value.map((item) => item);

  const crewImages = [douglas, mark, victor, anousheh];

  const changeIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < crew.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="w-9/12 min-h-screen mx-auto pb-10">
      <div className="flex flex-row gap-3 mt-20">
        <p className="text-dark text-xl">02</p>
        <p className="tracking-widest text-xl">MEET YOUR CREW</p>
      </div>
      <div className="flex flex-col desktop:flex-row mt-28 desktop:items-center">
        <div className="w-full h-full flex flex-col">
          <p className="font-bellefair text-[30px] uppercase text-dark text-center desktop:text-start">
            {crew[currentIndex].role}
          </p>
          <p className="font-bellefair text-[60px] uppercase text-white text-center desktop:text-start">
            {crew[currentIndex].name}
          </p>
          <p className="text-light text-xl font-barlow text-center desktop:text-start leading-8 desktop:w-4/5 mt-10">
            {crew[currentIndex].bio}
          </p>
          <div className="flex flex-row gap-x-8 mt-20 mx-auto desktop:mx-0">
            {crew.map((item, index) => (
              <div key={item.name}>
                <div
                  onClick={() => changeIndex(index)}
                  className={`h-3 w-3 rounded-full bg-verydark ${
                    index === currentIndex && "bg-white"
                  }`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-32 desktop:w-[600px] desktop:h-[500px] desktop:mt-0">
          <Image
            src={crewImages[currentIndex]}
            alt=""
            className="mx-auto w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
