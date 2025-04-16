import './Loader.css'
import { motion } from 'framer-motion';

export function Loader({ size = 32 }) {
    return (
      <motion.div
        className="spinner"
        initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
        style={{ width: size, height: size, borderWidth: size / 8, display:'flex', margin:'0 auto' }}
      />
    );
  }
  