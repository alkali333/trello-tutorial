"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Shit",
    },
    {
      text: "the",
    },
    {
      text: "bed",
    },
    {
      text: "again",
    },
    {
      text: "and again.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
