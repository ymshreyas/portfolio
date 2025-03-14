"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="heading my-8">
        Tools and technologies that{" "}
        <span className="text-purple">I work on</span>
      </h1>
      <InfiniteMovingCards items={testimonials} />
    </div>
  );
}

const testimonials = [
  {
    name: "Bootstrap",
    imgurl: "./bootstrap.png",
  },
  {
    name: "MongoDB",
    imgurl: "./mongo.svg",
  },
  {
    name: "Express",
    imgurl: "./express.png",
  },
  {
    name: "React",
    imgurl: "./re.svg",
  },
  {
    name: "Node",
    imgurl: "./nodejs.svg",
  },
  {
    name: "Next.js",
    imgurl: "./next.svg",
  },
  {
    name: "MySQL",
    imgurl: "./mysql.png",
  },
  {
    name: "Tailwind",
    imgurl: "./tail.svg",
  },
  {
    name: "Django",
    imgurl: "./django.svg",
  },
];
