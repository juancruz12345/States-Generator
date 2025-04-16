import { useState } from 'react';
import './Tabs.css'
import { motion } from 'framer-motion';

export function Tabs({ tabs = {} }) {
  const tabNames = Object.keys(tabs);
  const [selected, setSelected] = useState(tabNames[0]);

  return (
    <motion.div className="tabs"
    initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <div className="tab-header">
        {tabNames.map(name => (
          <button
            key={name}
            className={selected === name ? 'active' : ''}
            onClick={() => setSelected(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[selected]}</div>
    </motion.div>
  );
}
