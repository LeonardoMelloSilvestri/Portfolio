import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";

export default function Footer() {
  return (
    <>
      <footer className="w-full dark:bg-indigo-500 bg-indigo-600 p-4 mt-16">
        <motion.span
          variants={slideInFromLeft()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <h1 className="text-lg text-white font-semibold">
            Handcrafted by Leonardo Mello Silvestri
          </h1>
        </motion.span>
      </footer>
    </>
  );
}
