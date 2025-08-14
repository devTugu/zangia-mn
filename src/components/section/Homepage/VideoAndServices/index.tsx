"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css/navigation";

export default function ServicesSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const swiperRef = useRef<any>(null);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Digital Marketing",
      description:
        "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
      image: "/homepage/best/1.png",
    },
    {
      title: "Social Media Marketing",
      description:
        "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
      image: "/homepage/best/2.png",
    },
    {
      title: "Business Analysis",
      description:
        "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
      image: "/homepage/best/3.png",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website traffic with our tailored SEO strategies and keyword optimization.",
      image: "/homepage/best/1.png",
    },
  ];

  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const videoVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const playButtonVariants: any = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 30px rgba(104, 77, 244, 0.4)",
    },
    tap: { scale: 0.95 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const navigationVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#5b21b6",
      transition: {
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative pb-20 md:pb-[120px] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-1"></div>
      <motion.div
        className="absolute left-0 bottom-0 -z-1 h-1/2 w-full bg-[#E9F9FF] h-[85%] lg:h-[75%]"
        style={{
          backgroundImage: "url('/homepage/videoAndBest.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 md:px-0">
        {/* Video */}
        <motion.div
          className="w-full rounded-lg overflow-hidden shadow-2xl max-w-[1440px] lg:min-h-[584px] mx-auto"
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {!isPlaying && (
            <div className="relative bg-gray-200 aspect-video flex items-center justify-center">
              <motion.button
                variants={playButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate="pulse"
                onClick={() => setIsPlaying(true)}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#684df4] hover:bg-purple-600 shadow-lg relative z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                  />
                </svg>
              </motion.button>

              {/* Animated ripple effect */}
              <motion.div
                className="absolute w-14 h-14 rounded-full border-2 border-[#684df4] opacity-30"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          )}

          {isPlaying && (
            <motion.div
              className="aspect-video bg-black rounded-lg flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Video would play here
              </motion.p>
            </motion.div>
          )}
        </motion.div>

        {/* Services */}
        <motion.div
          className="max-w-6xl mx-auto pt-[120px] relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-[16px] text-[#684df4] font-bold mb-[25px]"
            variants={itemVariants}
          >
            OUR SERVICES
          </motion.h2>

          <motion.h1
            className="text-3xl md:text-[40px] font-bold max-w-[415px] mb-[50px] text-gray-800"
            variants={itemVariants}
          >
            Explore Our Best Digital Agency Service
          </motion.h1>

          <motion.div className="relative" variants={itemVariants}>
            <Swiper
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              breakpoints={{
                1024: { slidesPerView: 3 },
                640: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
              className="relative"
            >
              {services.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    className="bg-white/95 backdrop-blur-sm shadow-xl px-[50px] py-[50px] rounded-lg hover:bg-white transition-all duration-300"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={1920}
                        height={1080}
                        className="w-[100px] h-[80px] object-cover rounded-lg mb-[32px]"
                      />
                    </motion.div>

                    <motion.h3
                      className="font-semibold text-[22px] mb-[25px] text-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 text-[16px] mb-[35px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 + 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button className="bg-[#684df4] text-[16px] px-[42px] py-[22px] rounded-sm hover:bg-purple-700 transition-all duration-300 hover:scale-105">
                        Read More
                      </Button>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <motion.div
              ref={prevRef}
              className="hidden xl:flex w-10 h-10 rounded-full bg-[#684df4] items-center justify-center cursor-pointer hover:bg-purple-700 transition absolute -left-14 top-1/2 -translate-y-1/2 z-10"
              variants={navigationVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <ChevronLeft className="text-white w-4 h-4" />
            </motion.div>

            <motion.div
              ref={nextRef}
              className="hidden xl:flex w-10 h-10 rounded-full bg-[#684df4] items-center justify-center cursor-pointer hover:bg-purple-700 transition absolute -right-14 top-1/2 -translate-y-1/2 z-10"
              variants={navigationVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              style={{ x: 20 }}
            >
              <ChevronRight className="text-white w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
