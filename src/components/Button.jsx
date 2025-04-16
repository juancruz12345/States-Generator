import './Button.css'
import { motion } from 'framer-motion';

export function Button({ label = 'Click me', loading, disabled, error, success }) {
    const getClass = () => {
      if (error) return 'btn error';
      if (success) return 'btn success';
      if (loading) return 'btn loading';
      return 'btn default';
    };
  
    return (
      <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      >
        <button disabled={disabled || loading} className={getClass()}>
        {loading ? 'Cargando...' : label}
      </button>
      </motion.div>
    );
  }
  