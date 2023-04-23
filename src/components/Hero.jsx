import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";

import Computers from './canvas/Computers';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <Computers />
      </div>
    </section>
  );
};

export default Hero;
