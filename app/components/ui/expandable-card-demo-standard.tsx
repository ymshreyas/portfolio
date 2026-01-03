"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<
    (typeof certifications)[number] | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 flex items-center justify-center px-3 z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="
                w-[92%] max-w-[500px] max-h-[85vh] h-fit
                flex flex-col
                bg-white dark:bg-neutral-900
                rounded-3xl overflow-hidden
              "
            >
              {/* Certificate Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 md:h-80 object-contain object-top"
                />
              </motion.div>

              {/* Details */}
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg md:text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  
                </div>

                {/* Certificate Description */}
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-y-auto max-h-[35vh] text-neutral-600 dark:text-neutral-400 text-sm md:text-base"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>

              {/* Close Button */}
              <motion.button
                layout
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-7 w-7 text-black dark:text-white"
              >
                ✕
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* List of Cards */}
      <ul className="max-w-3xl mx-auto w-full gap-4 flex flex-col">
        {certifications.map((cert) => (
          <motion.div
            layoutId={`card-${cert.title}-${id}`}
            key={`card-${cert.title}-${id}`}
            onClick={() => setActive(cert)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-700"
          >
            <div className="flex gap-4 flex-col items-center md:flex-row md:items-start">
              <motion.div
                layoutId={`image-${cert.title}-${id}`}
                className="flex justify-center"
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="h-24 w-24 md:h-14 md:w-14 rounded-lg object-contain"
                />
              </motion.div>

              <div className="text-center md:text-left">
                <motion.h3
                  layoutId={`title-${cert.title}-${id}`}
                  className="font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  {cert.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${cert.description}-${id}`}
                  className="text-sm text-neutral-500 dark:text-neutral-400"
                >
                  {cert.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${cert.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-purple hover:text-white dark:bg-neutral-700 dark:hover:bg-purple mt-4 md:mt-0"
            >
              {cert.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const certifications = [
  {
    title: "Machine Learning Specialization",
    description: "Stanford Online · Deeplearning.ai",
    src: "/ML.png",
    ctaText: "View Certificate",
    content: () => (
      <p>
        Covers machine learning concepts, algorithms, and applications. Provides
        hands-on experience with machine learning algorithms and applications.
        Includes real-world case studies and industry best practices.
      </p>
    ),
  },
  {
    title: "Ethical Hacking",
    description: "NPTEL · IIT Khargpur",
    src: "/EH.png",
    ctaText: "View Certificate",
    content: () => (
      <p>
        Covers ethical hacking concepts, tools, and techniques. Provides
        hands-on experience with ethical hacking tools and techniques. Includes
        real-world case studies and industry best practices.
      </p>
    ),
  },
  {
    title: "Cloud Computing",
    description: "NPTEL · IIT Khargpur",
    src: "/CC.png",
    ctaText: "View Certificate",
    content: () => (
      <p>
        Covers cloud computing concepts, services, and deployment models.
        Provides hands-on experience with cloud platforms and services. Includes
        real-world case studies and industry best practices.
      </p>
    ),
  },
  {
    title: "Python and Django Full Stack Web Developer Bootcamp",
    description: "Udemy · Pierian Data",
    src: "/PJ.jpg",
    ctaText: "View Certificate",
    content: () => (
      <p>
        Covers full stack web development concepts, tools, and techniques using django framework.
        Provides hands-on experience with full stack web development.
        Includes real-world projectsand industry best practices.
      </p>
    ),
  },
];
