"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Waypoints,
} from "lucide-react";
import "swiper/css/navigation";

// Types
interface TeamMember {
  title: string;
  description: string;
  image: string;
  color: string;
  bgGradient: string;
}

// Animation variants
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
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

const buttonVariants: any = {
  initial: { background: "#684df4", scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(104, 77, 244, 0.4)",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

const navigationVariants: any = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.8 },
  },
  hover: {
    scale: 1.2,
    backgroundColor: "#5b21b6",
    boxShadow: "0 8px 20px rgba(104, 77, 244, 0.3)",
    transition: { duration: 0.2 },
  },
};

const socialIconVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.3 },
  }),
  hover: {
    color: "#684df4",
    backgroundColor: "white",
  },
};

export default function TeamSection() {
  const swiperRef = useRef<any>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      title: "Digital Marketing",
      description:
        "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
      image: "/homepage/best/1.png",
      color: "#684df4",
      bgGradient: "from-purple-500/20 to-blue-600/20",
    },
    {
      title: "Social Media Marketing",
      description:
        "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
      image: "/homepage/best/2.png",
      color: "#3b82f6",
      bgGradient: "from-blue-500/20 to-indigo-600/20",
    },
    {
      title: "Business Analysis",
      description:
        "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
      image: "/homepage/best/3.png",
      color: "#10b981",
      bgGradient: "from-emerald-500/20 to-teal-600/20",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website traffic with our tailored SEO strategies and keyword optimization.",
      image: "/homepage/best/1.png",
      color: "#f59e0b",
      bgGradient: "from-amber-500/20 to-orange-600/20",
    },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section
      className="py-20 md:py-[120px] relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/homepage/team/background.jpg')" }}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-0">
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <motion.h2
                className="text-[16px] text-[#684df4] font-bold mb-4 font-barlow"
                variants={itemVariants}
              >
                TEAM MEMBERS
              </motion.h2>
              <motion.h1
                className="text-3xl md:text-[40px] font-bold max-w-[415px] text-gray-800 font-barlow"
                variants={itemVariants}
              >
                Our Top Skilled Experts
              </motion.h1>
            </div>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="bg-[#684df4] text-[16px] font-roboto px-[42px] py-[22px] rounded-sm hover:bg-purple-700 transition-all duration-300">
                VIEW ALL TEAM
              </Button>
            </motion.div>
          </div>

          {/* Team members slider */}
          <motion.div className="relative" variants={itemVariants}>
            <Swiper
              modules={[Navigation]}
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              breakpoints={{
                1024: { slidesPerView: 3 },
                640: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="relative"
            >
              {teamMembers.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    className={`relative overflow-hidden bg-gray-200 backdrop-blur-sm shadow-xl p-5 rounded-xl w-full h-[440px] flex flex-col justify-between group ${
                      hoveredIndex === idx
                        ? `bg-gradient-to-br ${member.bgGradient} shadow-2xl`
                        : ""
                    }`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onHoverStart={() => setHoveredIndex(idx)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    {/* Social icons */}
                    <div className="flex flex-col items-end mb-12 gap-3">
                      {[Waypoints, Facebook, Twitter, Instagram].map(
                        (Icon, i) => (
                          <motion.div
                            key={i}
                            className={`bg-[#684df4] text-white rounded-full p-2 ${
                              i > 0 ? "hidden group-hover:flex" : ""
                            }`}
                            variants={socialIconVariants}
                            initial="hidden"
                            animate="visible"
                            custom={i}
                            whileHover="hover"
                          >
                            <Icon className="w-5 h-5" />
                          </motion.div>
                        )
                      )}
                    </div>

                    {/* Member info */}
                    <motion.div
                      className="bg-white/90 py-6 rounded-md text-center px-4 group-hover:bg-[#684df4]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.h3 className="font-semibold text-[22px] mb-3 transition-colors duration-300 group-hover:text-white">
                        {member.title}
                      </motion.h3>
                      <motion.p className="text-[16px] transition-colors duration-300 group-hover:text-white">
                        {member.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <motion.div
              ref={prevRef}
              className="hidden xl:flex w-12 h-12 rounded-full bg-[#684df4] items-center justify-center cursor-pointer absolute -left-16 top-1/2 -translate-y-1/2 z-10 shadow-lg"
              variants={navigationVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </motion.div>

            <motion.div
              ref={nextRef}
              className="hidden xl:flex w-12 h-12 rounded-full bg-[#684df4] items-center justify-center cursor-pointer absolute -right-16 top-1/2 -translate-y-1/2 z-10 shadow-lg"
              variants={navigationVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <ChevronRight className="text-white w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
