import React from "react";
import { Timeline } from "./ui/timeline";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function Experience() {
  const skills1 = [
    {
      id: 1,
      name: "Python",
      image: "/python.svg",
    },
    {
      id: 2,
      name: "Raspberry Pi",
      image: "/raspberry.svg",
    },
    {
      id: 3,
      name: "MongoDB",
      image: "/mongo.svg",
    },
  ];
  const skills2 = [
    {
      id: 1,
      name: "MongoDB",
      image: "/mongo.svg",
    },
    {
      id: 2,
      name: "ExpressJS",
      image: "/express.webp",
    },
    {
      id: 3,
      name: "ReactJS",
      image: "/re.svg",
    },
    {
      id: 4,
      name: "NodeJS",
      image: "/nodejs.webp",
    },
    {
      id: 5,
      name: "NextJS",
      image: "/next.svg",
    },
  ];
  const data = [
    {
      title: "October 2025 - Present",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 md:text-2xl sm:text-lg font-normal mb-8">
            Software Engineer - Sasken Technologies.
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <img
                src="/Sasken.jpg"
                alt="startup template"
                width={200}
                height={200}
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 sm:text-xs md:text-lg font-normal my-8 lg:text-justify">
              Software Engineer at Sasken Technologies, working with Qualcomm in the Automotive Audio domain as part of the Generative AI team.
              Contributes to advanced software initiatives and collaborative development efforts focused on scalable automotive solutions.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "October 2024 - March 2025",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 md:text-2xl sm:text-lg font-normal mb-8">
            Web Developer Intern - Amiti Software Technologies.
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <img
                src="/amiti.jpeg"
                alt="startup template"
                width={200}
                height={200}
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <div className="flex items-center gap-8">
                <AnimatedTooltip items={skills2} />
              </div>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 sm:text-xs md:text-lg font-normal my-8 lg:text-justify">
              Developed front-end projects using React.js, including a news website, weather application, and eCommerce platform. 
              Built full-stack applications with the MERN stack and Socket.io, a social media platform using Next.js, and Code Craft, a web-based code editor. 
              Experienced in API design, development, and testing using Postman and Thunder Client.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "September 2023 - October 2023",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 md:text-2xl sm:text-lg font-normal mb-8">
            IoT intern - Subhanu Technologies.
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <img
                src="/subhanu.jpeg"
                alt="startup template"
                width={200}
                height={200}
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <div className="flex items-center gap-8">
                <AnimatedTooltip items={skills1} />
              </div>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 sm:text-xs md:text-lg font-normal my-8 lg:text-justify">
              Designed and developed an IoT-enabled heart rate monitoring system using Raspberry Pi 
              and a heart rate sensor, enabling real-time data acquisition and transmission 
              through IoT communication protocols. Leveraged MongoDB for real-time data storage, visualization, and analysis, supporting scalable remote health monitoring applications.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <h1 className="heading" id="experience">
        A glimpse into{" "}
        <span className="text-purple">my professional journey</span>
      </h1>
      <div className="w-full flex">
        <Timeline data={data} />
      </div>
    </>
  );
}
