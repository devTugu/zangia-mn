"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5 },
  }),
};

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/homepage/hero.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-w-6xl mx-auto grid grid-cols-1 items-center py-[213px] font-roboto px-4 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.span
            custom={1}
            variants={fadeUp}
            className="text-[20px] text-[#684df4]"
          >
            BEST AGENCY SERVICE
          </motion.span>
          <motion.h1
            custom={2}
            variants={fadeUp}
            className="text-4xl md:text-[75px] font-bold leading-tight max-w-[800px]"
          >
            WE WORLD RANKING Digital IT Agency
          </motion.h1>
          <motion.p
            custom={3}
            variants={fadeUp}
            className="text-[16px] text-muted-foreground"
          >
            Bastech provides endless possibilities and unique solutions, and
            idea sharing for <br />
            simple and streamlined digital proccess.
          </motion.p>
          <motion.div
            custom={4}
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <Button className="hover-scale bg-[#684df4] text-[16px] px-[42px] py-[22px] rounded-sm hover:bg-purple-700">
              READ MORE
            </Button>
            <Button
              variant="outline"
              className="hover-scale text-[16px] px-[42px] py-[22px] bg-transparent border-none"
            >
              CONTACT US
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
