"use client";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const WhyChooseUs = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const leftContentVariants: any = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightContentVariants: any = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const circleVariants: any = {
    hidden: { scale: 0.5, rotate: 45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.5, ease: "backOut" },
    },
  };

  const progressBarVariants: any = {
    hidden: { width: 0 },
    visible: (width: string) => ({
      width,
      transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" },
    }),
  };

  const floatingElementVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="relative container mx-auto max-w-6xl px-4 lg:px-0 py-[120px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div variants={leftContentVariants}>
            {/* Badge */}
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#684df4] text-[16px] font-barlow font-bold uppercase tracking-wider mb-[25px]"
              >
                WHY CHOOSE US
              </motion.span>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-[40px] font-bold text-[#141d38] font-barlow leading-tight mb-[40px]"
            >
              Why People IT Services <br /> Choose Us?
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg mb-[40px]"
            >
              Nunc eu augue at nunc consectetur venenatis sit amet sodales
              metus. Sed at gravida nisl, mattis lacinia ipsum. pellentesque
              suscipit odio quis ligula Integer cursus ipsum et posuere ornare.
            </motion.p>

            {/* Statistics */}
            <div className="space-y-[30px]">
              <div className="space-y-[17px]">
                <div className="flex justify-between items-center">
                  <span className="text-[#141d38] font-semibold text-[20px] font-barlow">
                    Business Grow
                  </span>
                  <span className="text-[#141d38] font-bold text-xl">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    variants={progressBarVariants}
                    custom="85%"
                    className="bg-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-3 mb-[60px]">
                <div className="flex justify-between items-center">
                  <span className="text-[#141d38] font-semibold text-[20px] font-barlow">
                    Quality Products
                  </span>
                  <span className="text-[#141d38] font-bold text-xl">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    variants={progressBarVariants}
                    custom="98%"
                    className="bg-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="hover-scale bg-[#684df4] text-[16px] px-[42px] py-[22px] rounded-sm hover:bg-purple-700">
                ABOUT US
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Shapes */}
          <motion.div variants={rightContentVariants}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Gray Circle */}
              <motion.div
                variants={circleVariants}
                className="w-96 h-96 bg-gray-400 rounded-full relative"
              >
                {/* Blue Accent Shapes */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "backOut" }}
                  className="absolute -top-8 -right-8 w-32 h-32 bg-blue-600 rounded-full"
                ></motion.div>
              </motion.div>

              {/* Small Floating Element */}
              <motion.div
                variants={floatingElementVariants}
                className="absolute -bottom-12 -right-8 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-lg"
              >
                <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
