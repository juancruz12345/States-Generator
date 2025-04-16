import './Badge.css'
import { motion } from 'framer-motion';

export function Badge({ text = 'Nuevo', variant = 'info' }) {
    return <motion.div
    className={`badge badge-${variant}`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
  > <span>{text}</span></motion.div>
  }
 