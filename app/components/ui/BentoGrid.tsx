"use client";

import { cn } from "../../../lib/utils";
import MagicButton from "./MagicButton";
import { IoDownloadOutline } from "react-icons/io5";
import { useState } from "react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareimg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareimg?: string;
}) => {
  const leftLists = ["Typescript", "ReactJS", "ExpressJS"];
  const rightLists = ["Django", "NextJS", "SQL"];
  const [download, setDownload] = useState(false);

  const handleDownload = () => {
    const pdfUrl = "./Shreyas_YM.pdf"; // Update with the correct PDF file path
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Shreyas_YM.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownload(true);
    setTimeout(() => {
      setDownload(false);
    }, 3000);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      id="about"
    >
      <div className={`${id === 6 && "flex justify-center"} h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareimg && (
            <img
              src={spareimg}
              alt={spareimg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundBeamsWithCollision>
            <div></div>
          </BackgroundBeamsWithCollision>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={
              id !== 6
                ? `font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`
                : `md:mx-20 font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`
            }
          >
            {title}
          </div>
          {/* {id==2 && <WorldMapDemo/>} */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 lg:mx-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  download ? "block" : "block"
                }`}
              ></div>

              <MagicButton
                title={!download ? "Download Resume" : "Resume Downloaded"}
                icon={<IoDownloadOutline />}
                position="left"
                handleClick={handleDownload}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
