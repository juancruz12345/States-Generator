import { motion } from 'framer-motion';
import './Alert.css'

export default function Alert({ message = '¡Algo pasó!', type = 'info' }) {
  return (
    <motion.div
      className={`alert alert-${type}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      {message}
    </motion.div>
  );
}

  