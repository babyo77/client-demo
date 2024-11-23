"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    id: "industry-experts",
    title: "Industry Experts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "dedicated-team",
    title: "Dedicated Team",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "outcome-focused",
    title: "Outcome Focused",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "high-quality",
    title: "High Quality Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "cyber-security",
    title: "Cyber Security Expert",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function AnimatedFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
          WHY CHOOSE US
        </h2>
        <h3 className="text-4xl font-bold mb-6">
          We Are Different From Others
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-rose-700/90 text-white p-8 rounded-full  max-w-md aspect-square flex items-center"
            >
              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  {activeFeature.title}
                </h4>
                <p className="text-rose-100">{activeFeature.description}</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-0 right-0 translate-x-1/2 z-0"
          >
            <div className="bg-gray-100 rounded-full overflow-hidden w-[450px] h-[450px]">
              <Image
                src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
                alt="Feature illustration"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left px-6 py-3 rounded-full flex items-center space-x-2 rounded-r-none transition-colors
                ${
                  activeFeature.id === feature.id
                    ? "bg-rose-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              <motion.span
                animate={{ rotate: activeFeature.id === feature.id ? 90 : 0 }}
                className="text-xl"
              >
                →
              </motion.span>
              <span className="font-medium">{feature.title}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
