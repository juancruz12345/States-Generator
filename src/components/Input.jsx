import './Input.css'
import { motion } from 'framer-motion';

export function Input({ placeholder = 'Escribí algo', error, type }) {
    return (
     <motion.div
     initial={{ opacity: 0, y: -10 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 10 }}>
       <input
        key={type} type={type}
        className={`input ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
      />
     </motion.div>
    );
  }
  