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
      image: "/express.png",
    },
    {
      id: 3,
      name: "ReactJS",
      image: "/re.svg",
    },
    {
      id: 4,
      name: "NodeJS",
      image: "/nodejs.svg",
    },
    {
      id: 5,
      name: "NextJS",
      image: "/next.svg",
    },
  ];
  const data = [
    {
      title: "September 2023 - October 2023",
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 md:text-2xl sm:text-lg font-normal mb-8">
            IoT intern - Subhanu Technologies.
          </h1>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-5">
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
              Designed and developed an IoT-enabled heart rate monitoring system
              using Raspberry Pi, integrating advanced biometric sensors and IoT
              communication protocols for seamless data acquisition and
              transmission. Implemented real-time data collection and
              visualization by leveraging MongoDB, ensuring efficient storage,
              retrieval, and analysis of heart rate metrics. The system enhances
              remote health monitoring by providing secure, scalable, and
              real-time insights, making it suitable for applications in
              telemedicine and healthcare analytics.
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
            Software Developer Intern - Amiti Software Technologies.
          </h1>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-5">
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
              Developed various front-end projects, including a news website,
              weather application, and eCommerce platform using React.js. Built
              full-stack applications such as a real-time chat application
              utilizing the MERN stack with Socket.io for seamless communication
              and a social media platform powered by Next.js for enhanced
              performance and scalability. Experienced in designing, developing,
              and testing APIs using tools like Postman and Thunder Client to
              ensure functionality, performance, and reliability.
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
