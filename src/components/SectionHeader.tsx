import { motion } from "framer-motion";
import { fadeUp } from "@Utils/motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
};

const SectionHeader = ({ eyebrow, title }: SectionHeaderProps) => {
  return (
    <motion.div
      className="section__header"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h5>{eyebrow}</h5>
      <h2>{title}</h2>
      <span className="section__header-line" aria-hidden="true" />
    </motion.div>
  );
};

export default SectionHeader;
