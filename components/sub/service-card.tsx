"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: readonly string[];
  index: number;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  features,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-gradient-to-br from-[#0300145e] to-[#000319] p-6 hover:scale-105 transition-all duration-300 max-w-sm"
    >
      {/* Icon */}
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 relative">
          <Image
            src={`/skills/${icon}`}
            alt={title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white text-center mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-400 text-sm">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};