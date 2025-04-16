import { StateEditor } from './StateEditor.jsx';
import { useEffect, useState } from 'react';

const parsePropValue = (value) => {
  try {
    const parsed = JSON.parse(value);
    return parsed;
  } catch {
    if (typeof value === 'string' && value.trim().startsWith('(')) {
      try {
        // Evaluar función solo si empieza con "("
        return eval(value);
      } catch {
        return value;
      }
    }
    return value;
  }
};


export default function StateRenderer({ name, Component, states }) {
  const [localStates, setLocalStates] = useState({ ...states });
  const [showExport, setShowExport] = useState(false);
 useEffect(()=>{
  setLocalStates(states)
 },[Component])
  
 
 const handlePropChange = (stateName, newProps) => {
    setLocalStates((prev) => ({
      ...prev,
      [stateName]: newProps,
    }));
  };

  const handleClone = (newName, props) => {
    if (localStates[newName]) {
      alert('⚠️ Ya existe un estado con ese nombre.');
      return;
    }
    setLocalStates((prev) => ({
      ...prev,
      [newName]: props,
    }));
  };

  const generateJSXCode = () => {
    const entries = Object.entries(localStates)
      .map(([key, val]) => `  ${JSON.stringify(key)}: ${JSON.stringify(val, null, 2)}`)
      .join(',\n');

    return `export const states = {\n${entries}\n};`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateJSXCode());
    alert('📋 Código copiado al portapapeles');
  };

  const downloadJSFile = () => {
    const blob = new Blob([generateJSXCode()], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.replace(/\s/g, '')}_states.js`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const mapProps = (rawProps) => {
    const result = {};
    for (const key in rawProps) {
      result[key] = parsePropValue(rawProps[key]);
    }
    return result;
  };
  

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       
        <button onClick={() => setShowExport(!showExport)} style={{ fontSize: '0.9rem' }}>
          {showExport ? '🔽 Ocultar exportación' : '📤 Exportar estados'}
        </button>
      </div>

      {showExport && (
        <div style={{ margin: '1rem 0' }}>
          <p style={{ fontWeight: 600 }}>💾 Copia y pega esto:</p>

          <div style={{ position: 'relative' }}>
            <pre
              style={{
                background: '#1e1e1e',
                color: '#dcdcdc',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
              }}
            >
              {generateJSXCode()}
            </pre>

            <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
              <button onClick={copyToClipboard} style={{ fontSize: '0.85rem' }}>
                📋 Copiar
              </button>
              <button onClick={downloadJSFile} style={{ fontSize: '0.85rem' }}>
                💾 Descargar `.js`
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="state-container">
        {Object.entries(localStates).map(([stateName, props]) => (
          <div key={stateName} className="state-card">
            <h3>{stateName}</h3>
            <div className="state-preview">
              <Component  key={props?.type || 'default'} {...mapProps(props)} />
            </div>
            <StateEditor
              stateName={stateName}
              props={props}
              onUpdate={handlePropChange}
              onClone={handleClone}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

  