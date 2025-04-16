import { useState } from 'react';
import './Tooltip.css'
import { motion } from 'framer-motion';

export function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
   <motion.div
   initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      >
     <span
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <span className="tooltip-text">{text}</span>}
    </span>
   </motion.div>
  );
}
