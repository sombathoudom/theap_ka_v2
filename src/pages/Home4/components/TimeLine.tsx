"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  ChevronDown,
  LucideIcon,
} from "lucide-react";
import { TIMELINE, TIMELINE_SECOND } from "./data/sample";
import { cn } from "../../../utils/validation";

export interface TimeLineItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface TimeLineRoadmapProps {
  timelines?: TimeLineItem[];
  className?: string;
}

// const typeIcons = {
//   work: Briefcase,
//   education: GraduationCap,
//   project: Code,
//   achievement: Award,
// };

// const typeColors = {
//   work: "bg-blue-500",
//   education: "bg-green-500",
//   project: "bg-purple-500",
//   achievement: "bg-yellow-500",
// };

function TimeLineCard({
  timeline,
  last,
}: {
  timeline: TimeLineItem;
  last: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return ( 
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative flex items-start w-full min-h-24"
    >
      {/* Timeline line connector - responsive positioning */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`absolute left-6 top-0 w-[2px] h-full bg-gradient-to-b from-[#f9c20c] to-yellow-200 origin-top ${
          last && " hidden"
        }`}
      />

      {/* Timeline dot - responsive positioning */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
        }
        transition={{ duration: 0.5, delay: 0.6 }}
        className={cn(
          "absolute left-3 top-0 w-6 h-6 rounded-full border-2 border-primary shadow-lg flex items-center justify-center z-10 shrink-0 bg-white"
        )}
      >
        <timeline.icon className="text-primary size-3" />
      </motion.div>

      {/* TimeLine card - responsive layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.5, delay: 0.8 }}
        className={cn("w-full ml-12")}
      >
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-sm text-white  moul-regular  flex items-center">
            {timeline.title}
          </h3>
          <span className="text-sm/6 text-primary text-left metal-regular tracking-wide" dangerouslySetInnerHTML={{ __html: timeline.subtitle }}>
          </span>

        </div>
      </motion.div>
    </motion.div>
   
  );
}

export default function TimeLine({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-16 mt-12"
      >
        <h1 className="text-center text-3xl leading-loose moulpali-medium text-primary">
          របៀបភាវរៈកម្មវិធី
        </h1>
        <p className="text-primary text-sm moul-regular leading-8 text-center whitespace-nowrap col-span-2 ">
          កម្មវិធីថ្ងៃទី១ ថ្ងៃ សៅរ៍ ទី ២១ ខែ កុម្ភះ ឆ្នាំ ២០២៦
        </p>
      </motion.div>
      <div className="relative max-w-sm mx-auto">
        {TIMELINE.map((timeline, index) => (
          <TimeLineCard
            key={index}
            timeline={timeline}
            last={TIMELINE.length - 1 === index}
          />
        ))}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-4 left-3 w-6 h-6 bg-gradient-to-r from-[#f9c20c] to-yellow-200 rounded-full"
        /> */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-16"
      >
        <p className="text-primary text-sm moul-regular leading-8 text-center whitespace-nowrap col-span-2 ">
          កម្មវិធីថ្ងៃទី២ ថ្ងៃ អាទិត្យ ទី ២២ ខែ កុម្ភះ ឆ្នាំ ២០២៦
        </p>
      </motion.div>
      <div className="relative max-w-sm mx-auto">
        {TIMELINE_SECOND.map((timeline, index) => (
          <TimeLineCard
            key={index}
            timeline={timeline}
            last={TIMELINE_SECOND.length - 1 === index}
          />
        ))}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute -bottom-4 left-3 w-6 h-6 bg-gradient-to-r from-[#f9c20c] to-yellow-200 rounded-full"
        /> */}
      </div>
    </div>
  );
}
