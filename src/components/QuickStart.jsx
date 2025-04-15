import exampleFile from '../components/TestComponent.jsx?raw' // 👉 importante si usás Vite

export default function QuickStart() {
  const handleDownloadExample = () => {
    const blob = new Blob([exampleFile], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'TestComponent.jsx';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        color: 'var(--text)',
        maxWidth: '100%',
      }}
    >
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>
        🧭 Guía Rápida
      </h2>

      <p style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
        <strong>UI Component Lab</strong> es una herramienta para desarrolladores frontend
        que permite visualizar, testear y documentar componentes React de forma interactiva.
      </p>

      <ul
        style={{
          listStyle: 'none',
          paddingLeft: 0,
          marginBottom: '1.5rem',
          lineHeight: 1.7,
        }}
      >
        <li>📁 <strong>Subí</strong> un archivo <code>.jsx</code> con <code>export default</code> y <code>export const states</code>.</li>
        <li>👀 <strong>Visualizá</strong> automáticamente cada estado del componente.</li>
        <li>🛠 <strong>Editá</strong> props como <code>label</code>, <code>style</code>, etc. directamente desde la UI.</li>
        <li>➕ <strong>Agregá, eliminá o cloná</strong> estados sin tocar el código.</li>
        <li>📤 <strong>Exportá</strong> los estados como código o archivo listo para usar.</li>
      </ul>

      <div
        style={{
          background: 'rgba(255, 200, 0, 0.1)',
          border: '1px dashed rgba(255, 200, 0, 0.4)',
          padding: '1rem',
          borderRadius: '12px',
          fontSize: '0.9rem',
          lineHeight: 1.5,
        }}
      >
        ⚠️ <strong>Importante:</strong> El componente <strong>no debe importar librerías externas</strong> como <code>axios</code> o <code>framer-motion</code>. Solo se admite React puro.
      </div>

      <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.85 }}>
        💡 Ideal para desarrollo rápido, validación de props, documentación de componentes y revisión en equipo.
      </p>

      <button
        onClick={handleDownloadExample}
        style={{
          marginTop: '1.5rem',
          padding: '0.6rem 1rem',
          fontSize: '0.9rem',
          backgroundColor: 'var(--button-bg)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        📄 Descargar ejemplo válido
      </button>
    </div>
  );
}
