import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a
        href="/Arafat_Nill_Resume.pdf"
        download="Arafat_Nill_Resume.pdf"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors border rounded-md shadow-sm border-primary/20 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </a>
    </motion.div>
  );
}
