import { useState, useEffect } from 'react';

export function StateEditor({ stateName, props, onUpdate, onClone }) {
  const [localProps, setLocalProps] = useState({ ...props });
  const [newPropKey, setNewPropKey] = useState('');
  const [newPropValue, setNewPropValue] = useState('');
  const [cloneName, setCloneName] = useState('');

  useEffect(() => {
    setLocalProps({ ...props });
  }, [props]);

  const handleChange = (key, value) => {
    const updated = {
      ...localProps,
      [key]: tryParseValue(value),
    };
    setLocalProps(updated);
    onUpdate(stateName, updated);
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

  const handleCloneState = () => {
    if (!cloneName) return;
    onClone(cloneName, localProps);
    setCloneName('');
  };

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
            value={typeof value === 'object' ? JSON.stringify(value) : value}
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

      <div style={{ marginTop: '1rem' }}>
        <h5 style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>💾 Guardar como nuevo estado</h5>
        <input
          placeholder="nombre del nuevo estado"
          value={cloneName}
          onChange={(e) => setCloneName(e.target.value)}
          style={{ width: '100%', padding: '0.4rem', border: '1px solid #ccc',
            borderRadius: '6px' }}
        />
        <button onClick={handleCloneState} style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
          💾 Clonar estado
        </button>
      </div>
    </div>
  );
}

function tryParseValue(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
