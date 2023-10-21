"use client";

interface HomeCardProps {
  onClick: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({ onClick }) => {
  return (
    <div className="w-11/12 mx-auto mt-20 pb-14">
      <div className="flex flex-col">
        <p className="text-light font-barlow home-subtitle text-center">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="font-bellefair text-center text-white text-[100px]">
          SPACE
        </h1>
        <p className="text-light text-center leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div
          onClick={onClick}
          className="flex justify-center items-center w-48 h-48 text-xl text-black rounded-full bg-white mx-auto mt-20 cursor-pointer">
          EXPLORE
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
