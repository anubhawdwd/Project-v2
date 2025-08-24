import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiAngular,
  SiDotnet,
} from "react-icons/si";

const stack = [
  { Icon: FaReact, name: "React.js" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: FaNodeJs, name: "Node.js" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiAngular, name: "Angular" },
  { Icon: SiDotnet, name: ".NET" },
];

export default function TechGrid() {
  return (
    <div className="mt-12 grid grid-cols-4 gap-6">
      {stack.map(({ Icon, name }, idx) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.17, y: -8, boxShadow: "0 6px 20px #64748b25" }}
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center rounded-xl bg-neutral-100 p-3 shadow dark:bg-neutral-800"
        >
          <Icon size={40} />
          <span className="mt-2 text-xs">{name}</span>
        </motion.div>
      ))}
    </div>
  );
}
