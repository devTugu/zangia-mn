"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content:
        "Testimonials from satisfied team members enhance our reputation and build trust, as people tend to rely on service reviews as they purchased a shoe during seasons such as previous happy customers.",
      author: "Imran Khan",
      role: "Web Designer",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      content:
        "Working with this team has been an incredible experience. Their attention to detail and commitment to excellence is unmatched in the industry.",
      author: "Sarah Johnson",
      role: "Product Manager",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      content:
        "The level of professionalism and creativity they bring to every project is outstanding. I highly recommend their services to anyone looking for quality work.",
      author: "Michael Chen",
      role: "Creative Director",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const blobVariants: any = {
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const testimonialVariants: any = {
    enter: {
      x: 50,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-8">
      <motion.div
        className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Animated Blob */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-80 h-80 lg:w-96 lg:h-96"
            variants={blobVariants}
            animate="animate"
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-400 via-[#684df4] to-[#684df4] rounded-full opacity-90 shadow-2xl blur-sm"></div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-10 left-10 w-4 h-4 bg-purple-300 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-16 right-12 w-6 h-6 bg-purple-200 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </motion.div>

        {/* Right side - Testimonials Content */}
        <motion.div variants={itemVariants}>
          {/* Header */}
          <div className="space-y-[25px] mb-[60px]">
            <motion.div
              className="text-[#684df4] font-barlow font-bold text-[16px] uppercase tracking-wider"
              variants={itemVariants}
            >
              TESTIMONIALS
            </motion.div>
            <motion.h2
              className="text-4xl lg:text-[40px] font-barlow font-bold text-[#141d38] leading-tight"
              variants={itemVariants}
            >
              What Happy Clients Says
              <br />
              About Us?
            </motion.h2>
          </div>

          {/* Quote Icon */}
          <motion.div variants={itemVariants}>
            <Quote className="w-12 h-12 text-[#684df4] opacity-60 mb-[40px]" />
          </motion.div>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <p className="text-lg text-gray-600 leading-relaxed mb-6 border-b pb-[40px]">
                  {testimonials[currentIndex].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Author Info */}
          <motion.div
            className="flex items-center justify-between"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              </motion.div>
              <div>
                <motion.h4
                  className="font-semibold text-gray-900"
                  key={`name-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {testimonials[currentIndex].author}
                </motion.h4>
                <motion.p
                  className="text-sm text-gray-500"
                  key={`role-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonials[currentIndex].role}
                </motion.p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-[20px]">
              <motion.button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
