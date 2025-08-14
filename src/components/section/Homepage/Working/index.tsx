"use client";
import { getEmptyData } from "@/data/posts";
import { fetchAllPostsData } from "@/services/postsService";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WorkingSection = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const { posts }: any = await fetchAllPostsData();

      if (posts?.error) {
        setError(posts.message || "Failed to load data");
        setData(getEmptyData());
      } else {
        setData(posts);
        setError(null);
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch data");
      setData(getEmptyData());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const displayedPosts = Array.isArray(data?.posts)
    ? data.posts.slice(0, 4)
    : [];

  return (
    <section className="py-[120px]">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-block">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#684df4] text-[16px] font-barlow font-bold uppercase tracking-wider mb-[25px]"
            >
              WORK PROCESS
            </motion.span>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-[40px] font-bold text-[#141d38] font-barlow leading-tight mb-[40px]"
          >
            Our Easy Working Steps
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPosts.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className="h-full hover:shadow-lg transition-shadow">
                <div className="relative text-[16px] font-bold mb-[27px] text-center">
                  <motion.div
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Image */}
                    <motion.img
                      src="/homepage/working/bg-cover.png"
                      alt={`Step ${step.id} Icon`}
                      width={157}
                      height={157}
                      className="rounded-lg"
                      animate={{
                        scale: [1, 1.02, 1],
                        rotate: [0, 1, -1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center text-white bg-blue-500 rounded-full font-barlow">
                      <span>{step.id}</span>

                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-white/70"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 0.3, 0.6],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                <h3 className="text-[22px] font-barlow font-semibold text-[#141d38] mb-[25px] text-center truncate">
                  {step.title}
                </h3>

                <div>
                  <p className="text-[16px] text-muted-foreground text-center line-clamp-2">
                    {step.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;
