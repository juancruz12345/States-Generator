import { useState } from 'react';
import React from 'react';
import * as Babel from '@babel/standalone';
import './UploadComponent.css';

export function UploadComponent({ onComponentReady }) {
  const [error, setError] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const rawCode = await file.text();

      // 🚫 Detectar imports externos (excepto "react")
      const hasExternalImports = rawCode
        .split('\n')
        .some((line) => {
          const match = line.match(/^import\s+.*?from\s+['"]([^'"]+)['"]/);
          if (!match) return false;
          const pkg = match[1];
          return pkg !== 'react';
        });

      if (hasExternalImports) {
        setError(
          '❌ El componente contiene imports externos. Solo se permiten componentes sin dependencias externas.'
        );
        return;
      }

      // 1. Eliminar líneas import
      const codeWithoutImports = rawCode
        .split('\n')
        .filter((line) => !line.trim().startsWith('import '))
        .join('\n');

      // 2. Convertir exportaciones a CommonJS
      const cleanedCode = codeWithoutImports
        .replace(/export\s+default\s+/g, 'module.exports.default = ')
        .replace(/export\s+const\s+(\w+)\s*=\s*/g, 'module.exports.$1 = ');

      // 3. Transpilar JSX y usar classic ;)
      const transformed = Babel.transform(cleanedCode, {
        presets: [['react', { runtime: 'classic' }]],
      }).code;

      // 4. Ejecutar en sandbox
      const module = { exports: {} };
      const func = new Function('module', 'exports', 'React', transformed);
      func(module, module.exports, React);

      const Component = module.exports.default;
      const states = module.exports.states || { Default: {} };

      if (!Component) {
        throw new Error('No se encontró export default');
      }
      
      onComponentReady({ name: file.name, Component, states });
      setError(null);
    } catch (err) {
      console.error(err);
      setError(
        '⚠️ Error al procesar el archivo. Verifica que sea JSX válido y que el componente no tenga dependencias externas.'
      );
    }
  };

  return (
    <div className="upload">
      <label className="upload-label">
        📁 Subí tu componente personalizado:
        <input type="file" accept=".js,.jsx" onChange={handleFile} className="upload-input" />
      </label>

      <ul className="upload-hints">
        <li>🔹 Debe ser un componente funcional de React</li>
        <li>🔹 Exportado por <code>default</code></li>
        <li>🔹 Puede incluir <code>export const states</code></li>
        <li>🔹 Sin dependencias externas</li>
        <li>✅ Formato: <code>.js</code> o <code>.jsx</code></li>
      </ul>

      <p style={{ marginTop: '1rem', fontWeight: 600 }}>🧪 Ejemplo de componente válido:</p>
      <pre className="upload-code">
{`function TestComponent({ label, style, onClickFunction }) {
    return <button onClick={onClickFunction} style={style}>{label}</button>;
  }
  
  export default TestComponent;
  
  export const states = {
    Default: { label: "Click me",onClickFunction:"(e) => console.log('clicked')" },
    Danger: { label: "Eliminar", style: { backgroundColor: "red", color: "white" } },
   
  };
  `}
      </pre>

      {error && <p className="upload-error">{error}</p>}
    </div>
  );
}
