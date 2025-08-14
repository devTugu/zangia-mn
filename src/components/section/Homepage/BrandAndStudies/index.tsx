"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import "swiper/css/pagination";

export default function BrandAndStudiesSection() {
  const swiperRef: any = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Web Development",
      description: "Business marketing",
    },
    {
      title: "SEO Development",
      description: "Business marketing",
    },
    {
      title: "Analysis Development",
      description: "Business marketing",
    },
    {
      title: "Mobile Development",
      description: "Business marketing",
    },
    {
      title: "Data Development",
      description: "Business marketing",
    },
  ];

  // Энгийн animation variants
  const fadeIn: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    // Pagination автоматаар ажиллана
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute left-0 top-0 -z-10 w-full h-[85%] lg:h-[65%] bg-[#E9F9FF]"
        style={{
          backgroundImage: "url('/homepage/brand/background.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          {/* Brand images */}
          <motion.div
            className="w-full mt-[85px] px-4 lg:px-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <Image
                src="/homepage/brand/ban1.png"
                alt="Brand 1"
                width={145}
                height={30}
              />
              <Image
                src="/homepage/brand/ban2.png"
                alt="Brand 2"
                width={133}
                height={30}
              />
              <Image
                src="/homepage/brand/ban3.png"
                alt="Brand 3"
                width={150}
                height={30}
              />
              <Image
                src="/homepage/brand/ban4.png"
                alt="Brand 4"
                width={137}
                height={30}
              />
              <Image
                src="/homepage/brand/ban5.png"
                alt="Brand 5"
                width={170}
                height={30}
              />
            </div>
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.div
          className="mx-auto pt-[200px] relative px-[28px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-[16px] text-[#684df4] font-bold mb-[25px] text-center"
            variants={fadeIn}
          >
            OUR PROJECTS
          </motion.h2>

          <motion.h1
            className="text-center text-3xl md:text-[40px] font-bold mb-[60px] text-white"
            variants={fadeIn}
          >
            Explore Latest Case Studies
          </motion.h1>

          <motion.div variants={fadeIn}>
            <Swiper
              modules={[Pagination]}
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 2 },
                640: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {services.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    className="relative bg-gray-100 hover:bg-blue-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer h-80"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Content positioned at top */}
                    <div className="p-[50px]">
                      <h3 className="font-semibold text-xl mb-[14px] text-gray-100 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-100 text-sm group-hover:text-gray-200 transition-colors duration-300 mb-[20px]">
                        {service.description}
                      </p>

                      <motion.div
                        className="relative inline-flex group"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {hoveredIndex === idx && (
                          <motion.span
                            className="absolute inset-0 rounded-full border-2 border-white/90"
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{
                              scale: [1, 1.15, 1],
                              opacity: [0.6, 0.3, 0.6],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}

                        <Button
                          size="sm"
                          className="w-10 h-10 p-0 bg-white hidden group-hover:flex text-gray-700 rounded-full hover:bg-white hover:text-white transition-all duration-300 hover:scale-105 shadow-md relative z-10"
                        >
                          <ArrowRight className="w-4 h-4 group-hover:text-black" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom pagination styles */}
            <style jsx global>{`
              .swiper-pagination {
                position: relative !important;
                margin-top: 50px;
                text-align: center;
              }
              .swiper-pagination-bullet {
                width: 40px;
                height: 10px;
                background: #cbd5e1;
                opacity: 1;
                margin: 0 15px !important;
                transition: all 0.3s ease;
                border-radius: 0 !important;
              }
              .swiper-pagination-bullet-active {
                background: #3b82f6;
                transform: scale(1.2);
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
