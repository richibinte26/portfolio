"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, Eye } from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  const { resume } = personalInfo;

  return (
    <section id="home" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <h1
            id="hero-title"
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {personalInfo.name}
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-accent sm:text-2xl">{personalInfo.designation}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{personalInfo.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={resume.href} download={resume.fileName} className="btn btn-primary">
              <Download aria-hidden className="h-4 w-4" /> Download Resume
            </a>
            <a href={resume.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Eye aria-hidden className="h-4 w-4" /> View Resume
            </a>
          </div>
          {/* {!resume.ready && (
            <p className="mt-3 max-w-md text-sm placeholder-text">
              Resume placeholder: replace <code>public/resume.pdf</code> with your own file, then set{" "}
              <code>resume.ready</code> to true in <code>data/personal-info.ts</code>.
            </p>
          )} */}

          <SocialLinks className="mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 mx-auto w-full max-w-[17rem] sm:max-w-xs lg:order-2 lg:max-w-sm"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-3xl border-2 border-accent"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-accent-soft">
              <Image
                src={personalInfo.photo.src}
                alt={personalInfo.photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 272px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
