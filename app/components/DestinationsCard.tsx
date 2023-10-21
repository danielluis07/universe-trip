"use client";

import { DestinationsProps } from "../page";
import { CrewProps } from "../page";
import { TechnologyProps } from "../page";
import Image from "next/image";
import { useState } from "react";
import europa from "../../public/images/image-europa.png";
import mars from "../../public/images/image-mars.png";
import moon from "../../public/images/image-moon.png";
import titan from "../../public/images/image-titan.png";

interface DestinationsInfoProps {
  name: string;
  description: string;
  distance: string;
  travel: string;
  images: {
    png: string;
  };
}

interface DestinationsCardProps {
  info: (DestinationsProps | CrewProps | TechnologyProps)[];
}

const DestinationsCard: React.FC<DestinationsCardProps> = ({ info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // @ts-ignore
  const destinations: DestinationsInfoProps[] = info[1].value.map(
    (item) => item
  );

  const changeIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < destinations.length) {
      setCurrentIndex(newIndex);
    }
  };

  const planetImages = [europa, mars, moon, titan];

  return (
    <div className="w-9/12 min-h-screen mx-auto pb-10">
      <div className="flex flex-row gap-3 mt-20">
        <p className="text-dark text-xl">01</p>
        <p className="tracking-widest text-xl">PICK YOUR DESTINATION</p>
      </div>
      {/* main div */}
      <div className="flex flex-col desktop:flex-row mt-24">
        {/* planets div */}
        <div className="">
          <Image src={planetImages[currentIndex]} alt="" className="mx-auto" />
        </div>
        {/* info div */}
        <div className="w-5/6 tablet:w-1/2 mx-auto desktop:mr-0 mt-14 desktop:mt-0 h-full flex flex-col gap-y-5">
          <div className="flex flex-row items-center justify-center desktop:justify-start gap-10">
            {destinations.map((item, index) => (
              <div key={item.name}>
                <p
                  className={`font-barlow text-[1.5rem] text-light uppercase cursor-pointer py-4 ${
                    index === currentIndex &&
                    "border-b-4 border-white text-white"
                  }`}
                  onClick={() => changeIndex(index)}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-bellefair text-[80px] tablet:text-[100px] uppercase text-center desktop:text-start">
                {destinations[currentIndex].name}
              </p>
            </div>
            <div>
              <p className="text-light text-xl font-barlow text-center desktop:text-start leading-8 desktop:w-4/5">
                {destinations[currentIndex].description}
              </p>
            </div>
            <div className="h-[1px] bg-slate-700 z-10 w-full desktop:w-4/5 mt-14"></div>
            <div className="flex flex-row gap-x-14 desktop:gap-x-28">
              <div className="flex flex-col gap-y-3">
                <p className="text-light text-xl font-barlow">AVG. DISTANCE</p>
                <p className="font-bellefair text-2xl">
                  {destinations[currentIndex].distance}
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-light text-xl font-barlow">
                  EST. TRAVEL TIME
                </p>
                <p className="font-bellefair text-2xl">
                  {destinations[currentIndex].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsCard;
