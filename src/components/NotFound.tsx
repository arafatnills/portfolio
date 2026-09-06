"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-lg"
      >
        {/* Icon & 404 Text */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="p-4 bg-muted rounded-full">
            <AlertCircle className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-8xl font-extrabold tracking-tighter text-foreground mt-4">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Page Not Found
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
           {` Sorry, the page you are looking for doesn't exist or has been moved. 
            Let's get you back on track.`}
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 rounded-md shadow-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}