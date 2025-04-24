import { useState, useEffect } from 'react';

export function StateEditor({ stateName, props, onUpdate }) {
  const [localProps, setLocalProps] = useState({ ...props });
  const [newPropKey, setNewPropKey] = useState('');
  const [newPropValue, setNewPropValue] = useState('');
  
  const [inputs, setInputs] = useState(() => {
    const initial = {};
    Object.entries(props).forEach(([k, v]) => {
      initial[k] = typeof v === 'object' ? JSON.stringify(v, null, 2) : String(v);
    });
    return initial;
  });
  

  useEffect(() => {
    setLocalProps({ ...props });
  }, [props]);

  const handleChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  
    // solo parsea si es válido
    try {
      const parsed = eval(`(${value})`);
      if (typeof parsed === 'object' || typeof parsed === 'string' || typeof parsed === 'number') {
        const updated = { ...localProps, [key]: parsed };
        setLocalProps(updated);
        onUpdate(stateName, updated);
      }
    } catch {
      // no se actualiza nada si no es válido
    }
  };
  
  

  const handleAddProp = () => {
    if (!newPropKey) return;
    const updated = {
      ...localProps,
      [newPropKey]: tryParseValue(newPropValue),
    };
    setLocalProps(updated);
    onUpdate(stateName, updated);
    setNewPropKey('');
    setNewPropValue('');
  };

  const handleDeleteProp = (key) => {
    const updated = { ...localProps };
    delete updated[key];
    setLocalProps(updated);
    onUpdate(stateName, updated);
  };

  /*const handleCloneState = () => {
    if (!cloneName) return;
    onClone(cloneName, localProps);
    setCloneName('');
  };*/

  return (
    <div style={{ marginTop: '0.75rem' }}>
      <h4 style={{ marginBottom: '0.25rem' }}>🛠 Props de {stateName}:</h4>
      {Object.entries(localProps).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '0.5rem' }}>
          <label style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{key}</span>
            <button onClick={() => handleDeleteProp(key)} style={{ fontSize: '0.75rem', color: 'crimson', border: 'none', background: 'none', cursor: 'pointer' }}>
              ✖
            </button>
          </label>
          <input
            defaultValue={typeof value === 'object' ? JSON.stringify(value) : value}
            onChange={(e) => handleChange(key, e.target.value)}
            style={{
              width: '100%',
              padding: '0.4rem 0.6rem',
              border: '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '0.85rem',
            }}
          />
        </div>
      ))}

      <div style={{ marginTop: '1rem' }}>
        <h5 style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>➕ Agregar nueva prop</h5>
        <input
          placeholder="nombre"
          value={newPropKey}
          onChange={(e) => setNewPropKey(e.target.value)}
          style={{ width: '45%', marginRight: '5%', padding: '0.4rem', border: '1px solid #ccc',
            borderRadius: '6px' }}
        />
        <input
          placeholder="valor"
          value={newPropValue}
          onChange={(e) => setNewPropValue(e.target.value)}
          style={{ width: '45%', padding: '0.4rem', border: '1px solid #ccc',
            borderRadius: '6px' }}
        />
        <button onClick={handleAddProp} style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem' }}>
          ➕ Agregar
        </button>
      </div>

     
    </div>
  );
}

function tryParseValue(value) {
  try {
    if (value.trim().startsWith('{') || value.trim().startsWith('[')) {
      // eval objeto o array si no es JSON válido
      return eval(`(${value})`);
    }

    if (value === 'true') return true;
    if (value === 'false') return false;
    if (!isNaN(Number(value))) return Number(value);
    if (value === 'null') return null;


    return JSON.parse(value);
  } catch {
    return null; // inválido mientras se escribe
  }
}
