"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Types
interface Post {
  title: string;
  description: string;
  image: string;
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

export default function PostsSection() {
  const posts: Post[] = [
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
  ];

  return (
    <section className="py-20 md:py-[120px] relative bg-white">
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
                LATEST BLOG
              </motion.h2>
              <motion.h1
                className="text-3xl md:text-[40px] font-bold max-w-[415px] text-gray-800 font-barlow"
                variants={itemVariants}
              >
                Recent blog posts and news insight
              </motion.h1>
            </div>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="bg-[#684df4] text-[16px] font-roboto px-[42px] py-[22px] rounded-sm hover:bg-purple-700 transition-all duration-300">
                VIEW ALL POSTS
              </Button>
            </motion.div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            {posts.map((post, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                className="flex flex-col rounded-md gap-[25px]"
              >
                <div className="relative bg-gray-200 aspect-square rounded-md">
                  <Button className="absolute right-[15px] bottom-[15px] bg-[#684df4] text-[16px] font-roboto px-[17px] py-[10px] rounded-sm hover:bg-purple-700 transition-all duration-300">
                    Digital Agency
                  </Button>
                </div>

                <span className="text-[16px] text-muted-foreground font-barlow">
                  January 20, 2025
                </span>

                <h3 className="font-barlow font-semibold text-[22px]">
                  {post.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
