"use client";

import { useState } from "react";
import { DestinationsProps } from "../page";
import { CrewProps } from "../page";
import { TechnologyProps } from "../page";
import launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import Image from "next/image";

interface TechnologyInfoProps {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

interface TechnologyCardProps {
  info: (DestinationsProps | CrewProps | TechnologyProps)[];
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // @ts-ignore
  const technology: TechnologyInfoProps[] = info[3].value.map((item) => item);

  const changeIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < technology.length) {
      setCurrentIndex(newIndex);
    }
  };

  const technologyImages = [launch, spaceport, capsule];

  return (
    <div className="w-9/12 desktop:w-full desktop:pl-32 min-h-screen mx-auto pb-10">
      <div className="flex flex-row gap-3 mt-20">
        <p className="text-dark text-xl">03</p>
        <p className="tracking-widest text-xl">SPACE LAUNCH 101</p>
      </div>
      <div className="flex flex-col desktop:flex-row mt-28 gap-y-20">
        <div className="flex flex-col desktop:flex-row">
          <div className="px-0 desktop:px-32 desktop:mt-20">
            <p className="font-bellefair text-[60px] uppercase text-white text-center desktop:text-start">
              {technology[currentIndex].name}
            </p>
            <p className="text-light text-xl font-barlow leading-8 text-center desktop:text-start desktop:w-5/6">
              {technology[currentIndex].description}
            </p>
          </div>
          <div className="flex flex-row desktop:order-first desktop:flex-col gap-x-3 tablet:gap-x-10 gap-y-10 mt-10 justify-center desktop:justify-normal desktop:mt-24">
            {technology.map((item, index) => (
              <div
                key={item.name}
                onClick={() => changeIndex(index)}
                className={`w-20 h-20 rounded-full cursor-pointer border-2 border-white flex justify-center items-center ${
                  index === currentIndex && "bg-white"
                }`}>
                <p
                  className={`font-bellefair text-[34px] ${
                    index === currentIndex && "text-black"
                  }`}>
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full desktop:w-[1500px] desktop:h-[800px]">
          <Image
            src={technologyImages[currentIndex]}
            alt=""
            className="mx-auto desktop:mr-0 w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
