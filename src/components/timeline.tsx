'use client';

import { motion } from "motion/react";
import { useRef } from "react";

const timelineData = [
  {
    year: "2023",
    title: "Project Launch",
    description: "Initial launch of Future Lestari initiative",
  },
  {
    year: "2024",
    title: "Phase 1",
    description: "Expansion of sustainable programs",
  },
  {
    year: "2025",
    title: "Phase 2",
    description: "Implementation of green technologies",
  },
  // Add more timeline items as needed
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id='timeline' className="min-h-screen w-full overflow-hidden grid place-items-center py-20 bg-white">
      <div
        ref={containerRef}
        className="relative flex w-full overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-8 px-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex min-w-[300px] flex-col rounded-lg bg-white p-6 shadow-lg"
            >
              <div className="mb-4 text-3xl font-bold text-emerald-600">
                {item.year}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="absolute -left-4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-emerald-500" />
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-200" />
      </div>
    </section>
  );
};

export default Timeline;
