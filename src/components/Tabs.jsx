import { useState } from 'react';
import './Tabs.css'

export function Tabs({ tabs = {} }) {
  const tabNames = Object.keys(tabs);
  const [selected, setSelected] = useState(tabNames[0]);

  return (
    <div className="tabs">
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
    </div>
  );
}
