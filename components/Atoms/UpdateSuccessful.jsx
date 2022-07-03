import { motion } from "framer-motion";
import Image from "next/image";
import GreenTick from "../../public/images/green_tick.png";

export default function UpdateSuccessful({}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -1150 }}
      transition={{ duration: 10 }}
    >
      <div className="w-5 flex justify-center inems-center">
        <Image src={GreenTick} alt="green-tick" />
      </div>
    </motion.div>
  );
}
