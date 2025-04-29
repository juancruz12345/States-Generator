
import { StateEditor } from './StateEditor.jsx';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const parsePropValue = (value) => {
  try {
    return JSON.parse(value); // Intenta parsear JSON primero
  } catch {
    if (typeof value === 'string' && value.trim().startsWith('(')) {
      try {
        // Usar new Function en lugar de eval
        return new Function(`return ${value}`)();
      } catch {
        return value; // Si falla, devuelve el string original
      }
    }
    return value;
  }
};


export default function StateRenderer({ states, Component, name, jsxCode, cssCode}) {
  const [localStates, setLocalStates] = useState({ ...states })
  const [showExport, setShowExport] = useState(false)
  const [cloneName, setCloneName] = useState('')
  const [copied, setCopied] = useState(null)
  const [msgCopied, setMsgCopied] = useState('')

  

  useEffect(() => {
    setLocalStates(states)
  }, [name])
  
 
 const handlePropChange = (stateName, newProps) => {
    setLocalStates((prev) => ({
      ...prev,
      [stateName]: newProps,
    }))
  }

  const handleClone = (newName,props) => {
    if (localStates[newName]) {
      alert('⚠️ Ya existe un estado con ese nombre.')
      return
    }
    setLocalStates((prev) => ({
      ...prev,
      [newName]:props,
    }))
  }

  const generateJSXCode = () => {
    const entries = Object.entries(localStates)
      .map(([key, val]) => `  ${JSON.stringify(key)}: ${JSON.stringify(val, null, 2)}`)
      .join(',\n')

    return `export const states = {\n${entries}\n};`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateJSXCode())
    alert('📋 Código copiado al portapapeles')
  }

  const downloadJSFile = () => {
    const blob = new Blob([generateJSXCode()], { type: 'text/javascript' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${name.replace(/\s/g, '')}_states.js`
    link.click()
    URL.revokeObjectURL(url)
  }

  const mapProps = (rawProps) => {
    const result = {}
    for (const key in rawProps) {
      result[key] = parsePropValue(rawProps[key])
    }
    return result
  }

  const handleCloneState = () => {
    if (!cloneName) return
    handleClone(cloneName, {})
    setCloneName('')
  }
 
  
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
      setCopied(label)

    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div style={{ marginTop: '2rem' }}>
     
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       
       <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
       >
       <button onClick={() => setShowExport(!showExport)} className='button-secondary' >
          {showExport ? '🔽 Ocultar exportación' : '📤 Exportar estados'}
        </button>
      
       </motion.div>


       <motion.div
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.2 }}
        style={{display:'flex',gap:'22px'}}
        
       >
       
            <button className='button-secondary' onClick={() => {handleCopy(jsxCode, `${name} JSX`), setMsgCopied('jsx')}}>{copied !==null && msgCopied==='jsx' ? <div className="copied-alert">✔ {copied?.split(' ')[1]} copiado</div> : '📄 Copiar JSX' }</button>
            <button className='button-secondary' onClick={() => {handleCopy(cssCode, `${name} CSS`),setMsgCopied('css')}}>{copied!==null && msgCopied==='css'  ? <div className="copied-alert">✔ {copied?.split(' ')[1]} copiado</div> : '🎨 Copiar CSS'}</button>
         
       </motion.div>

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
      <div className='state-div'>
      {Object.entries(localStates).map(([stateName, props]) => {
  const mappedProps = mapProps(props)
  const tagName = Component.name?.toLowerCase?.() || '';
  const voidElements = ['input', 'img', 'br', 'hr', 'meta', 'link']
  const isVoid = voidElements.includes(tagName)
  const cleanProps = isVoid
    ? Object.fromEntries(Object.entries(mappedProps).filter(([key]) => key !== 'children'))
    : mappedProps

  return (
    <motion.div
      key={`${name}-${stateName}`}
      className="state-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <h3>{stateName}</h3>
      <div className="state-preview">
        
        <Component key={props?.type || 'default'} {...cleanProps} />
      </div>
      <StateEditor
        stateName={stateName}
        props={props}
        onUpdate={handlePropChange}
        onClone={handleClone}
      />
    </motion.div>
  );
})}

      </div>
      </div>



      <div className='state-card' style={{width:'fit-content', display:'flex', flexDirection:'column', marginTop:'1rem'}}>
        <h3>➕  Crear estado </h3>
        <h5 style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>📝 Nombre</h5>
        <input
          placeholder="nombre del nuevo estado"
          defaultValue=''
          onChange={(e) => setCloneName(e.target.value)}
          style={{ width: '100%', padding: '0.4rem', border: '1px solid #ccc',
            borderRadius: '6px' }}
        />
        <button onClick={handleCloneState} style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
        Crear
        </button>
      </div>
    </div>
  );
}

  