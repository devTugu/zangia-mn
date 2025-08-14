"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Counter component - 0-с зорилтот утга хүртэл анимэйшнээр өсгөдөг компонент
const AnimatedCounter = ({ value, duration = 3, suffix = "" }) => {
  const ref = useRef(null);
  // Motion value - анимэйшнд хэрэглэнэ
  const motionValue = useMotionValue(0);
  // Spring анимэйшн - хөдөлгөөний зөөлөн шилжилт
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  // Компонент харагдаж эхлэх үед анимэйшн эхлүүлэх
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Дэлгэц дээр харуулах утга
  const [displayValue, setDisplayValue] = useState(0);

  // Харагдаж эхлэхэд motionValue-г зорилтот утгад тохируулна
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  // Spring value өөрчлөгдөх бүрт дэлгэц дээрх утгыг шинэчилнэ
  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-[40px] font-bold font-barlow"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

const AboutUs = () => {
  const ref = useRef(null);
  // About хэсэг харагдаж эхлэхэд анимэйшн идэвхжүүлнэ
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Статистик мэдээллийн массив
  const stats = [
    {
      value: 1800,
      suffix: "+",
      label: "Projects Complete", // Дууссан төслүүд
    },
    {
      value: 450,
      suffix: "+",
      label: "Happy Customers", // Сэтгэл хангалуун харилцагчид
    },
    {
      value: 200,
      suffix: "+",
      label: "Years Experience", // Жилийн туршлага
    },
  ];

  return (
    <section className="py-[120px]">
      <div ref={ref} className="container max-w-6xl mx-auto px-4 lg:px-0">
        {/* Бүх агуулгыг анимэйшнтэйгээр үзүүлнэ */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div></div>
            {/* Баруун талд - Компанийн мэдээлэл */}
            <div>
              {/* Гарчиг, тайлбар хэсэг */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-[#684df4] font-semibold text-[16px] uppercase tracking-wide mb-[25px] font-barlow">
                  ABOUT OUR COMPANY
                </p>
                <h2 className="text-4xl md:text-[45px] font-bold text-gray-900 mb-[32px] leading-tight font-barlow">
                  We Are An Awesome
                  <br />
                  Agency Solution
                </h2>
                <p className="text-muted-foreground text-[16px] font-roboto leading-relaxed mb-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </motion.div>

              {/* Статистик мэдээлэл */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[26px] mb-[35px]">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Анимэйшнтэй тоолуур */}
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={3}
                    />
                    <p className="text-[16px] font-medium mt-2 font-roboto text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Давуу талуудын жагсаалт */}
              <motion.div
                className="mb-[60px]"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex flex-col gap-[18px]">
                  <div className="flex items-center gap-[10px]">
                    <Checkbox
                      id="terms"
                      className="accent-[#684df4] data-[state=checked]:bg-[#684df4]"
                      defaultChecked
                    />
                    <Label
                      className="text-[16px] font-barlow font-bold"
                      htmlFor="terms"
                    >
                      Өрсөлдөгчдөөсөө давуу талаа шинжилж гаргах
                    </Label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <Checkbox
                      className="accent-[#684df4] data-[state=checked]:bg-[#684df4]"
                      id="terms-2"
                      defaultChecked
                    />
                    <div className="grid gap-2">
                      <Label
                        className="text-[16px] font-barlow font-bold"
                        htmlFor="terms-2"
                      >
                        Ажиллах үр дүнтэй арга замыг тодорхойлох
                      </Label>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* "About Us" товч */}
              <motion.button
                className="bg-[#684df4] text-white font-semibold py-[21px] px-[47px] rounded-sm transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ABOUT US
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
