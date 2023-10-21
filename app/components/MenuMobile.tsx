"use client";

import { AiOutlineClose } from "react-icons/ai";
import { DestinationsProps } from "../page";
import { CrewProps } from "../page";
import { TechnologyProps } from "../page";
import { Dispatch, SetStateAction } from "react";

interface MenuMobileProps {
  info: (DestinationsProps | CrewProps | TechnologyProps)[];
  onClose: () => void;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  info,
  onClose,
  setCurrentIndex,
}) => {
  const handleIndexChange = (newIndex: number) => {
    // Call the parent component's setCurrentIndex function to update currentIndex
    setCurrentIndex(newIndex);
  };
  return (
    <div className="w-full h-full blur-background">
      <div className="w-full h-full p-8">
        <div onClick={onClose} className="flex justify-end text-light text-3xl">
          <AiOutlineClose />
        </div>
        <div className="flex flex-col gap-y-3">
          {info.map((item, index) => (
            <div key={index}>
              <p onClick={() => handleIndexChange(index)} className="uppercase">
                {item.key}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
