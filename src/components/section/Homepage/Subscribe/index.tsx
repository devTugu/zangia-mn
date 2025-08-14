"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Define validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Replace with your actual API endpoint
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (response.ok) {
      setIsSuccessModalOpen(true);
      reset();
      // } else {
      //   throw new Error("Submission failed");
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-[120px] bg-blue-500">
      <div className="container mx-auto px-4 lg:px-0 max-w-6xl">
        <motion.div
          className="grid grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Content */}
          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[40px] font-barlow font-bold text-white"
              variants={itemVariants}
            >
              Let's Talk About Business <br />
              Solutions With Us
            </motion.h2>
          </div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="w-full space-y-2">
                  <Input
                    className="py-[22px] placeholder:text-white text-white"
                    id="name"
                    placeholder="Your Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-200">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="w-full space-y-2">
                  <Input
                    className="py-[22px] placeholder:text-white text-white"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-200">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-end"
                >
                  <Button
                    type="submit"
                    className="px-[67px] py-[22px] bg-white text-[16px] text-roboto hover:bg-gray-100 w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "SUBMIT NOW"}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Success!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-lg">You are successfully subscribed!</p>
            <p className="text-sm text-gray-500 mt-2">
              We'll get back to you soon.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setIsSuccessModalOpen(false)}
              className="hover-scale bg-[#684df4] text-[16px] px-[42px] py-[22px] rounded-sm hover:bg-purple-700"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
