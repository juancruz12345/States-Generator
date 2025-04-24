import { color } from 'framer-motion';
import './Tabs.css';
import { useState } from 'react';

function Tabs({...props}) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Inicio", "Perfil", "Ajustes"];
  const contents = ["Contenido de Inicio", "Contenido de Perfil", "Contenido de Ajustes"];

  return (
    <div className="tabs" >
      <div className="tablist">
        {tabs.map((tab, i) => (
          <button
          
            key={i}
            className={i === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(i)}
            {...props}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tabpanel">{contents[activeTab]}</div>
    </div>
  );
}

export default Tabs;

export const states = {
  Default: {},
  Minimal:{style:{backgroundColor:"transparent", color:"grey"}}

};
